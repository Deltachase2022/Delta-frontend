import React from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import about from "assets/images/common/about.png";
import dclogo from "assets/images/logos/gray-logos/black-logo.png";

import MKButton from "components/MKButton";
import Footer from "pages/Presentation/sections/Footer";
const About = () => {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.deltachase.in/product/react",
        //   label: "free download",
        //   color: "info",
        // }}
        sticky
      />
      <MKBox
        minHeight="20vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${bgImage})`,
          // backgroundSize: "cover",

          display: "grid",
          placeItems: "center",
          // backgroundColor: "white",
        }}
      />
      <Container id="whyus-main">
        <Grid item xs={12} lg={6}>
          <MKTypography id="why-us" style={{ fontSize: "50px", fontWeight: "600", color: "#000" }}>
            Our <span style={{ color: "#114CF2" }}>Story</span>
          </MKTypography>
          <img
            src="/static/media/vector_line.90aaecb8184d78c563eedb885288f805.svg"
            width={330}
            height={34}
            style={{ marginTop: "10px" }}
          />
          <MKTypography
            id="about-desc"
            style={{ fontWeight: "500", fontSize: "16px", color: "#83847E" }}
          >
            <span style={{ color: "#114CF2" }}>DeltaChase</span> is a leading provider of loan and
            credit card services, dedicated to empowering individuals and businesses with sound
            financial solutions. With a strong commitment to customer satisfaction and financial
            well-being, Delta Chase offers a comprehensive range of services designed to meet the
            diverse needs of its clients.
          </MKTypography>
          <MKTypography
            id="about-desc"
            style={{ fontWeight: "500", fontSize: "16px", color: "#83847E", marginTop: "10px" }}
          >
            Whether you re in need of a mortgage, personal loan, business financing, or the perfect
            credit card to match your lifestyle, Delta Chase is your trusted partner for achieving
            your financial aspirations. With a commitment to excellence and a passion for financial
            empowerment, Delta Chase is at the forefront of the industry, helping clients secure
            their financial future.
          </MKTypography>
        </Grid>
        <MKButton
          variant="outlined" // Ensures border styles are applied
          sx={{
            borderRadius: "50px", // Makes the button rounded
            padding: "8px 36px", // Ensures proper spacing for rounded buttons
            textTransform: "none", // Keeps the label text uncapitalized
            alignItems: "center",
            display: "inline-block",
            marginTop: "40px",
            borderColor: "#134FEF", // Sets the border color to blue
            color: "#134FEF", // Sets the text color to red
            backgroundColor: "transparent", // Makes the background transparent
            "&:hover": {
              backgroundColor: "transparent", // Optional hover effect for better UX
              borderColor: "#134FEF", // Sets the border color to blue
              color: "#134FEF",
            },
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          <span style={{ color: "#000" }}>Our</span> Mission
        </MKButton>
        <MKTypography
          id="about-desc"
          style={{ fontWeight: "500", fontSize: "16px", color: "#83847E", marginTop: "30px" }}
        >
          At DeltaChase, we believe that financial empowerment is the cornerstone of achieving
          personal and professional success. As a leading provider of loan and credit card services,
          we are committed to helping individuals, families, and businesses navigate the
          complexities of modern finance with confidence and ease.
        </MKTypography>

        <MKButton
          variant="outlined" // Ensures border styles are applied
          sx={{
            borderRadius: "50px", // Makes the button rounded
            padding: "8px 36px", // Ensures proper spacing for rounded buttons
            textTransform: "none", // Keeps the label text uncapitalized
            alignItems: "center",
            display: "inline-block",
            marginTop: "40px",
            borderColor: "#134FEF", // Sets the border color to blue
            color: "#134FEF", // Sets the text color to red
            backgroundColor: "transparent", // Makes the background transparent
            "&:hover": {
              backgroundColor: "transparent", // Optional hover effect for better UX
              borderColor: "#134FEF", // Sets the border color to blue
              color: "#134FEF",
            },
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          <span style={{ color: "#000" }}>Who</span> We Are
        </MKButton>
        <MKTypography
          id="about-desc"
          style={{ fontWeight: "500", fontSize: "16px", color: "#83847E", marginTop: "30px" }}
        >
          Founded on the principles of trust, integrity, and innovation, DeltaChase has grown into a
          trusted partner for countless clients across the nation. We are more than just a financial
          services provider – we are a dedicated team of professionals passionate about creating
          solutions that truly make a difference in your life.
        </MKTypography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium+
            alignItems: "center",
            justifyContent: "center",
            marginTop: { xs: "80px", md: "150px" }, // Adjust margin for smaller screens
            gap: { xs: "30px", md: "0px" }, // Adds spacing in mobile view
            padding: { xs: "0 20px", md: "0" }, // Adds padding for small screens
          }}
        >
          {/* Left Side - Image */}
          <Box sx={{ flexShrink: 0, textAlign: "center" }}>
            <img
              src={about}
              alt="About"
              style={{
                width: "100%", // Responsive width
                maxWidth: "670px", // Prevents image from getting too large
                height: "auto", // Maintains aspect ratio
              }}
            />
          </Box>

          {/* Right Side - Content */}
          <Box
            sx={{
              flex: 1,
              marginLeft: { xs: "0", md: "80px" }, // Removes margin on small screens
              textAlign: { xs: "center", md: "left" }, // Center text on small screens
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              Meet Our Team
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#83847E",
                marginTop: "10px",
                fontWeight: "400",
              }}
            >
              Our talented and dedicated team works tirelessly <br />
              to bring your financial aspirations to life. <br />
              Together, we create innovative solutions to <br />
              empower our clients.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Stack buttons on small screens
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#134FEF",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  fontWeight: "300",
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                Contact Our Team
              </Button>

              <Link
                to="/why-us"
                style={{
                  display: "flex",
                  color: "#134FEF",
                  fontSize: "18px",
                  fontWeight: "400",
                  alignItems: "center",
                }}
              >
                Why Us <span style={{ marginLeft: "8px", fontSize: "1rem" }}>→</span>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px", // Adjust width as needed
            margin: "auto", // Centers the card horizontally
            paddingBottom: "0px",
            paddingTop: "20px",
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
            textAlign: "center", // Centers text inside the box
            marginTop: "110px",
            marginBottom: "120px ",
          }}
        >
          <Typography
            id="why-difference"
            style={{ fontSize: "30px", fontWeight: "600", color: "#000" }}
          >
            Discover the <span style={{ color: "#134FEF" }}>Delta Chase</span>
            <br /> Difference Today
          </Typography>
          <Typography
            id="why-difference-desc"
            sx={{ marginTop: "10px", color: "#A5A5A5", fontSize: "17px", fontWeight: "500" }}
          >
            Join us and experience the personalized, expert guidance that sets Delta Chase
            <br /> apart. Your financial well-being is our top priority, and we re here to help you
            <br /> every step of the way.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: "25px" }}>
            <img
              src={dclogo}
              alt="Logo"
              style={{
                height: "auto",
                width: "133px",
              }}
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default About;
