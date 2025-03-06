
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box, MenuItem, Select, InputLabel, FormControl, Button } from "@mui/material";
import DrawerAppBar from "../Navbar";
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
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

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="container">
        <DrawerAppBar/>
      <h2 className="text-center mt-4">Employee Table</h2>
      <div className="filters mt-4 mb-4">
        <FormControl fullWidth>
          <InputLabel>Name</InputLabel>
          <Select name="Name" value={filters.Name} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            {employees.map((employee) => (
              <MenuItem key={employee.id} value={employee.firstName}>
                {employee.firstName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select name="Type" value={filters.Type} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            {employees.map((employee) => (
              <MenuItem key={employee.id} value={employee.username}>
                {employee.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Address</InputLabel>
          <Select name="Address" value={filters.Address} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            {employees.map((employee) => (
              <MenuItem key={employee.id} value={employee.address.address}>
                {employee.address.address}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Email</InputLabel>
          <Select name="Email" value={filters.Email} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            {employees.map((employee) => (
              <MenuItem key={employee.id} value={employee.email}>
                {employee.email}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Designation</InputLabel>
          <Select name="Designation" value={filters.Designation} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            {employees.map((employee) => (
              <MenuItem key={employee.id} value={employee.company.title}>
                {employee.company.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" color="Primary" onClick={clearFilters}>
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
  );
};

export default EmployeeTable;
