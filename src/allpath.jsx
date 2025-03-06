import "./App.css";
import DrawerAppBar from "./Navbar";
import MultiActionAreaCard from "./Card";
import ValidatingForm from "./assets/email";
import Projects from "./ProjectCards";
import Scroll from "react-scroll";

function Navbar() {
  return (
    <>
      <DrawerAppBar />
      <MultiActionAreaCard />
      <Projects />
      <ValidatingForm />
    </>
  );
}

export default Navbar;
