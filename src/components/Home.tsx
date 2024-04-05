import { Box, Typography } from "@mui/material";
import React from "react";
import backgroundImage from "../assets/agribackground.png";
import agro from "../assets/AGRO.png";

function Home() {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    textAlign: "center",
    maxWidth: "800px",
    padding: "20px",
    backgroundColor: "transparent",
    borderRadius: "10px",
  };

  return (
    <Box sx={backgroundStyles}>
      <Box sx={contentStyles}>
        <Typography
          sx={{
            fontFamily: "Serif",
            fontSize: "16px",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          Welcome to agrios farming
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "45px", md: "120px" },
            color: "#fff",
            lineHeight: 1,
            fontFamily: "Comic Sans MS",
          }}
        >
          Agriculture
          <span>
            <img src={agro} alt="Agro Icon" />
          </span>
          <br />
          Eco Farming
        </Typography>
        <Typography
          sx={{ fontFamily: "Serif", fontSize: "16px", color: "#fff" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,
          <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Serif",
            fontSize: "16px",
            backgroundColor: "#4BAF47",
            color: "#fff",
            borderRadius: "13px",
            display: "inline-block",
            padding: "10px 20px",
            marginTop: "20px",
          }}
        >
          Discover More
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
