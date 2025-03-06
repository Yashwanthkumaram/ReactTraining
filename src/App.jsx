import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrawerAppBar from "./Navbar";
import MultiActionAreaCard from "./Card";
import ValidatingForm from "./assets/email";
import Projects from "./ProjectCards";
import Portfolio from "./Portfolio";
import Navbar from "./allpath";
import BasicTable from "./empoyees/table";

const App = () =>{
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Portfolio />}  />
          <Route path="Profile" element={<Portfolio/>}/>
          <Route path="Employee" element={<BasicTable/>}/>


        </Routes>
      </BrowserRouter>
    );
  }

  export default App;