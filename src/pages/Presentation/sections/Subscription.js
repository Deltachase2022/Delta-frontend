import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Box, Grid, TextField, InputAdornment, Button } from "@mui/material";
import MKTypography from "@mui/material/Typography";

const Subscription = () => {
  const [forEmailData, setFormEmailData] = useState({
    email: "",
  });
  const [errorEmailMessage, setErrorEmailMessage] = useState({});
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
      .post("https://admin.deltachase.in/public/api/contact-us", forEmailData, {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stacks on mobile, side-by-side on desktop
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: { xs: "40px", md: "120px" }, // Smaller padding for mobile
        backgroundColor: "#134FEF",
        textAlign: { xs: "center", md: "left" }, // Centers text on mobile
      }}
    >
      {/* Left Side - Heading */}
      <Grid item xs={12} md={6}>
        <Box>
          <MKTypography
            sx={{
              fontSize: { xs: "30px", md: "40px" }, // Smaller font size on mobile
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Subscribe to our Newsletter
          </MKTypography>
          <MKTypography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              color: "#ECECEC",
              marginTop: "10px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Subscribe for Updates: Stay informed about the latest investor updates, financial
            results, and announcements by subscribing to our newsletter.
          </MKTypography>
        </Box>
      </Grid>

      {/* Right Side - Subscription Form */}
      <Box
        component="form"
        onSubmit={handleEmailSubmit}
        sx={{
          width: { xs: "100%", md: "50%" }, // Full width on mobile
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" }, // Centers input on mobile
          marginTop: { xs: 4, md: 0 },
          paddingX: { xs: 2, md: 0 }, // Padding for small screens
        }}
      >
        <TextField
          fullWidth
          label="Enter your email here"
          variant="outlined"
          name="email"
          onChange={handleEmailChange}
          error={!!errorEmailMessage.email}
          margin="normal"
          sx={{
            "& .MuiInputLabel-root": {
              textAlign: "center",
              color: "#FFFFFF",
              fontWeight: "300",
              top: "2px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "#FFFFFF1A",
              color: "#FFFFFF",
              height: "54px",
              paddingRight: "0px",
            },
            width: { xs: "100%", sm: "400px", md: "500px" }, // Full width on small screens
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#fff",
                    color: "#4A3AFF",
                    fontSize: "16px",
                    fontWeight: "700",
                    borderRadius: "0px 12px 12px 0px",
                    padding: { xs: "14px 16px", md: "26px 20px" }, // Adjusts padding for button
                    minWidth: "100px",
                    height: "100%",
                    "&:hover": {
                      backgroundColor: "#fffc",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Subscription;
