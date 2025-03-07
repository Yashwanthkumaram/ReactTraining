import { createContext } from "react";
import EmployeeTable from "./table";

import { ThemeContext } from "./contexts/themeContext";

function Employee() {
  return (
    <ThemeContext.Provider value="dark">
        <Employee/>
      </ThemeContext.Provider>
  );
}

export default Employee;
