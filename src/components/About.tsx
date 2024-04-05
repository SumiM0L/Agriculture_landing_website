import { Box, Typography } from "@mui/material";
import React from "react";
import fruit from "../assets/frui.png";
import veg from "../assets/veg.png";
import tickmark from "../assets/tickmark.png";
import element from "../assets/elements.png";

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" }, // Change direction for smaller screens
      }}
    >
      <Box>
        <img src={element} alt="element" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: { xs: "center", md: "left" }, // Center text for smaller screens
          maxWidth: { xs: "100%", md: "50%" }, // Limit width for larger screens
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#EEC044",
              fontFamily: "Comic Sans MS",
              fontSize: "24px",
            }}
          >
            Our Introductions
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Serif",
              fontSize: "48px",
              color: "#1F1E17",
              lineHeight: 1,
              fontWeight: "bold",
            }}
          >
            Agriculture & Organic
            <br /> Product Farm
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "26px", fontFamily: "Serif", color: "#4BAF47" }}
          >
            Agrios is the largest global organic farm.
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontFamily: "Serif", color: "#878680", fontSize: "16px" }}
          >
            There are many variations of passages of lorem ipsum available but
            the
            <br /> majority have suffered alteration in some form by injected
            humor or <br />
            random word which don’t look even.
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: { xs: 2, md: 0 }, // Add margin bottom for smaller screens
            }}
          >
            <Box>
              {" "}
              <img src={veg} alt="veg" />
            </Box>
            <Box ml={{ xs: 1, md: 2 }}>
              {" "}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Comic Sans MS",
                  fontWeight: "bold",
                  color: "#1F1E17",
                }}
              >
                Growing fruits vegetables
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              {" "}
              <img src={fruit} alt="fruit" />
            </Box>
            <Box ml={{ xs: 1, md: 2 }}>
              {" "}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Comic Sans MS",
                  fontWeight: "bold",
                  color: "#1F1E17",
                }}
              >
                Tips for ripening your fruits
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            mb: 2, // Add margin bottom for smaller screens
          }}
        >
          <Box>
            <img src={tickmark} alt="tick" />
          </Box>
          <Box ml={1}>
            {" "}
            <Typography
              sx={{ fontFamily: "Serif", fontSize: "16px", fontWeight: "bold" }}
            >
              {" "}
              We're using a new technology
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box>
            <img src={tickmark} alt="tick" />
          </Box>
          <Box ml={1}>
            {" "}
            <Typography
              sx={{ fontFamily: "Serif", fontSize: "16px", fontWeight: "bold" }}
            >
              {" "}
              Good in smart organic services
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
