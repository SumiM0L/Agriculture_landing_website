import { Box, Typography } from "@mui/material";
import React from "react";
import star from "../assets/star.png";
import avatar from "../assets/avatar.png";

function Testmonials() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#F8F7F0",
        padding: { xs: "20px", md: "50px" }, // Adjust padding based on screen size
      }}
    >
      <Box sx={{ marginBottom: { xs: "20px", md: 0 } }}>
        {" "}
        {/* Add margin bottom for small screens */}
        <Typography
          variant="h4"
          sx={{
            color: "#EEC044",
            fontFamily: "Comic Sans MS",
            fontSize: { xs: "22px", md: "24px" },
            textAlign: { xs: "center", md: "left" }, // Center text on small screens, align left on medium screens
          }}
        >
          Our Testimonials
        </Typography>
        <Typography
          sx={{
            color: "#1F1E17",
            fontFamily: "serif",
            textAlign: { xs: "center", md: "left" }, // Center text on small screens, align left on medium screens
            fontSize: "48px",
            lineHeight: 1,
            fontWeight: "bold",
          }}
        >
          What they are talking about
          <br />
          Agrios
        </Typography>
        <Typography
          sx={{
            fontFamily: "serif",
            textAlign: {
              xs: "center",
              md: "left",
              fontSize: "16px",
              color: "#878680",
            },
          }}
        >
          There are many variations of passages of
          <br /> available but the majority have suffered
          <br /> alteration in some form by injected humor <br />
          or random word which don't look even.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Serif",
            fontSize: "16px",
            backgroundColor: "#4BAF47",
            color: "#fff",
            borderRadius: "13px",
            display: "inline-block",
            padding: "10px 10px",
            marginTop: "20px",
            textAlign: { xs: "center", md: "left" }, // Center text on small screens, align left on medium screens
          }}
        >
          View All Testimonials
        </Typography>
      </Box>
      <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
        {" "}
        {/* Set max width for small screens */}
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <Typography sx={{ fontFamily: "serif", color: "#878680" }}>
            There are many variations of passages of available but
            <br /> the majority have suffered alteration in some form by
            injected
            <br /> humor or random word which don't look even.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{ fontFamily: "Serif", fontSize: "16px", fontWeight: "bold" }}
          >
            Bonnie Toblert
          </Typography>
          <Box sx={{ display: "flex" }}>
            {[...Array(5)].map((_, index) => (
              <Box key={index}>
                <img src={star} alt={`star${index + 1}`} />
              </Box>
            ))}
          </Box>
          <Box>
            <img src={avatar} alt="avatar" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Testmonials;
