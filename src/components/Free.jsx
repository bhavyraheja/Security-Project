import React, { useState } from "react";
import { Box, Typography, Container, Button, TextField, Grid } from "@mui/material";
import { ArrowForward } from "@mui/icons-material"; // Make sure to import the ArrowForward icon
import Sidebar from "./sidebar"; // Ensure Sidebar is correctly imported

export default function Free() {
    const [expanded, setExpanded] = useState(false);
    const [content, setContent] = useState('');

    const handleExpand = () => {
        if (expanded) {
            setExpanded(false);
            setContent('');
        } else {
            setExpanded(true);
            setContent('If you’re exploring Payment Security as a career option, you won’t find a more thorough overview. After reading this article, you’ll understand:');
        }
    };
    const items = [
        "What Payment Security Professionals do.",
        "The levels within the Payment Security Career Hierarchy.",
        "The two main entry points in the Payment Security Career Path."
    ];

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10, px: 3 }}>
            {/* Sidebar */}
            <Box sx={{ width: "280px", position: "relative", flexShrink: 0 }}>
                <Sidebar />
            </Box>

            {/* Main Content */}
            <Container
                sx={{
                    maxWidth: "900px",
                    mx: "auto",
                    mt: 4,
                    padding: "40px",
                    backgroundColor: "#fff",
                }}
            >

                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        mb: 2,
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "28px",
                        lineHeight: "42px",
                        letterSpacing: "0%"
                    }}
                >
                    Payment Security <span style={{ color: "red" }}>Career Path</span>
                </Typography>

                <Typography variant="body1" sx={{ textAlign: "center" }}>
                    <b>Want to learn about the Payment Security Career Path</b> with simple, visual, and plain English explanations?
                </Typography>
                {/* Know More Section */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    {expanded && (
                        <Box
                            sx={{
                                mb: 2,
                                backgroundColor: "transparent",
                                borderRadius: "8px",
                                padding: 1,
                                minHeight: "50px",
                                overflowY: "auto",
                                textAlign: "center",
                            }}
                        >
                            <Typography sx={{ color: "#333" }}>{content}</Typography>
                        </Box>
                    )}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start",
                            gap: 2,
                            position: "relative",
                            padding: '12px'
                        }}
                    >
                        <Typography
                            sx={{
                                display: "inline-block",
                                verticalAlign: "middle",
                                border: expanded ? "2px solid black" : "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                            onClick={handleExpand}
                        >
                            {expanded ? "Show Less" : "Know More"}
                        </Typography>

                        <Box>
                            <ArrowForward
                                onClick={handleExpand}
                                sx={{
                                    backgroundColor: "red",
                                    borderRadius: '100%',
                                    padding: '2px',
                                    color: "white",
                                    fontSize: "24px",
                                    transform: expanded ? "rotate(180deg)" : "none",
                                    transition: "transform 0.3s ease",
                                    "&:hover": { backgroundColor: "#d32f2f" },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>



                {/* Image and List Section - Updated for better responsive behavior */}
                <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: 4,
                    p: { xs: 1, sm: 3 },
                    mb: 4
                }}>
                    {/* Left Side: Text List */}
                    <Box sx={{
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        gap: 2

                    }}>
                        {items.map((item, index) => (
                            <Box key={index} sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 1.5,
                                borderRadius: "28px",
                                backgroundColor: "white",
                                color: "black",
                                border: '2px solid #da3d33',
                            }}>
                                <Box sx={{
                                    width: 24,
                                    height: 24,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    bgcolor: "#da3d33",
                                    color: "white",
                                    borderRadius: "50%",
                                    mr: 1.5
                                }}>
                                    ✔
                                </Box>
                                <Typography sx={{ fontSize: "0.875rem" }}>
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Right Side: Image Box - Resized and made responsive */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: { xs: "100%", md: "50%" },
                    }}>
                        <Box
                            component="img"
                            src="/images/freeImage1.png"
                            alt="Payment Security Career Illustration"
                            sx={{
                                width: { xs: "100%", sm: "80%", md: "100%" },
                                maxWidth: "400px",
                                height: "auto",
                                borderRadius: "8px",
                            }}
                        />
                    </Box>
                </Box>

                {/* Subheading */}
                <Typography
                    variant="h6"
                    sx={{
                        textAlign: "center",
                        mb: 3,
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "28px",
                        lineHeight: "42px",
                        letterSpacing: "0%"
                    }}
                >
                    The Payment Security <span style={{ color: "#DA3D33" }}>Career Path</span> – A Common Source of Confusion
                </Typography>


                {/* box  */}
                <Box
                    sx={{
                        width: "488px",
                        height: "80px",
                        border: "1px solid",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 3,
                        marginX: "auto",
                        mb: "1rem"
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "28px",
                            lineHeight: "42px",
                            letterSpacing: "0%",
                            fontWeight: 400,
                        }}
                    >
                        Payment Security
                    </Typography>
                </Box>

                {/* Three Section Navigation */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 6, mb: "9rem" }}>
                    {["Career Path", "Responsibilities", "Compensation"].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: "relative",
                                backgroundColor: "#E32933",
                                color: "white",
                                width: "387px",
                                height: "138px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                mt: "1rem",
                                clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 10% 50%)"
                            }}
                        >
                            {item}
                        </Box>
                    ))}
                </Box>

                {/* Description Section */}
                <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Poppins", mb: 2, textAlign: "center", mt: 10 }}>
                    Breaking Down <span style={{ color: "red" }}>Payment Security</span>
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontFamily: "Poppins", display: "flex", alignItems: "center" }}>
                    <Box sx={{
                        width: 24,
                        height: 24,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#da3d33",
                        color: "white",
                        borderRadius: "50%",
                        mr: 1.5
                    }}>
                        1
                    </Box> For many, the field of Payment Security is complex and difficult to navigate. Understanding how to build a <br /> career in this industry can be challenging, especially for those without direct connections or prior experience.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ mb: 3, fontFamily: "Poppins", display: "flex", alignItems: "center" }}
                >
                    <Box
                        sx={{
                            width: 24,
                            height: 24,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            bgcolor: "#da3d33",
                            color: "white",
                            borderRadius: "50%",
                            mr: 1.5
                        }}
                    >
                        2
                    </Box>
                    With the growing risks in digital payments and financial transactions, Payment Security professionals play <br /> a critical role in safeguarding
                    sensitive data, ensuring compliance with industry standards, and preventing fraud.
                </Typography>

                <Typography variant="body1" sx={{ mb: 10, fontFamily: "Poppins", display: "flex", alignItems: "center" }}>
                    <Box sx={{
                        width: 24,
                        height: 24,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#da3d33",
                        color: "white",
                        borderRadius: "50%",
                        mr: 1.5
                    }}>
                        3
                    </Box> This in-depth guide will break down the Payment Security Career Path, the roles and responsibilities at <br /> each level, and the typical salaries you can expect along the way—all in a clear, illustrated, and easy-to-understand format.

                    Let’s dive in! 🚀
                </Typography>

                {/* Professional Role */}
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    What Do Payment Security <span style={{ color: "red" }}>Professionals</span> Do?
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <svg width="100%" height="20">
                        {/* Bigger Circle on the left */}
                        <circle cx="15" cy="10" r="8" fill="#e32933" />

                        {/* Line extending to the right */}
                        <line x1="25" y1="10" x2="100%" y2="10" stroke="#e32933" strokeWidth="2" />
                    </svg>
                </Box>
                <Typography variant="body1" sx={{ mb: 4, ml: 64 }}>
                    Let’s begin our discussion with a walkthrough of what a Payment Security Professional does.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Poppins", mb: "4rem", textAlign: "center", mt: 10 }}>
                    Within a Typical Payment Security Firm, There are <span style={{ color: "red" }}>Five Key Division</span>
                </Typography>


                {/* Image Below Heading */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <Box
                        component="img"
                        src="public\images\paymentSecurity.png" // Change to your actual image path
                        alt="Five Key Divisions"
                        sx={{ width: "100%", borderRadius: 2 }}
                    />
                </Box>


                {/* Sign-Up Section */}
                <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Poppins", mb: "2rem", textAlign: "center", mt: 10 }}>
                    Learn how to build a career in Payment Security, <br />
                    Typical Roles,Responsibilities, and Compensation Level
                </Typography>


                <Box
                    sx={{
                        backgroundColor: "#fdeeee",
                        padding: "20px",
                        borderRadius: "16px",
                        textAlign: "center",
                        width: "100%",
                        maxWidth: 450,
                        mx: "auto",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                    }}
                >
                    {/* Name Input */}
                    <TextField
                        fullWidth
                        placeholder="Enter your name"
                        variant="outlined"
                        sx={{
                            mb: 2,
                            backgroundColor: "#fff",
                            borderRadius: "50px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                            },
                        }}
                    />

                    {/* Email Input */}
                    <TextField
                        fullWidth
                        placeholder="Enter your email"
                        variant="outlined"
                        sx={{
                            mb: 2,
                            backgroundColor: "#fff",
                            borderRadius: "50px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "50px",
                            },
                        }}
                    />

                    {/* Subscribe Button */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#e32933",
                            color: "#fff",
                            borderRadius: "50px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#c9202b",
                            },
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>

                {/* Register Link */}
                <Typography variant="body1" sx={{ textAlign: "center", mt: 3 }}>
                    Register here for free to get full access to all our articles
                </Typography>

            </Container>
        </Box>
    );
}
