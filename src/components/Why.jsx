import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Why = () => {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: "170px",
        my: 1,
        mt: 5,
        p: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Left side: Text block */}
      <Box sx={{ flex: 1 }}>
        {/* Heading: "Why SecTheta?" */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Why{" "}
          <Box component="span" sx={{ color: "red" ,
            borderBottom: "0.5px solid #ccc",borderWidth:"2px"
          }}>
            SecTheta?
          </Box>
        </Typography>

        {/* Testimonial text in quotes */}
        <Typography
          variant="body1"
          sx={{
            fontStyle: "italic",
            lineHeight: 1.6,
            // borderLeft: "4px solid #ccc",
            pl: 2,
            ml:15,
          }}
        >
          “I truly appreciate the exceptional training provided by{" "}
          <Box component="span" sx={{ color: "red" }}>
            SecTheta
          </Box>{" "}
          in payment security. Their engaging teaching style, hands-on
          instructional techniques, and real-world applications ensure deep
          understanding. This placement guarantee further reinforces their
          commitment to student success. Truly an outstanding learning
          experience.”
        </Typography>
      </Box>

      {/* Right side: Video thumbnail */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: 320 },
          height: { xs: 200, md: 200 },
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 2,
          flexShrink: 0,
        }}
      >
        {/* Placeholder image for video thumbnail */}
        <Box
          component="img"
          src="/public/images/why.png"
          alt="SecTheta Video"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Play button overlay */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 0,
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <PlayArrowIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Why;
