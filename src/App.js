import React, { createContext, useState } from "react";
import { MenuRoutes } from "./Routes/MenuRoutes.js";
import { ThemeProvider, createTheme } from "@mui/material";

export const Context = createContext("false");

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <Context.Provider value={{ toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <MenuRoutes />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}
