// import React from "react";
// import { Box, Typography, Button } from "@mui/material";

// const Navbar = () => {
//   return (
//     // Outer box that spans full width, fixed to the top with a white background
//     <Box
//       sx={{
//         backgroundColor: "#fff", // White background behind the navbar
//         width: "100%",
//         height:"100px",
//         display: "flex",
//         justifyContent: "center",
//         py: 2,
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 999,
//       }}
//     >
//       {/* Red pill container with 80% width */}
//       <Box
//         sx={{
//           width: "80%",
//           display: "flex",
//           alignItems: "center",
//           backgroundColor: "#E32933",
//           borderRadius: "9999px", // fully rounded corners
//           px:6,
//           py: 1,
//           gap: 4,
//         }}
//       >
//         {/* Left: Placeholder image for logo with objectFit */}
//         <Box
//           component="img"
//           src="/public/images/logo.png" // Replace with your logo URL
//           alt="SecTheta Logo"
//           sx={{ width: 150, height: 150, borderRadius: "50%", mr: 1, mb:1,objectFit: "contain" }}
//         />

//         {/* Center: Nav Links */}
//         <Box sx={{ display: "flex", gap: 2 }}>
//           {["About", "Courses", "Free", "Blog"].map((item) => (
//             <Typography
//               key={item}
//               variant="body1"
//               sx={{
//                 color: "white",
//                 cursor: "pointer",
//                 fontSize:"20px",
//                 pl:4,
//                 "&:hover": { opacity: 0.8 },

//               }}
//             >
//               {item}
//             </Typography>
//           ))}
//         </Box>

//         {/* Right: Login Button */}
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#fff",
//             color: "black",
//             borderRadius: "30px",
//             textTransform: "none",
//             ml:70,
//             height:"50px",
//             width:"60px",
//             pl:6,
//             pr:6,
//             fontSize:"20px",
//             "&:hover": {
//               backgroundColor: "#f2f2f2",
//             },
//           }}
//         >
//           Login
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";



// const Navbar = () => {
//   return (
//     // Outer box that spans full width, fixed to the top with a white background
//     <Box
//       sx={{
//         backgroundColor: "#fff", // White background behind the navbar
//         width: "100%",
//         height:"100px",
//         display: "flex",
//         justifyContent: "center",
//         py: 2,
//         position: "fixed",
//         top: 0,
//         left: 0,
//         zIndex: 999,
//       }}
//     >
//       {/* Red pill container with 80% width */}
//       <Box
//         sx={{
//           width: "80%",
//           display: "flex",
//           alignItems: "center",
//           backgroundColor: "#E32933",
//           borderRadius: "9999px", // fully rounded corners
//           px: 6,
//           py: 1,
//           gap: 4,
//           justifyContent: "space-between", // Distribute space evenly between left and right
//         }}
//       >
//         {/* Left: Placeholder image for logo with objectFit */}
//         <Box
//           component="img"
//           src="/public/images/logo.png" // Replace with your logo URL
//           alt="SecTheta Logo"
//           sx={{ width: 150, height: 150, borderRadius: "50%", objectFit: "contain" }}
//         />

//         {/* Center: Nav Links */}
//         <Box sx={{ display: "flex", gap: 2 }}>
//           {["About", "Courses", "Free", "Blog"].map((item) => (
//             <Typography
//               key={item}
//               variant="body1"
//               sx={{
//                 color: "white",
//                 cursor: "pointer",
//                 fontSize: "20px",
//                 "&:hover": { opacity: 0.8 },
//               }}
//             >
//               {item}
//             </Typography>
//           ))}
//         </Box>

//         {/* Right: Login Button */}
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#fff",
//             color: "black",
//             borderRadius: "30px",
//             textTransform: "none",
//             height: "50px",
//             width: "120px", // Adjust button width to make it more comfortable
//             fontSize: "20px",
//             "&:hover": {
//               backgroundColor: "#f2f2f2",
//             },
//           }}
//         >
//           Login
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        py: 2,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#da3d33",
          borderRadius: "9999px",
          px: 6,
          py: 1,
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src="/public/images/logo.png"
          alt="SecTheta Logo"
          sx={{ width: 150, height: 150, borderRadius: "50%", objectFit: "contain" }}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          {["About", "Courses", "Free", "Blog"].map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: "20px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": { opacity: 0.8 },
              }}
              onMouseEnter={(e) =>
                item === "Courses" || item === "Free" ? handleMouseEnter(e, item) : null
              }
            >
              {item} {(item === "Courses" || item === "Free") && <ArrowDropDownIcon />}
            </Typography>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            borderRadius: "30px",
            textTransform: "none",
            height: "50px",
            width: "120px",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          Login
        </Button>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && Boolean(openMenu)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        sx={{ mt: 2 }}
      >
        {openMenu === "Courses" && (
          <>
            <MenuItem onClick={handleClose}>All Courses</MenuItem>
            <MenuItem onClick={handleClose}>How Are We Different</MenuItem> 
          </>
        )}
        {openMenu === "Free" && (
          <>
            <MenuItem onClick={() => (window.location.href = "/How-Does-Payment-Security-Work?")}>How Does Payment Security Work?</MenuItem> 
            <MenuItem onClick={handleClose}>MasterClass</MenuItem>
            
            <MenuItem onClick={handleClose}>Reading Materials</MenuItem>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default Navbar;
