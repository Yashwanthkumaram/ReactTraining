import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box, Button, Autocomplete, TextField } from "@mui/material";
import DrawerAppBar from "../Navbar";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
// -----------------------------

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// const {value} = useContext(ThemeContext)


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
//-------------------------------------




const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    Name: "",
    Type: "",
    Address: "",
    Email: "",
    Designation: "",
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setEmployees(data.users);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleFilterChange = (e, value, name) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      Name: "",
      Type: "",
      Address: "",
      Email: "",
      Designation: "",
    });
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(filters.Name.toLowerCase()) &&
      employee.username.toLowerCase().includes(filters.Type.toLowerCase()) &&
      employee.address.address.toLowerCase().includes(filters.Address.toLowerCase()) &&
      employee.email.toLowerCase().includes(filters.Email.toLowerCase()) &&
      employee.company.title.toLowerCase().includes(filters.Designation.toLowerCase())
    );
  });

//   const filtersdestinationg{

//   };


  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
              <CssBaseline />

    <div className="container">
        
      <DrawerAppBar />
      <h2 className="text-center mt-4">Employee Table</h2>
      <div className="filters mt-4 mb-4">

         <Box
                component="ul"
                sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
              >
        <Autocomplete
          disablePortal
          options={ Array.from( new Set ( employees.map((employee) => employee.firstName)))}
          value={filters.Name}
          sx={{ width: 200 }}

          onChange={(e, value) => handleFilterChange(e, value, "Name")}
          renderInput={(params) => <TextField {...params} label="Name" />}
          fullWidth
        />

        <Autocomplete
          disablePortal
          options={Array.from( new Set ( employees.map((employee) => employee.username)))}
          value={filters.Type}
          sx={{ width: 200 }}

          onChange={(e, value) => handleFilterChange(e, value, "Type")}
          renderInput={(params) => <TextField {...params} label="Type" />}
          fullWidth
        />

        <Autocomplete
          disablePortal
          options={Array.from( new Set ( employees.map((employee) => employee.address.address)))}
          value={filters.Address}
          sx={{ width: 200 }}

          onChange={(e, value) => handleFilterChange(e, value, "Address")}
          renderInput={(params) => <TextField {...params} label="Address" />}
          fullWidth
        />

        <Autocomplete
          disablePortal
          options={Array.from( new Set (employees.map((employee) => employee.email)))}
          value={filters.Email}
          sx={{ width: 200 }}

          onChange={(e, value) => handleFilterChange(e, value, "Email")}
          renderInput={(params) => <TextField {...params} label="Email" />}
          fullWidth
        />

        <Autocomplete
         
          disablePortal
          options={
            // filtersdestinationg();
            // console.log("sss")
            
            Array.from( new Set (employees.map((employee) => employee.company.title)))
        }
          value={filters.Designation}
          sx={{ width: 200 }}

          onChange={(e, value) => handleFilterChange(e, value, "Designation")}
          renderInput={(params) => <TextField {...params} label="Designation" />}
          fullWidth
        />

       
        </Box>

        <Button variant="contained" color="primary" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="employee table">
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Designation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <img
                    src={employee.image}
                    alt="profile"
                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                  />
                </TableCell>
                <TableCell>{employee.firstName} {employee.lastName}</TableCell>
                <TableCell>{employee.username}</TableCell>
                <TableCell>{employee.address.address}</TableCell>
                <TableCell>
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </TableCell>
                <TableCell>{employee.company.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </ThemeProvider>

  );
};

export default EmployeeTable;
