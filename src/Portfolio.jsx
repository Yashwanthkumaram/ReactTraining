import "./App.css";
import DrawerAppBar from "./Navbar";
import MultiActionAreaCard from "./Card";
import ValidatingForm from "./assets/email";
import Projects from "./ProjectCards";
import Scroll from "react-scroll";
// -----------------------------

//-------------------------------------

function Portfolio() {
  return (
    
    <>
      
      <DrawerAppBar />
      <MultiActionAreaCard />
      <Projects />
      <ValidatingForm />
    </>
  );
}

export default Portfolio;
