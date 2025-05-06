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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
//React React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
// import ExampleCard from "pages/Presentation/components/ExampleCard";
// import creditimage from "assets/images/products/creditproducts/image.png";
import googleRate from "assets/images/social-media/google_rate.png";
import googleCustomerRate from "assets/images/social-media/google_customer_review.png";
import personalised from "assets/images/common/personalised.png";
import smart from "assets/images/common/smart.png";
import clientCentered from "assets/images/common/client-centered.png";
import { Box } from "@mui/material";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// Data
// import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = (
    <Grid container spacing={3} sx={{ mb: 5 }}>
      <Grid item xs={12} lg={6}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography id="whyChoose" style={{ fontSize: "50px", fontWeight: "600" }} mb={1}>
            Why Choose Delta Chase?
          </MKTypography>
          <MKTypography mb={1} pr={2}>
            <span id="desc" style={{ fontWeight: "500", fontSize: "16px", color: "#83847E" }}>
              Our dedicated team at Delta Chase is committed to helping you make informed financial
              decisions. We know that not all banks or financial products are one-size-fits-all.
              Thats why we take your income into consideration when recommending the most
              appropriate banking and financial solutions tailored to your needs.
            </span>
          </MKTypography>
          <MKButton
            variant="outlined" // Ensures border styles are applied
            component={Link}
            to="/why-us"
            sx={{
              borderRadius: "50px", // Makes the button rounded
              padding: "10px 32px", // Ensures proper spacing for rounded buttons
              textTransform: "none", // Keeps the label text uncapitalized
              alignItems: "center",
              display: "inline-block",
              marginTop: "22px",
              borderColor: "#134FEF", // Sets the border color to blue
              color: "#134FEF", // Sets the text color to red
              backgroundColor: "transparent", // Makes the background transparent
              "&:hover": {
                backgroundColor: "transparent", // Optional hover effect for better UX
                borderColor: "#134FEF", // Sets the border color to blue
                color: "#134FEF",
              },
            }}
            href="javascript:void(0)"
          >
            Why US <span style={{ marginLeft: "8px", fontSize: "1rem" }}>→</span>
          </MKButton>
          <Box sx={{ width: "100%", mt: 4, mb: 1 }}>
            <img
              src={googleRate}
              alt="Google Rate"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <MKTypography>
              <span style={{ fontWeight: "700", fontSize: "18px", color: "#191A15" }}>
                4.9 / 5 rating
              </span>
            </MKTypography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between", // Aligns the text and image to opposite ends
                alignItems: "center", // Vertically centers the content
              }}
            >
              <span style={{ fontWeight: "700", fontSize: "18px", color: "#83847E" }}>
                Google Rating
              </span>
              <img
                src={googleCustomerRate}
                alt="Google Customer Rate"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  marginLeft: "10px", // Optional, adds a little space between the text and the image
                  width: "auto", // Ensures the image is resized proportionally
                }}
              />
            </Box>
          </Box>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={6} md={12}>
        <Grid container spacing={3} alignItems="center">
          {/* Icon on the left */}
          <Grid item xs={12} lg={2} md={2}>
            <Box display="flex">
              <MKBox
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center", // Centers image horizontally
                  alignItems: "center", // Centers image vertically
                }}
              >
                <MKBox
                  component="img"
                  style={{ width: "30px", height: "30px" }}
                  src={personalised}
                  id="personlaised_img"
                  width="80%"
                />
              </MKBox>
            </Box>
          </Grid>

          {/* Title and Description on the right */}
          <Grid item xs={12} lg={10}>
            <Box>
              <h4 style={{ fontWeight: "700", fontSize: "28px" }} id="personalised_heading">
                Personalized Guidance
              </h4>
              <p style={{ fontWeight: "500", fontSize: "17px", color: "#83847E" }}>
                Get tailored financial advice that fits your goals. At Delta Chase, we consider your
                income, spending habits, and long-term vision to offer solutions that work for you.
              </p>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          {/* Icon on the left */}
          <Grid item xs={12} lg={2}>
            <Box display="flex">
              <MKBox
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center", // Centers image horizontally
                  alignItems: "center", // Centers image vertically
                }}
              >
                <MKBox
                  component="img"
                  style={{ width: "30px", height: "30px" }}
                  src={smart}
                  width="80%"
                />
              </MKBox>
            </Box>
          </Grid>

          {/* Title and Description on the right */}
          <Grid item xs={12} lg={10}>
            <Box>
              <h4 style={{ fontWeight: "700", fontSize: "28px" }} id="personalised_heading">
                Smart Solutions
              </h4>
              <p style={{ fontWeight: "500", fontSize: "18px", color: "#83847E" }}>
                Leverage cutting-edge financial tools and technology designed to help you make
                informed decisions and achieve financial success faster.
              </p>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          {/* Icon on the left */}
          <Grid item xs={12} lg={2}>
            <Box display="flex">
              <MKBox
                style={{
                  backgroundColor: "#fff",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center", // Centers image horizontally
                  alignItems: "center", // Centers image vertically
                }}
              >
                <MKBox
                  component="img"
                  style={{ width: "30px", height: "30px" }}
                  src={clientCentered}
                  width="80%"
                />
              </MKBox>
            </Box>
          </Grid>

          {/* Title and Description on the right */}
          <Grid item xs={12} lg={10}>
            <Box>
              <h4 style={{ fontWeight: "700", fontSize: "28px" }} id="personalised_heading">
                Client-Centered Approach
              </h4>
              <p style={{ fontWeight: "500", fontSize: "18px", color: "#83847E" }}>
                We prioritize your needs. Our team ensures seamless support and collaboration every
                step of the way, so you feel confident about your financial journey.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <MKBox component="section" my={6}>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
