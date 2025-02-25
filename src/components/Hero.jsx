import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "200px",
        backgroundColor: "#fff",
        p: 4,
      }}
    >
      {/* Left Text & Button Container */}
      <Box sx={{ mt: 15, ml: 20 }}>
        {/* Single line: "Breaking into CYBERSECURITY is hard" */}
        <Typography sx={{ fontSize: "2rem", fontWeight: 400, mb: 0.5 }}>
          Breaking into{" "}
         
        </Typography>
        <Box
            component="span"
            sx={{ fontWeight: 700, textTransform: "uppercase", mt:3,mb:5,fontSize: "2rem"}}
          >
            Cybersecurity
          </Box>{" "}
          <Box
            component="span"
            sx={{ mt:3,mb:5,ml:1, fontSize: "2rem"}}
          >
           is hard
          </Box>{" "}
          

        {/* Red Button */}
        <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E32933",
            color: "#fff",
            borderRadius: "9999px",
            textTransform: "none",
            px: 3,
            py: 1,
            mt:3,
            mr:2,
            "&:hover": {
              backgroundColor: "#c7252d", // Slightly darker red on hover
            },
          }}
        >
          Find out more
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;








