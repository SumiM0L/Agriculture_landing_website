import React from "react";
import benifitsimage from "../assets/benifits.png";
import greentick from "../assets/greentick.png";
import yellowtick from "../assets/yellowtick.png";
import orangetick from "../assets/orangetick.png";
import { Box, Typography, Grid } from "@mui/material";

function Benifits() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img src={benifitsimage} alt="im" style={{ maxWidth: "100%" }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography
            variant="h4"
            sx={{ color: "#EEC044", fontFamily: "Comic Sans MS" }}
          >
            Our Farm Benefits
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#1F1E17",
              fontFamily: "serif",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            Why Choose Agrios Market
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "serif", color: "#878680" }}
          >
            There are many variations of passages of available but the majority
            have suffered alteration in some form by injected humor or random
            word which don't look even.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <img
                  src={greentick}
                  alt="greentick"
                  style={{ marginRight: "8px" }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Quality Organic Food
                </Typography>
              </Box>
              <Typography
                sx={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                variant="body2"
                // sx={{ color: "#878680" }}
              >
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <img
                  src={yellowtick}
                  alt="yellowtick"
                  style={{ marginRight: "8px" }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Professional Farmers
                </Typography>
              </Box>
              <Typography
                sx={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                variant="body2"
                // sx={{ color: "#878680" }}
              >
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <img
                  src={orangetick}
                  alt="orangetick"
                  style={{ marginRight: "8px" }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Discover More
                </Typography>
              </Box>
              <Typography
                sx={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                variant="body2"
                // sx={{ color: "#878680" }}
              >
                There are variation You need to be sure there is anything hidden
                in the middle of text.
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            sx={{
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
      </Grid>
    </Grid>
  );
}

export default Benifits;
