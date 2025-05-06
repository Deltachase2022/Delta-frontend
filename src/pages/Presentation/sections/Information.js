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
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import dclogo from "assets/images/logos/gray-logos/dclogo.svg";
//React React components
import MKBox from "components/MKBox";
import React, { useState, useEffect } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import axios from "axios";
import swal from "sweetalert";
//React React examples
// import RotatingCard from "examples/Cards/RotatingCard";
// import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import creditimage from "assets/images/products/creditproducts/image.png";
// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import MKButton from "components/MKButton";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  TextField,
  DialogTitle,
  IconButton,
  ListItem,
} from "@mui/material";
import creditProducts from "./data/creditProducts";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";
// import Button from "assets/theme/components/button";

function Information() {
  const [showAll, setShowAll] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Open Modal
  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  // Close Modal
  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const [formData, setFormData] = useState({
    title: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    location: "",
    zip: "",
  });

  const [errorMessage, setErrorMessage] = useState({});
  // console.log(errorMessage.email);
  useEffect(() => {
    document.body.classList.add("index");
    return () => {
      document.body.classList.remove("index");
    };
  }, []);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = {};
    if (!formData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errors.email = "Invalid email format";
    }
    // Phone number validation (Assuming it should be numeric and at least 10 digits)
    if (!formData.mobile || !/^\d{10,10}$/.test(formData.mobile)) {
      errors.mobile = "Phone number must be between 1 to 10 digits";
    }

    // ZIP code validation (min 6, max 6)
    if (!formData.zip || !/^\d{6}$/.test(formData.zip)) {
      errors.zip = "ZIP code must be exactly 6 digits";
    }

    // Required fields validation
    if (!formData.firstName || formData.firstName.trim() === "") {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName || formData.lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }
    if (!formData.location || formData.location.trim() === "") {
      errors.location = "Location is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    axios
      .post("https://admin.deltachase.in/public/api/save-data", formData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          swal("We will Contact You Soon!", "Your Data Saved Successfully!", "success").then(() => {
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
        swal("Error", "An error occurred while saving the data", "error");
      });
  }

  return (
    <>
      <MKBox component="section" py={3}>
        <MKButton
          variant="outlined" // Ensures border styles are applied
          sx={{
            borderRadius: "50px", // Makes the button rounded
            padding: "12px 35px", // Ensures proper spacing for rounded buttons
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
          CREDIT PRODUCTS
        </MKButton>

        <Grid
          container
          py={4}
          spacing={3}
          justifyContent="flex-start"
          alignItems="stretch" // Ensures all cards take equal height
        >
          {creditProducts.slice(0, 8).map((product) => (
            <Grid
              item
              xs={12}
              md={3}
              py={4}
              px={3}
              key={product.id}
              sx={{
                "@media (min-width: 769px) and (max-width: 992px)": {
                  flexBasis: "calc(100% / 3)", // Makes it 3 cards per row
                  maxWidth: "calc(100% / 3)", // Ensures they fit properly
                },
              }}
            >
              <Box
                onClick={() => handleOpen(product)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)", transition: "0.3s ease" },
                }}
              >
                <DefaultInfoCard
                  title={product.header}
                  description={
                    <Box
                      sx={{
                        color: "#6F6C6C",
                        minHeight: "80px", // Ensures uniform height
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4, // Truncate text after 4 lines
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {product.describe}
                    </Box>
                  }
                  icon={
                    <Box
                      sx={{
                        height: "162px",
                        border: "1px",
                        background: "linear-gradient(90deg, #134FEF2E, #5E8AFE12)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        margin: "0 auto", // Center the image horizontally
                      }}
                    >
                      <img
                        src={product.imgd}
                        alt={product.header}
                        style={{ maxWidth: "60%", maxHeight: "60%" }}
                      />
                    </Box>
                  }
                />
              </Box>
            </Grid>
          ))}
          {!showAll && creditProducts.length > 8 && (
            <Grid
              container
              spacing={2}
              mx={1}
              sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "8px" }}
            >
              {creditProducts.slice(8, 17).map((product) => (
                <Grid item id="credit-btn" key={product.id}>
                  <MKButton
                    variant="outlined"
                    sx={{
                      borderRadius: "50px",
                      padding: "10px 33px",
                      textTransform: "none",
                      display: "flex", // Ensures proper alignment
                      alignItems: "center",
                      borderColor: "#134FEF",
                      color: "#134FEF",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                        borderColor: "#134FEF",
                        color: "#134FEF",
                      },
                    }}
                    onClick={() => handleOpen(product)}
                  >
                    {product.header}
                  </MKButton>
                </Grid>
              ))}

              <Grid item xs={12}>
                <a
                  style={{
                    textTransform: "none",
                    color: "#134FEF",
                    fontSize: "16px",
                    fontWeight: "500",
                    display: "block",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowAll(true)}
                >
                  View All Services
                </a>
              </Grid>
            </Grid>
          )}

          {showAll &&
            creditProducts.length > 8 &&
            creditProducts.slice(8, 17).map((product) => (
              <Grid
                item
                xs={12}
                md={3}
                py={4}
                px={3}
                key={product.id}
                sx={{
                  "@media (min-width: 769px) and (max-width: 992px)": {
                    flexBasis: "calc(100% / 3)", // Makes it 3 cards per row
                    maxWidth: "calc(100% / 3)", // Ensures they fit properly
                  },
                }}
              >
                <Box
                  onClick={() => handleOpen(product)}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.05)", transition: "0.3s ease" },
                  }}
                >
                  <DefaultInfoCard
                    title={product.header}
                    description={<Box sx={{ color: "#6F6C6C" }}>{product.describe}</Box>}
                    icon={
                      <Box
                        sx={{
                          height: "162px",
                          border: "1px",
                          background: "linear-gradient(90deg, #134FEF2E, #5E8AFE12)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "8px",
                          margin: "0 auto", // Center the image horizontally
                        }}
                      >
                        <img
                          src={product.imgd}
                          alt={product.header}
                          style={{ maxWidth: "60%", maxHeight: "60%" }}
                        />
                      </Box>
                    }
                  />
                </Box>
              </Grid>
            ))}
          {showAll && creditProducts.length > 8 && (
            <Grid item xs={12}>
              <a
                style={{
                  textTransform: "none",
                  color: "#134FEF",
                  fontSize: "16px",
                  fontWeight: "500",
                  display: "block",
                  textAlign: "left",
                  cursor: "pointer",
                }}
                onClick={() => setShowAll(false)}
              >
                Close All Services
              </a>
            </Grid>
          )}

          <Box sx={{ width: "100%", mt: 1, mb: 1 }} id="insurance">
            <Divider sx={{ my: 2 }} />
          </Box>
        </Grid>

        <MKButton
          variant="outlined" // Ensures border styles are applied
          sx={{
            borderRadius: "50px", // Makes the button rounded
            padding: "12px 35px", // Ensures proper spacing for rounded buttons
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
          INSURANCE & INVESTMENT
        </MKButton>
        <Grid container py={2} spacing={3} justifyContent="flex-start" alignItems="stretch">
          {creditProducts.slice(17).map((product) => (
            <Grid
              item
              xs={12}
              md={3}
              sm={12}
              py={4}
              px={3}
              key={product.id}
              sx={{
                "@media (min-width: 769px) and (max-width: 992px)": {
                  flexBasis: "calc(100% / 3)", // Makes it 3 cards per row
                  maxWidth: "calc(100% / 3)", // Ensures they fit properly
                },
                "@media (min-width: 481px) and (max-width: 768px) ": {
                  flexBasis: "calc(100% / 2) !important", // Makes it 3 cards per row
                  maxWidth: "calc(100% / 2) !important", // Ensures they fit properly
                },
              }}
            >
              <Box
                onClick={() => handleOpen(product)}
                sx={{
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)", transition: "0.3s ease" },
                }}
              >
                <DefaultInfoCard
                  title={product.header}
                  description={<Box sx={{ color: "#6F6C6C" }}>{product.describe}</Box>}
                  icon={
                    <Box
                      sx={{
                        height: "162px",
                        border: "1px",
                        background: "linear-gradient(90deg, #134FEF2E, #5E8AFE12)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        margin: "0 auto", // Center the image horizontally
                      }}
                    >
                      <img
                        src={product.imgd}
                        alt={product.header}
                        style={{ maxWidth: "60%", maxHeight: "60%" }}
                      />
                    </Box>
                  }
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </MKBox>
      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
        {/* Close Button */}
        <DialogTitle sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton
            onClick={handleClose}
            style={{ borderRadius: "20px", backgroundColor: "#8A8A8A" }}
          >
            <CloseIcon style={{ width: "12px", height: "12px" }} />
          </IconButton>
        </DialogTitle>

        {/* Scrolling Content */}
        <DialogContent sx={{ overflowY: "auto", maxHeight: "80vh", p: 3 }}>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <Grid container spacing={2}>
              {/* Left Side: Heading */}
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "25px", md: "35px" },
                    fontWeight: 600,
                    color: "#000",
                    lineHeight: { xs: "34px", sm: "40px", md: "67px" },
                  }}
                >
                  Unlock Best <span style={{ color: "#134FEF" }}>{selectedProduct?.header}</span>{" "}
                  Offers Suitable for Your Needs
                </Typography>
                <img
                  src="/static/media/vector_line.90aaecb8184d78c563eedb885288f805.svg"
                  width={330}
                  height={34}
                  style={{ marginTop: "10px", width: "100%", maxWidth: "330px" }}
                />
              </Grid>

              {/* Right Side: Form */}
              <Grid item xs={12} md={8}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    flexGrow: 1,
                    borderLeft: "2px solid #F4F4F4",
                    borderRadius: "10px",
                    padding: 3,
                  }}
                >
                  <Grid container spacing={2}>
                    {/* Form Fields */}
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 400, fontSize: "15px", mb: 1 }}>
                        First Name
                      </Typography>
                      <TextField
                        label=" Enter Your First Name"
                        error={!!errorMessage.firstName}
                        helperText={errorMessage.firstName}
                        onChange={handleInputChange}
                        fullWidth
                        name="firstName"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 400, fontSize: "15px", mb: 1 }}>
                        Last Name
                      </Typography>
                      <TextField
                        label=" Enter Your Last Name"
                        onChange={handleInputChange}
                        error={!!errorMessage.lastName}
                        helperText={errorMessage.lastName}
                        fullWidth
                        name="lastName"
                        margin="dense"
                      />
                    </Grid>

                    {/* Email & Mobile Number */}
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 400, fontSize: "15px", mb: 1 }}>
                        Email
                      </Typography>
                      <TextField
                        label=" Enter Your Email"
                        onChange={handleInputChange}
                        fullWidth
                        name="email"
                        error={!!errorMessage.email}
                        helperText={errorMessage.email}
                        margin="dense"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 400, fontSize: "15px", mb: 1 }}>
                        Mobile Number
                      </Typography>
                      <TextField
                        label=" Enter Your Mobile Number"
                        fullWidth
                        margin="dense"
                        name="mobile"
                        error={!!errorMessage.mobile}
                        helperText={errorMessage.mobile}
                        onChange={handleInputChange}
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 400, fontSize: "15px", mb: 1 }}>
                        Location
                      </Typography>
                      <TextField
                        label=" Enter Your Location"
                        fullWidth
                        margin="dense"
                        name="location"
                        error={!!errorMessage.location}
                        helperText={errorMessage.location}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography sx={{ fontWeight: 400, fontSize: "15px", mb: 1 }}>
                        Zip Code
                      </Typography>
                      <TextField
                        label=" Enter Your zip code"
                        fullWidth
                        margin="dense"
                        name="zip"
                        error={!!errorMessage.zip}
                        helperText={errorMessage.zip}
                        onChange={handleInputChange}
                      />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <MKButton type="submit" color="info" variant="contained">
                        Submit
                      </MKButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on larger screens
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-between" }, // Center on mobile, space-between on desktop
              width: "100%",
              paddingLeft: { md: "14px" },
              position: { xs: "relative", md: "absolute" }, // Keep it normal in mobile, absolute in desktop
              bottom: { md: 0 },
              left: 0,
            }}
          >
            <img
              src={dclogo}
              alt="Logo"
              style={{
                height: "auto",
                width: "158px",
                marginBottom: { xs: "10px", md: "0px" }, // Add spacing in mobile view
              }}
            />
            <ListItem
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack in mobile, row in desktop
                alignItems: "center",
                gap: "4px",
                p: 0,
                marginLeft: { md: "44px" },
              }}
            >
              <EmailOutlinedIcon sx={{ color: "#BABABA", fontSize: "20px" }} />
              <Typography
                sx={{ color: "#83847E", fontSize: "17px", fontWeight: "400", textAlign: "center" }}
              >
                info@deltachase.in
              </Typography>
            </ListItem>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Information;
