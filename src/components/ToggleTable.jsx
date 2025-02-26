import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const ComparisonTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  // State to track selected toggle button
  const [selectedCategory, setSelectedCategory] = useState("Approach");

  // Handle toggle button change
  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  // Data for Approach - defined as a constant to prevent re-creation
  const approachFeatures = [
    { id: 'a1', name: 'Focused on Infosec?', sectheta: true, infosecTrain: true, udemy: false, coursera: false },
    { id: 'a2', name: 'On-the-Job training?', sectheta: true, infosecTrain: false, udemy: false, coursera: false },
    { id: 'a3', name: 'Placement Assistance?', sectheta: true, infosecTrain: false, udemy: false, coursera: false },
  ];

  // Data for Content + Delivery - defined as a constant to prevent re-creation
  const contentDeliveryFeatures = [
    { id: 'c1', name: 'Instructors are experienced QSAs', sectheta: true, infosecTrain: false, udemy: false, coursera: false },
    { id: 'c2', name: 'Learning Format', sectheta: "Interactive Video", infosecTrain: "Audio-Only Slide Voiceovers", udemy: "Audio-Only Slide Voiceovers", coursera: "Audio-Only Slide Voiceovers" },
    { id: 'c3', name: 'Content Style', sectheta: "Engaging Animations", infosecTrain: "Static Slides", udemy: "Static Slides", coursera: "Static Slides" },
  ];

  // Get features based on selected category
  const getFeatures = () => {
    return selectedCategory === "Approach" ? approachFeatures : contentDeliveryFeatures;
  };

  // Responsive cell padding based on screen size
  const getCellPadding = () => {
    if (isExtraSmall) return 1;
    if (isMobile) return 1.5;
    return 2;
  };

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: 'center',
      paddingTop: { xs: "3rem", sm: "4rem", md: "6rem" },
      px: { xs: 1, sm: 2, md: 3 }
    }}>
      <Box sx={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 3,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem', lg: '2.125rem' },
            px: { xs: 1, sm: 2 }
          }}
        >
          <Box component="span" sx={{ fontWeight: 'bold' }}>Sectheta</Box>
          <Box component="span" sx={{ color: 'text.secondary' }}> vs </Box>
          <Box component="span" sx={{ fontWeight: 'bold' }}>Competitor</Box>
        </Typography>

        {/* Toggle Button Group */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
          width: '100%',
          px: { xs: 2, sm: 4 }
        }}>
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "25px",
              padding: "5px",
              marginBottom: "20px",
              width: { xs: '100%', sm: '90%', md: '70%', lg: '50%' },
              maxWidth: "500px"
            }}
          >
            <ToggleButton
              value="Approach"
              sx={{
                borderRadius: "25px",
                textTransform: "none",
                flex: 1,
                py: { xs: 0.5, sm: 0.75, md: 1 },
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                bgcolor: selectedCategory === "Approach" ? "#e32933" : "transparent",
                color: selectedCategory === "Approach" ? "white" : "inherit",
                '&.Mui-selected': {
                  bgcolor: "#e32933",
                  color: "white",
                  '&:hover': {
                    bgcolor: "#d32f2f",
                  }
                }
              }}
            >
              Approach
            </ToggleButton>
            <ToggleButton
              value="Content + Delivery"
              sx={{
                borderRadius: "25px",
                textTransform: "none",
                flex: 1,
                py: { xs: 0.5, sm: 0.75, md: 1 },
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                bgcolor: selectedCategory === "Content + Delivery" ? "#e32933" : "transparent",
                color: selectedCategory === "Content + Delivery" ? "white" : "inherit",
                '&.Mui-selected': {
                  bgcolor: "#e32933",
                  color: "white",
                  '&:hover': {
                    bgcolor: "#d32f2f",
                  }
                }
              }}
            >
              Content + Delivery
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {/* Comparison Table */}
          <TableContainer
            component={Paper}
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              boxShadow: 1,
              width: '100%',
              overflowX: 'auto',
              maxWidth: "1000px",
              mx: { xs: 0.7, sm: 2, md: 3 }
            }}
          >
            <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow sx={{ bgcolor: '#e32933' }}>
                  <TableCell
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                      padding: getCellPadding(),
                      fontSize: { xs: '0.55rem', sm: '0.875rem', md: '1rem' }
                    }}
                  >
                    Features
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                      padding: getCellPadding(),
                      width: { xs: '17.5%', md: '20%' }
                    }}
                  >
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: isMobile ? 'column' : 'row'
                    }}>
                      <Box
                        component="img"
                        src="/public/images/logo.png"
                        alt="SecTheta"
                        sx={{
                          width: { xs: 140, sm: 120, md: 100, lg: 110 }, // Increased sizes for small screens
                          maxWidth: '100%', // Prevents overflow
                          height: 'auto', // Maintains aspect ratio
                          objectFit: 'contain', // Ensures it doesn’t get stretched or cropped
                          display: 'block', // Prevents extra spacing below the image
                          mx: 'auto' // Centers the image horizontally if needed
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      padding: getCellPadding(),
                      width: { xs: '25%', sm: '20%', md: '20%' }, // Adjusted width for better spacing
                      fontSize: { xs: '0.55rem', sm: '0.75rem', md: '1rem' },
                      textAlign: 'center',
                      whiteSpace: 'normal', // Enables text wrapping
                      wordBreak: 'break-word', // Ensures words break instead of overflowing
                      overflow: 'hidden', // Prevents content from spilling out
                      textOverflow: 'ellipsis', // Adds "..." when text is too long
                      maxWidth: { xs: '60px', sm: '100px', md: '150px' } // Responsive width
                    }}
                  >
                    Infosec Train
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                      padding: getCellPadding(),
                      width: { xs: '17.5%', md: '20%' },
                      fontSize: { xs: '0.55rem', sm: '0.875rem', md: '1rem' }
                    }}
                  >
                    Udemy
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                      padding: getCellPadding(),
                      width: { xs: '17.5%', md: '20%' },
                      fontSize: { xs: '0.55rem', sm: '0.875rem', md: '1rem' }
                    }}
                  >
                    Coursera
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getFeatures().map((feature) => (
                  <TableRow key={feature.id}>
                    <TableCell
                      sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                        padding: getCellPadding(),
                        whiteSpace: 'normal',  // Ensures text wraps in smaller screens
                        wordBreak: 'break-word', // Breaks long words
                        overflow: 'hidden', // Hides overflow text
                        textOverflow: 'ellipsis', // Adds "..." if text is too long
                        maxWidth: { xs: '100px', sm: '150px', md: '200px' } // Restricts max width
                      }}
                    >
                      {feature.name}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        padding: getCellPadding(),
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                      }}
                    >
                      {typeof feature.sectheta === 'boolean' ?
                        (feature.sectheta ?
                          <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                          <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                        ) :
                        <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}>
                          {feature.sectheta}
                        </Typography>
                      }
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        padding: getCellPadding(),
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                      }}
                    >
                      {typeof feature.infosecTrain === 'boolean' ?
                        (feature.infosecTrain ?
                          <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                          <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                        ) :
                        <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}>
                          {feature.infosecTrain}
                        </Typography>
                      }
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        padding: getCellPadding(),
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                      }}
                    >
                      {typeof feature.udemy === 'boolean' ?
                        (feature.udemy ?
                          <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                          <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                        ) :
                        <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}>
                          {feature.udemy}
                        </Typography>
                      }
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        padding: getCellPadding(),
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                      }}
                    >
                      {typeof feature.coursera === 'boolean' ?
                        (feature.coursera ?
                          <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                          <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                        ) :
                        <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' } }}>
                          {feature.coursera}
                        </Typography>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ComparisonTable;
