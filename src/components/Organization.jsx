import React from "react";
import { Box, Typography, Grid } from "@mui/material";

/* Example data array */
const companies = [
  {
    name: "Goldman Sachs",
    logo: "/public/images/company1.jpg",
    testimonial: `"Mike's financial courses were a game-changer for me. Thanks to his teachings, I landed my dream job." \n- Isaac P. (Incoming Analyst, Goldman Sachs)`,
  },
  {
    name: "JPMorgan",
    logo: "/public/images/company2.png",
    testimonial: `"My internship at JPMorgan became much smoother after Mike's courses. Highly recommended!" \n- Sarah T. (Intern, JPMorgan)`,
  },
  {
    name: "CenterView Partners",
    logo: "/public/images/company3.png",
    testimonial: `"The modeling skills I gained gave me an edge at Centerview. Truly desk-ready content." \n- Alex B. (Analyst, Centerview Partners)`,
  },
  {
    name: "Blackstone",
    logo: "/public/images/company4.jpg",
    testimonial: `"Mike's unique buy-side perspective prepared me well for my role at Blackstone." \n- Priya K. (Incoming PE Associate)`,
  },
  {
    name: "TPG",
    logo: "/public/images/company5.png",
    testimonial: `"One of the best finance courses I've taken. TPG was impressed with my knowledge." \n- Daniel H. (Analyst, TPG)`,
  },
];

/* Component */
export default function Companies() {
  return (
    <>
      <style>{`
        .card-container {
          perspective: 800px;
        }
        .card-front {
          transform-origin: bottom;
          transition: transform 0.6s;
          backface-visibility: hidden;
        }
        .card-back {
          opacity: 0;
          transition: opacity 0.6s;
          backface-visibility: hidden;
          transform: rotateX(0deg);
        }
        .flip-group:hover .card-front {
          transform: rotateX(-90deg);
        }
        .flip-group:hover .card-back {
          opacity: 1;
        }
      `}</style>

      {/* Main Section */}
      <Box sx={{ py: 8, backgroundColor: "#fff", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "text.primary" }}>
          We Don’t Believe in <br /> Failure... And We Can Prove it.
        </Typography>

        {/* Companies Grid (5 Cards per Row) */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={3}
            sx={{ width: { xs: "100%", md: "85%" } }}
            justifyContent="center"
          >
            {companies.map((company, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2.4} // This ensures exactly 5 cards per row on large screens
                key={index}
                display="flex"
                justifyContent="center"
              >
                {/* Card Container */}
                <Box
                  className="flip-group card-container"
                  sx={{
                    width: 220,
                    height: 200,
                    position: "relative",
                    border: "1px solid #ccc",
                    borderRadius: 3,
                    overflow: "hidden",
                    "&:hover": { boxShadow: 3 },
                  }}
                >
                  {/* Back Face (Testimonial) */}
                  <Box
                    className="card-back"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 2,
                      textAlign: "center",
                      backgroundColor: "#FFF",
                      border: "2px solid #ccc",
                      fontSize: "0.9rem",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {company.testimonial}
                  </Box>

                  {/* Front Face (Logo) */}
                  <Box
                    className="card-front"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f9f9f9",
                      borderRadius: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={company.logo}
                      alt={company.name}
                      sx={{ maxHeight: 50, objectFit: "contain" }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
