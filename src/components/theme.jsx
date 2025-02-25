// // theme.js
// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     background: {
//       default: "#fff",  // Ensures the default background is white
//     },
//   },
// });

// export default theme;



// src/components/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "light",
    background: {
      default: "#fff",
    },
  },
});

export default theme;
