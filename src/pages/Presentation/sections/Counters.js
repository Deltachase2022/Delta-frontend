/*
=========================================================
*React React - v2.1.0
=========================================================

* Product Page: https://www.deltachase.in/product/react
* Copyright 2025 Deltachase Team (https://www.deltachase.in)

Coded by www.deltachase.in

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

//React React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

//React React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import MKTypography from "components/MKTypography";

function Counters() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id "${id}" not found.`);
    }
  };
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Typography */}
          <Grid xs={12} md={4} sm={12}>
            <MKTypography
              variant="h6"
              color="#191A15"
              id="ask_section"
              fontSize="48px"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["2xl"],
                },
              })}
            >
              What would you ask from US
            </MKTypography>
          </Grid>

          {/* Design Blocks */}
          <Grid xs={12} md={6} sm={12} display="flex" alignItems="center" justifyContent="center">
            <p
              style={{
                width: "455px",
                height: "108px",
                color: "#686868",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <span style={{ color: "#134FEF" }}>
                Now when you have met your perfect finance advisor
              </span>{" "}
              you’re closer to achieving your financial goals. With personalized strategies and
              expert guidance, we help you manage, grow, and secure your finances with confidence.
            </p>
          </Grid>

          {/* Pages */}
          <Grid
            xs={12}
            md={2}
            sm={12}
            display="flex"
            className="getBtn"
            alignItems="center"
            justifyContent="left"
            id="services"
          >
            <MKButton
              color="info"
              variant="contained"
              className="getButton"
              sx={{
                borderRadius: "50px", // Makes the button rounded
                padding: "15px 35px", // Ensures proper spacing for rounded buttons
                textTransform: "none", // Keeps the label text uncapitalized
                alignItems: "center",
                display: "inline-block",
              }}
              onClick={() => scrollToSection("services")}
            >
              Get Started
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
