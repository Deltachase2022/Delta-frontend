import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import googleRate from "assets/images/social-media/google_rate.png";
import googleCustomerRate from "assets/images/social-media/google_customer_review.png";
import dclogo from "assets/images/logos/gray-logos/black-logo.png";
import personalised from "assets/images/common/personalised.png";
import smart from "assets/images/common/smart.png";
import clientCentered from "assets/images/common/client-centered.png";
import MKButton from "components/MKButton";
import Footer from "pages/Presentation/sections/Footer";
const features = [
  {
    icon: personalised,
    title: "Personalized Guidance",
    description:
      "Get tailored financial advice that fits your goals. At Delta Chase, we consider your income, spending habits, and long-term vision to offer solutions that work for you.",
  },
  {
    icon: smart,
    title: "Smart Solutions",
    description:
      "We prioritize your needs. Our team ensures seamless support and collaboration every step of the way, so you feel confident about your financial journey.",
  },
  {
    icon: clientCentered,
    title: "Client-Centered Approach",
    description:
      "Leverage cutting-edge financial tools and technology designed to help you make informed decisions and achieve financial success faster.",
  },
];
const WhyUs = () => {
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
          <MKTypography
            id="why-us"
            style={{ fontSize: "50px", fontWeight: "600", color: "#000", lineHeight: "1.1" }}
          >
            Why Choose{" "}
            <span style={{ color: "#114CF2" }}>
              Delta <br />
              Chase{" "}
            </span>
            <span style={{ color: "#000" }}>?</span>
          </MKTypography>
          <img
            src="/static/media/vector_line.90aaecb8184d78c563eedb885288f805.svg"
            width={330}
            height={34}
            style={{ marginTop: "10px" }}
          />
          <MKTypography mb={1} pr={2}>
            <span id="whyus-desc" style={{ fontWeight: "500", fontSize: "16px", color: "#83847E" }}>
              Our dedicated team at Delta Chase is committed to helping you make informed financial
              decisions. We know that not all banks or financial products are one-size-fits-all.
              Thats why we take your income into consideration when recommending the most
              appropriate banking and financial solutions tailored to your needs Whether you re
              looking for a savings account, a mortgage, a personal loan, or credit card options, we
              ve got you covered. We analyze your income, financial goals, and preferences to guide
              you toward the options that will best serve you. Our goal is to empower you to secure
              a brighter financial future Trust Delta Chase to be your partner in making financial
              choices that align with your income and aspirations Together, we ll find the financial
              solutions that fit you like a glove.Discover the Delta Chase difference today, where
              your financial well-being is our priority.
            </span>
          </MKTypography>
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
                // Aligns the text and image to opposite ends
                alignItems: "center", // Vertically centers the content
              }}
            >
              <span style={{ fontWeight: "600", fontSize: "18px", color: "#83847E" }}>
                Google Rating
              </span>
              <img
                src={googleCustomerRate}
                alt="Google Customer Rate"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  marginLeft: "42px", // Optional, adds a little space between the text and the image
                  width: "96px", // Ensures the image is resized proportionally
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid container spacing={4} mt={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid
              item
              xs={12} // Full width on mobile
              sm={6} // Two items per row on tablets
              md={4} // Three items per row on desktops
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Grid container spacing={2} alignItems="center">
                {/* Icon on the left */}
                <Grid item xs={3} sm={2}>
                  <MKBox
                    sx={{
                      backgroundColor: "#fff",
                      width: "60px",
                      height: "55px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: 1,
                      borderRadius: 1,
                    }}
                  >
                    <MKBox
                      component="img"
                      src={feature.icon}
                      sx={{ width: "30px", height: "30px" }}
                    />
                  </MKBox>
                </Grid>

                {/* Title and Description */}
                <Grid item xs={9} sm={10}>
                  <Box>
                    <h4 style={{ fontWeight: 700, fontSize: "18px", margin: 0 }}>
                      {feature.title}
                    </h4>
                    <p
                      style={{ fontWeight: 500, fontSize: "14px", color: "#83847E", marginTop: 5 }}
                    >
                      {feature.description}
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <MKButton
          variant="outlined" // Ensures border styles are applied
          sx={{
            borderRadius: "50px", // Makes the button rounded
            padding: "8px 36px", // Ensures proper spacing for rounded buttons
            textTransform: "none", // Keeps the label text uncapitalized
            alignItems: "center",
            display: "inline-block",
            marginTop: "50px",
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
          <span style={{ color: "#000" }}>Our</span> Benefits
        </MKButton>

        {/* Bullet Points Section */}
        <Box
          component="ul"
          sx={{
            mt: { xs: "15px", md: "25px" }, // Adjusts margin for mobile & desktop
            pl: { xs: "15px", md: "20px" }, // Adjusts padding for smaller screens
            fontSize: { xs: "14px", md: "16px" }, // Adjusts font size dynamically
            color: "#83847E",
            listStyleType: "disc",
          }}
        >
          {[
            "Personalized Financial Solutions: We tailor our recommendations based on your unique income and financial goals.",
            "Wide Range of Services: From savings accounts to mortgages, personal loans, and credit cards, we offer comprehensive financial products.",
            "Expert Guidance: Our team of financial experts is dedicated to providing you with informed advice and support.",
            "Income-Based Analysis: We consider your income to ensure the financial solutions we suggest are the best fit for you.",
            "Commitment to Your Success: Our priority is your financial well-being and helping you achieve a brighter financial future.",
          ].map((item, index) => (
            <Box key={index} component="li" sx={{ mb: "8px", fontWeight: 500 }}>
              <Typography variant="body1" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
        <MKButton
          variant="outlined" // Ensures border styles are applied
          sx={{
            borderRadius: "50px", // Makes the button rounded
            padding: "8px 36px", // Ensures proper spacing for rounded buttons
            textTransform: "none", // Keeps the label text uncapitalized
            alignItems: "center",
            display: "inline-block",
            marginTop: "50px",
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
          <span style={{ color: "#000" }}>Our</span> Services
        </MKButton>

        {/* Bullet Points Section */}
        <Box
          component="ul"
          sx={{
            mt: { xs: "15px", md: "25px" }, // Adjusts margin for mobile & desktop
            pl: { xs: "15px", md: "20px" }, // Adjusts padding
            fontSize: { xs: "14px", md: "16px" }, // Responsive font size
            color: "#83847E",
            listStyleType: "disc",
          }}
        >
          {[
            "Savings Accounts: Secure and grow your money with our competitive savings accounts.",
            "Mortgages: Find the perfect mortgage plan tailored to your needs and financial situation.",
            "Personal Loans: Get access to funds quickly with our flexible personal loan options.",
            "Credit Cards: Choose from a variety of credit card options that offer rewards and benefits.",
            "Financial Planning: Receive expert advice on managing your finances and planning for the future.",
          ].map((item, index) => (
            <Box key={index} component="li" sx={{ mb: "8px", fontWeight: 500 }}>
              <Typography variant="body1" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                {item}
              </Typography>
            </Box>
          ))}
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

export default WhyUs;
