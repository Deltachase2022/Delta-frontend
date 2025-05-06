import React, { useState } from "react";
import { Container, Box, Grid, Typography, TextField, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import axios from "axios";
import swal from "sweetalert";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Subscription from "pages/Presentation/sections/Subscription";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Footer from "pages/Presentation/sections/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = {};
    if (!formData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errors.email = "Invalid email format";
    }
    if (!formData.name || formData.name.trim() === "") {
      errors.name = " Name is required";
    }
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Phone number must be between 10 to 15 digits";
    }
    if (!formData.message || formData.message.trim() === "") {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    axios
      .post("https://admin.deltachase.in/public/api/user-enquiry", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          swal("Thanks For Your Time! ", "We will Contact You Soon!", "success").then(() => {
            window.location = "/";
          });
        } else if (response.status === 409) {
          swal("Thanks For Your Time!", response.data.message, "success").then(() => {
            window.location = "/";
          });
        }
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        swal("Error", "An error occurred while processing the data", "error");
      });
  }
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
      <Container>
        <Grid item xs={12} lg={6}>
          <span
            id="contact-get-start"
            style={{ fontSize: "24px", fontWeight: "400", color: "#000" }}
          >
            Get Started
          </span>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <MKTypography
              style={{
                fontSize: "80px",
                fontWeight: "700",
                color: "#114CF2",
                lineHeight: "1.1", // Adjust to reduce gap
              }}
              id="contact-title"
            >
              Get in touch{" "}
              <span style={{ color: "#000" }}>
                with us. <br style={{ lineHeight: "0.8" }} /> We’re here to assist you.
              </span>
            </MKTypography>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="flex-end"
              marginRight={3}
            >
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=100094324309071",
                  icon: <FacebookIcon style={{ width: "15px", height: "auto" }} />,
                },
                {
                  href: "https://www.instagram.com/deltachase.in/",
                  icon: <InstagramIcon style={{ width: "15px", height: "auto" }} />,
                },
                {
                  href: "https://www.linkedin.com/company/delta-chase.in",
                  icon: <LinkedInIcon style={{ width: "15px", height: "auto" }} />,
                },
              ].map((item, index) => (
                <MKBox
                  key={index}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: "31px",
                    height: "31px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "1px solid #B7B7B7",
                    textDecoration: "none",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.3)",
                    },
                  }}
                >
                  {item.icon}
                </MKBox>
              ))}
            </Box>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "100%",
              maxWidth: "880px",
              marginTop: "50px",
            }}
          >
            {/* First Row: Name, Email, Phone Number */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <TextField
                variant="standard"
                label="Name"
                fullWidth
                name="name"
                onChange={handleInputChange}
                error={!!errorMessage.name}
                helperText={errorMessage.name}
                sx={{
                  "& .MuiInputLabel-root": { color: "#000" }, // Default label color
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000" }, // Focused label color
                }}
                InputProps={{ disableUnderline: false }}
              />

              <TextField
                variant="standard"
                label="Email"
                type="email"
                name="email"
                onChange={handleInputChange}
                error={!!errorMessage.email}
                helperText={errorMessage.email}
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#000" }, // Default label color
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000" }, // Focused label color
                }}
                InputProps={{ disableUnderline: false }}
              />

              <TextField
                variant="standard"
                label="Phone Number"
                type="tel"
                name="phone"
                onChange={handleInputChange}
                error={!!errorMessage.phone}
                helperText={errorMessage.phone}
                fullWidth
                sx={{
                  "& .MuiInputLabel-root": { color: "#000" }, // Default label color
                  "& .MuiInputLabel-root.Mui-focused": { color: "#000" }, // Focused label color
                }}
                InputProps={{ disableUnderline: false }}
              />
            </Box>

            {/* Second Row: Message Field */}
            <TextField
              variant="standard"
              label="Message"
              multiline
              name="message"
              onChange={handleInputChange}
              error={!!errorMessage.message}
              helperText={errorMessage.message}
              rows={4}
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#000" }, // Default label color
                "& .MuiInputLabel-root.Mui-focused": { color: "#000" }, // Focused label color
              }}
              InputProps={{ disableUnderline: false }}
            />

            {/* Third Row: Submit Button with Right Arrow */}
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#114CF2",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "300",
                  padding: "18px 26px",
                  borderRadius: "30px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#0D3BCF",
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Leave us a Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stacks on small screens, side-by-side on larger screens
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: { xs: "40px", md: "120px" }, // Adjusted padding for mobile
          backgroundColor: "#fff",
        }}
        mt={12}
      >
        {/* Left Side - Heading */}
        <Grid item xs={12} md={6}>
          <span
            id="contact-get-start"
            style={{ fontSize: "20px", fontWeight: "400", color: "#000" }}
          >
            Contact Info
          </span>
          <Box>
            <MKTypography
              id="contact-happy"
              sx={{
                fontSize: { xs: "40px", md: "55px" }, // Smaller font size for mobile
                fontWeight: "700",
                color: "#000",
                marginTop: "12px",
                lineHeight: "1.1",
                textAlign: { xs: "center", md: "left" }, // Center text on mobile
              }}
            >
              We are always <br style={{ lineHeight: "0.8" }} /> happy to assist you
            </MKTypography>
          </Box>
        </Grid>

        {/* Right Side - Two Columns */}
        <Grid
          container
          spacing={4}
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 4, md: 8 }, // Adjusted spacing
            marginTop: { xs: 4, md: 0 },
          }}
        >
          {/* First Column - Email */}
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "600",
                color: "#000",
                textAlign: { xs: "center", sm: "left" },
              }}
              id="contact-subtitle"
            >
              Email Address
            </Typography>
            <Box
              sx={{
                width: "30px",
                borderBottom: "2px solid #000",
                mb: 1,
                mx: { xs: "auto", sm: "0" },
              }}
            />{" "}
            {/* Underline */}
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "#000",
                mt: 1,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <u id="contact-subtitle">info@deltachase.in</u>
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#000",
                mt: 2,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Civil Lines Rd, above NSS <br /> Karayogam Building, West
              <br /> Fort Thrissur, Kerala 680004
            </Typography>
          </Grid>

          {/* Second Column - Phone */}
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: "600",
                color: "#000",
                textAlign: { xs: "center", sm: "left" },
              }}
              id="contact-subtitle"
            >
              Number
            </Typography>
            <Box
              sx={{
                width: "30px",
                borderBottom: "2px solid #000",
                mb: 1,
                mx: { xs: "auto", sm: "0" },
              }}
            />{" "}
            {/* Underline */}
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "600",
                color: "#000",
                mt: 1,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              +91 97454 02954
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#000",
                mt: 2,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Assistance hours:
              <br /> Monday - Friday 6 am to
              <br /> 8 pm EST
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Subscription />
      <Footer />
    </>
  );
};

export default Contact;
