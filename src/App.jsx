import React from "react";
import { ThemeProvider, CssBaseline, Box, ToggleButton } from "@mui/material";
import theme from "./components/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<Home />}
          />
        </Routes>


      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
