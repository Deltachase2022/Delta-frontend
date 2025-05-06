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

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//React React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

import BankOfBaroda from "assets/images/testimonial/BankOfBaroda.png";
import SBI from "assets/images/testimonial/SBI.png";
import PNB from "assets/images/testimonial/PNB.png";
import ICICI from "assets/images/testimonial/ICICI.png";
import HDFC from "assets/images/testimonial/HDFC.png";
import Federal from "assets/images/testimonial/Federal.png";
import RoundTick from "assets/images/common/roundtick.png";
import MainImage from "assets/images/common/Rectangle_48.png";
import LeftTopImage from "assets/images/common/Group111.png";
import LeftBottomImage from "assets/images/common/Group_114.png";
import RightImage from "assets/images/common/Group_112.png";
import LeftCenterImage from "assets/images/common/Group_113.png";
import { Box } from "@mui/material";

// Presentation page components
// import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
// import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  // const renderData = data.map(({ image, name, route }) => (
  //   <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
  //     <Link to={route}>
  //       <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
  //     </Link>
  //   </Grid>
  // ));

  return (
    <MKBox component="section">
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", mx: "auto", px: 0.75 }}
      >
        <MKTypography>
          <span id="trust_section" style={{ fontWeight: "600", fontSize: "42px" }}>
            Trusted by Financial Pioneers Across{" "}
            <span style={{ color: "#134FEF" }}>Industries</span>
          </span>
        </MKTypography>
      </Grid>
      <MKBox sx={{ overflow: "hidden", whiteSpace: "nowrap", position: "relative", width: "100%" }}>
        <Grid
          container
          spacing={3}
          my={7}
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            width: "calc(200% + 40px)", // Makes sure there's no blank space
            animation: "scrollLeftToRight 20s linear infinite",
          }}
        >
          {/* First Set of Images */}
          {[SBI, PNB, BankOfBaroda, Federal, ICICI, HDFC].map((src, index) => (
            <Grid item key={index} xs={6} md={4} lg={2} sx={{ marginRight: "20px" }}>
              <MKBox component="img" src={src} alt={`Bank-${index}`} />
            </Grid>
          ))}

          {/* Duplicate Images for Continuous Scroll Effect */}
          {[SBI, PNB, BankOfBaroda, Federal, ICICI, HDFC].map((src, index) => (
            <Grid item key={`dup-${index}`} xs={6} md={4} lg={2} sx={{ marginRight: "20px" }}>
              <MKBox component="img" src={src} alt={`Bank-Dup-${index}`} />
            </Grid>
          ))}
        </Grid>

        {/* CSS for Animation */}
        <style>
          {`
      @keyframes scrollLeftToRight {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0%);
        }
      }
    `}
        </style>
      </MKBox>

      <Grid sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" mb={1}>
                <span id="trust_section" style={{ fontSize: "50px", fontWeight: "600" }}>
                  Your Credit SCore & Report
                </span>
              </MKTypography>
              <MKTypography variant="body2" mb={1} pr={2}>
                <span style={{ fontWeight: "500", fontSize: "16px", color: "#83847E" }}>
                  Your credit score is more than just a number. It’s the key to unlocking the doors
                  to the{" "}
                  <span style={{ color: "#134FEF" }}>
                    best loans & credit card offers available.
                  </span>
                </span>
                <ul style={{ marginTop: "60px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <img
                      src={RoundTick}
                      alt="Tick Icon"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span style={{ color: "#191A15", fontWeight: "500" }}>
                      {" "}
                      Free detailed credit report
                    </span>
                  </li>
                  <li
                    style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "15px" }}
                  >
                    <img
                      src={RoundTick}
                      alt="Tick Icon"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span style={{ color: "#191A15", fontWeight: "500" }}>
                      {" "}
                      Insights to improve your score
                    </span>
                  </li>
                  <li
                    style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "15px" }}
                  >
                    <img
                      src={RoundTick}
                      alt="Tick Icon"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span style={{ color: "#191A15", fontWeight: "500" }}>
                      {" "}
                      Personalized loan & card recommendations
                    </span>
                  </li>
                  <li
                    style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "15px" }}
                  >
                    <img
                      src={RoundTick}
                      alt="Tick Icon"
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span style={{ color: "#191A15", fontWeight: "500" }}>
                      {" "}
                      Fast and secure access
                    </span>
                  </li>
                </ul>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#83847E",
                    marginTop: "18px",
                  }}
                >
                  Take charge of your financial health{" "}
                  <span style={{ color: "#134FEF" }}>today!</span>
                </p>
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid
            id="home-img-sec"
            item
            xs={12}
            lg={6}
            mb={10}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", lg: "row" }, // Stack images on mobile
              px: { xs: 2, lg: 8 }, // Padding adjustment for mobile
            }}
          >
            {/* Main Image */}
            <Box
              component="img"
              src={MainImage}
              alt="Main Image"
              sx={{
                maxWidth: { xs: "90%", sm: "80%", md: "450px" }, // Responsive width
                height: "auto",
                borderRadius: 2,
                position: "relative",
              }}
            />

            {/* Top Left Image */}
            <Box
              component="img"
              src={LeftTopImage}
              alt="Top Left"
              sx={{
                maxWidth: { xs: "50%", sm: "40%", md: "304px" }, // Adjust size for mobile
                height: "auto",
                position: "absolute",
                top: { xs: "10px", lg: "50px" }, // Adjust position for mobile
                left: { xs: "10px", lg: "-20px" },
                borderRadius: 1,
              }}
            />

            {/* Left Center Image */}
            <Box
              component="img"
              src={LeftCenterImage}
              alt="Left Center"
              sx={{
                maxWidth: { xs: "20px", sm: "30px", md: "40px" },
                height: "auto",
                position: "absolute",
                top: { xs: "40%", lg: "50%" },
                left: { xs: "5px", lg: "20px" },
                borderRadius: 1,
              }}
            />

            {/* Bottom Left Image */}
            <Box
              component="img"
              src={LeftBottomImage}
              alt="Bottom Left"
              sx={{
                maxWidth: { xs: "50%", sm: "45%", md: "302px" }, // Adjust size for mobile
                height: "auto",
                position: "absolute",
                bottom: { xs: "10px", lg: "-20px" },
                left: { xs: "10px", lg: "-20px" },
                borderRadius: 1,
              }}
            />

            {/* Right Middle Image */}
            <Box
              component="img"
              src={RightImage}
              alt="Right Middle"
              sx={{
                maxWidth: { xs: "15%", sm: "20%", md: "138px" },
                height: "auto",
                position: "absolute",
                right: { xs: "10px", lg: "0px" },
                top: { xs: "20%", lg: "35%" },
                transform: "translateY(-50%)",
                borderRadius: 1,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Pages;
