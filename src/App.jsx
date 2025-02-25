import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./components/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Organization from "./components/Organization";
import Sidebar from "./components/sidebar";
import Free from "./components/Free";
import { BrowserRouter, Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"
      element="home"
      />
    </Routes>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        <Navbar />
        {/* <Hero /> */}
        {/* <Why /> */}
        {/* <Organization /> */}
        <Sidebar/>
        <Free/>
      </Box>
      
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
