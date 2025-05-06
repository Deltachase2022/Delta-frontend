import {
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import footerFormIcon from "assets/images/common/Group.png";
import GroupIcon from "assets/images/common/Group214.png";
import dclogo from "assets/images/logos/gray-logos/dclogo.svg";
import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
// import MKTypography from "components/MKTypography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Footer() {
  // const isMobile = useMediaQuery("(max-width:600px)");
  const menuItems = [
    { label: "About", path: "/About" },
    { label: "Why Us", path: "/why-us" },
    { label: "Contact", path: "/Contact-us" },
    { label: "Resources", path: "#" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [forEmailData, setFormEmailData] = useState({
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState({});
  const [errorEmailMessage, setErrorEmailMessage] = useState({});
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleEmailChange = (event) => {
    setFormEmailData({ ...forEmailData, email: event.target.value });
  };
  function handleEmailSubmit(e) {
    e.preventDefault();
    const errors = {};
    if (!forEmailData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errors.email = "Invalid email format";
    }
    if (Object.keys(errors).length > 0) {
      setErrorEmailMessage(errors);
      return;
    }

    axios
      .post("https://admin.deltachase.in/public/api/user-email", forEmailData, {
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
  function handleSubmit(e) {
    e.preventDefault();

    const errors = {};
    if (!formData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errors.email = "Invalid email format";
    }
    if (!formData.name || formData.name.trim() === "") {
      errors.name = "Name is required";
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
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box sx={{ backgroundColor: "#161C28", padding: "50px 20px" }}>
      <Grid md={12} lg={12} xs={12} container spacing={4}>
        {/* Left Side */}
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ justifyContent: "center", alignItems: "center", color: "white", width: "417px" }}
        >
          <Box marginLeft={5}>
            <Typography
              gutterBottom
              sx={{
                fontSize: "36px",
                fontWeight: 600,
                whiteSpace: "pre-line",
                lineHeight: "1.2",
              }}
              id="footer-heading"
            >
              {`What People Are\nSaying About\nDeltaChase`}
            </Typography>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "500",
                color: "#83847E",
                whiteSpace: "pre-line",
              }}
              id="footer-desc"
            >
              {` Everything you need to simplify your loan, credit card,\n and insurance journey. Grow  your financial success with\n trusted solutions, anywhere you are.`}
            </p>
            <Box mt={4}>
              <img src={GroupIcon} alt="form" style={{ width: "45px", height: "38px" }} />
            </Box>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#83847E",
                whiteSpace: "pre-line",
                marginTop: "20px",
              }}
              id="footer-desc-two"
            >
              {`DeltaChase has been a game-changer for me. I got my\n personal loan approved quickly with a hassle-free\n process, and the team provided the best interest rates I\n could find! Truly helpful and professional service.\n-Ananthu s.`}
            </p>
            {/* Images Row */}
            <Box
              id="footer-img"
              md={12}
              lg={12}
              xs={12}
              sx={{
                display: "flex",
                gap: 2,
                mt: 4,
                flexWrap: "wrap", // Allow wrapping on small screens
                justifyContent: { xs: "center", md: "flex-start" }, // Center for mobile, left for desktop
                maxWidth: { xs: "250px", sm: "100%" }, // Restrict width in mobile to keep 3 per row
              }}
            >
              {/* Team Images */}
              {[team1, team2, team3, team4].map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`image-${index}`}
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid white",
                  }}
                />
              ))}

              {/* Play Button */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid white",
                }}
              >
                <PlayCircleIcon sx={{ color: "white", fontSize: 30 }} />
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          justifyContent="center"
        >
          <Card
            id="footer-form"
            sx={{
              borderRadius: 2,
              maxWidth: { xs: "100%", sm: "500px", md: "560px" },
              height: "auto",
              p: 3,
            }}
            style={{ backgroundColor: "#222938" }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" mt={3}>
                <img src={footerFormIcon} alt="form" style={{ width: "72px", height: "79px" }} />
              </Box>
              <Typography
                textAlign="center"
                color="white"
                fontSize={{ xs: "18px", sm: "20px" }}
                fontWeight="bold"
                gutterBottom
                mt={1}
              >
                Get Started
              </Typography>

              <Box px={{ xs: 2, sm: 4 }}>
                <label style={{ color: "white", fontSize: "15px" }}>Name</label>
                <TextField
                  fullWidth
                  label="Enter your name"
                  error={!!errorMessage.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  name="name"
                  margin="dense"
                  style={{ backgroundColor: "white", borderRadius: "8px" }}
                />
                <label style={{ color: "white", fontSize: "15px" }}>Email</label>
                <TextField
                  fullWidth
                  label="Enter your email"
                  variant="outlined"
                  error={!!errorMessage.email}
                  onChange={handleInputChange}
                  name="email"
                  margin="dense"
                  style={{ backgroundColor: "white", borderRadius: "8px" }}
                />
                <label style={{ color: "white", fontSize: "15px" }}>Message</label>
                <TextField
                  fullWidth
                  label="What are you say ?"
                  variant="outlined"
                  multiline
                  name="message"
                  error={!!errorMessage.message}
                  onChange={handleInputChange}
                  rows={4}
                  margin="dense"
                  style={{ backgroundColor: "white", borderRadius: "8px" }}
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#134FEF", color: "white" }}
                  fullWidth
                  sx={{ mt: 2 }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ flexWrap: "wrap", padding: 2 }}
        >
          {/* Left Section: Logo + Form */}
          <Grid
            item
            xs={12}
            md={5}
            display="flex"
            id="contect-footer"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Box ml={{ xs: 0, md: 5 }} textAlign={{ xs: "center", md: "left" }} width="100%">
              <Typography variant="button" fontWeight="bold">
                <img src={dclogo} alt="Logo" style={{ height: "auto", width: "160px" }} />
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: { xs: "16px", sm: "18px" }, mt: 1 }}
                gutterBottom
              >
                Get Started, try it.
              </Typography>
              <Box
                display="flex"
                id="footer-enq"
                component="form"
                onSubmit={handleEmailSubmit}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <TextField
                  label="Enter your email here"
                  variant="outlined"
                  name="email"
                  onChange={handleEmailChange}
                  error={!!errorEmailMessage.email}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: "50px", height: "54px" },
                    width: { xs: "100%", sm: "350px", md: "410px" },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="submit"
                          sx={{
                            backgroundColor: "#134FEF",
                            color: "#fff",
                            borderRadius: "50%",
                            width: "45px",
                            height: "45px",
                            "&:hover": { backgroundColor: "#0d3ab3" },
                          }}
                        >
                          <ArrowForwardIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Section: Contact Info + Links */}
          <Grid item xs={12} md={7}>
            <Grid
              container
              spacing={3}
              id="info-footer"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              {/* Contact Info */}
              <Grid item xs={12} sm={6} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon sx={{ color: "#BABABA" }} />
                    </ListItemIcon>
                    <ListItemText
                      id="footer-address"
                      sx={{ color: "#83847E", fontSize: "17px", fontWeight: "500" }}
                      primary={
                        <span id="footer-address">
                          Civil Lines Rd, above NSS Karayogam Building, West Fort Thrissur, Kerala
                          680004
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem style={{ marginTop: "8px" }}>
                    <ListItemIcon>
                      <PhoneIcon sx={{ color: "#BABABA" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#83847E", fontSize: "17px", fontWeight: "500" }}
                      primary={
                        <a
                          href="tel:+919745402954"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <span id="footer-phn">+91 9745402954</span>
                        </a>
                      }
                    />
                  </ListItem>

                  <ListItem style={{ marginTop: "8px" }}>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: "#BABABA" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#83847E", fontSize: "17px", fontWeight: "500" }}
                      primary={
                        <a
                          href="mailto:info@deltachase.in"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <span id="footer-email">info@deltachase.in</span>
                        </a>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>

              {/* Help and Solution Section */}
              <Grid item xs={6} sm={6} md={4}>
                <Typography
                  id="text-footer"
                  sx={{ color: "#fff", fontSize: "18px", fontWeight: "600" }}
                >
                  Help and Solution
                </Typography>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem key={index}>
                      <Link
                        to={item.path}
                        style={{
                          textDecoration: "none",
                          color: "#83847E",
                          fontSize: "17px",
                          fontWeight: "500",
                        }}
                      >
                        <ListItemText primary={<span id="footer-address">{item.label}</span>} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
                ;
              </Grid>

              {/* Services Section */}
              <Grid item xs={6} sm={6} md={4}>
                <Typography
                  id="text-footer"
                  sx={{ color: "#fff", fontSize: "18px", fontWeight: "600" }}
                >
                  Services
                </Typography>
                <List>
                  {["Credit Card", "Insurance", "Investments", "Car loans"].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        sx={{
                          color: "#83847E",
                          fontSize: "17px",
                          fontWeight: "500",
                          cursor: ["Credit Card", "Car loans", "Insurance", "Investments"].includes(
                            item
                          )
                            ? "pointer"
                            : "default",
                        }}
                        primary={
                          <span
                            id="footer-address"
                            onClick={() => {
                              if (item === "Credit Card") {
                                handleScrollToSection("services"); // Change this to the desired path
                              } else if (item === "Car loans") {
                                handleScrollToSection("services"); // Change this to the desired path
                              } else if (item === "Insurance") {
                                handleScrollToSection("insurance"); // Change this to the desired path
                              } else if (item === "Investments") {
                                handleScrollToSection("insurance"); // Change this to the desired path
                              }
                            }}
                            style={
                              ["Credit Card", "Car loans"].includes(item)
                                ? { cursor: "pointer" }
                                : {}
                            }
                          >
                            {item}
                          </span>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Stack in column for mobile, row for desktop
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "0 20px",
              textAlign: "center", // Center text on smaller screens
            }}
          >
            {/* Right Side (Shows first on mobile) */}
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 500,
                color: "#fff",
                order: { xs: 1, md: 2 }, // Appears first on mobile, second on desktop
                marginBottom: { xs: "10px", md: "0" }, // Adds spacing when stacked
              }}
              id="term-cond"
            >
              <a href="/terms-and-conditions" style={{ color: "#fff", textDecoration: "none" }}>
                Terms and Conditions
              </a>
              {" - "}
              <a href="/privacy-policy" style={{ color: "#fff", textDecoration: "none" }}>
                Privacy Policy
              </a>
            </Typography>

            {/* Left Side (Shows second on mobile) */}
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 500,
                color: "#fff",
                order: { xs: 2, md: 1 }, // Change order: appears second on mobile, first on desktop
              }}
              id="copyright"
            >
              © 2025 Delta Chase Copyright and rights reserved
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
