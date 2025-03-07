import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
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