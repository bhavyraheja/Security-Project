import React, { useState, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const tableOfContents = [
  { title: "TL;DR", link: "#tl-dr" },
  { title: "The Investment Banking Career Path…A Common Source of Confusion", link: "#career-path" },
  { title: "What Do Investment Banks Do?", link: "#what-do-investment-banks-do" },
  { title: "Want To Learn More About Finance?", link: "#learn-more-finance" },
  { title: "A ‘Typical’ Investment Banking Career Path", link: "#typical-career-path" },
  { title: "How to Land a Full-Time Investment Banking Role", link: "#land-fulltime-role" },
  { title: "The Pre-MBA Recruiting Cycle", link: "#pre-mba-cycle" },
  { title: "How to Get Into Investment Banking", link: "#get-into-banking" },
  { title: "Investment Banking Career Path: Analysts", link: "#career-path-analysts" },
  { title: "Investment Banking Career Path: Vice Presidents", link: "#career-path-vps" },
  { title: "Investment Banking Career Path: Senior Vice Presidents", link: "#career-path-svp" },
  { title: "Investment Banking Career Path: Managing Director", link: "#career-path-md" },
  { title: "How Can I Succeed in Investment Banking?", link: "#succeed-in-banking" },
  { title: "Should I Pursue a Career in Investment Banking?", link: "#pursue-career-banking" },
  { title: "Wrap-Up: Investment Banking Career Path", link: "#wrap-up-career-path" },
  { title: "Investment Banking Career Path: Animated Explainer Video", link: "#animated-video" },
  { title: "Related Links", link: "#related-links" },
  { title: "About the Author", link: "#about-author" },
  { title: "Aiming for Investment Banking, Private Equity, or Investment Management?", link: "#investment-management" },
  { title: "Frequently Asked Questions", link: "#faq" },
];

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      
      // Show sidebar when scrolled 50% down
      if (scrollPosition > pageHeight * 0.02) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        width: "300px",
        height: "calc(100vh - 100px)", // Adjusting height to avoid navbar overlap
        position: "fixed",
        top: "100px", // Adds margin below the navbar
        left: showSidebar ? "0" : "-350px", // Hide sidebar initially
        overflowY: "auto",
        borderRight: "1px solid #ccc",
        p: 2,
        backgroundColor: "white",
        transition: "left 0.3s ease-in-out", // Smooth transition effect
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Table of Contents
      </Typography>
      <List sx={{ paddingLeft: 1 }}>
        {tableOfContents.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <a
              href={item.link}
              onClick={(e) => {
                e.preventDefault(); // Prevent default jump behavior
                setActiveLink(item.link); // Set active link
                window.location.hash = item.link; // Update URL hash
              }}
              style={{
                textDecoration: "none",
                color: activeLink === item.link ? "red" : "black", // Only one red at a time
                fontSize: "14px",
                display: "block",
                width: "100%",
                transition: "color 0.2s ease-in-out",
              }}
            >
              <ListItemText primary={item.title} />
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
