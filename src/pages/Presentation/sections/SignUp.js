import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import AuthContext from "context/AuthContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MKBox from "components/MKBox";
import IconButton from "@mui/material/IconButton";
import MKTypography from "components/MKTypography";
import useMediaQuery from "@mui/material/useMediaQuery";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import SimpleFooter from "examples/Footers/SimpleFooter";
import { Grid } from "@mui/material";
import axios from "axios";
// import swal from "sweetalert";
import dclogo from "assets/images/logos/gray-logos/dclogo.svg";
import { toast } from "react-toastify";
function SignUp() {
  // const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errors.email = "Invalid email format";
    }
    if (!formData.email || formData.email.trim() === "") {
      errors.email = " Email is required";
    }
    if (!formData.Phone || formData.Phone.trim() === "") {
      errors.Phone = " Phone is required";
    }
    if (!formData.name || formData.name.trim() === "") {
      errors.name = " Name is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long and include at least one number and one special character";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    axios
      .post("https://admin.deltachase.in/public/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);
          toast.success("Registration Successful!.", {
            position: "top-right", // Position the toast at the top-right corner
            autoClose: 5000, // Auto close after 5 seconds
            hideProgressBar: true, // Hide progress bar
            theme: "colored", // Use colored theme for the toast
            style: {
              backgroundColor: "#28a745",
              color: "#fff",
              fontWeight: "400",
              fontSize: "12px",
            }, // Green background
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 5000);
        } else if (response.status === 409) {
          toast.error("Oops! Something went wrong", {
            position: "top-right", // Position the toast at the top-right corner
            autoClose: 5000, // Auto close after 5 seconds
            hideProgressBar: true, // Hide progress bar
            theme: "colored", // Use colored theme for the toast
            style: {
              backgroundColor: "#e74c3c",
              color: "#fff",
              fontWeight: "400",
              fontSize: "12px",
            }, // Green background
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 5000);
        }
      })
      .catch((error) => {
        // console.error("Error saving data:", error);
        toast.error(`${error}`, {
          position: "top-right", // Position the toast at the top-right corner
          autoClose: 5000, // Auto close after 5 seconds
          hideProgressBar: true, // Hide progress bar
          theme: "colored", // Use colored theme for the toast
          style: { backgroundColor: "#e74c3c", color: "#fff", fontWeight: "400", fontSize: "12px" }, // Green background
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      });
    // const success = await register(formData);
    // if (success) {
    //   navigate("/dashboard");
    // } else {
    //   setError("Registration failed. Try again.");
    // }
  };
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const handleBack = () => {
    console.log("Back button clicked"); // Debugging log
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // Fallback to home if no history
    }
  };

  return (
    <>
      {isMobile && (
        <MKBox position="fixed" top={10} left={10} zIndex={10}>
          <IconButton onClick={handleBack} sx={{ color: "#3E6098", mr: 1 }}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
        </MKBox>
      )}
      {!isMobile && (
        <MKBox position="fixed" top={40} left={10} zIndex={10}>
          <IconButton onClick={handleBack} sx={{ color: "#3E6098", mr: 1 }}>
            <ArrowBackIcon fontSize="small" fontWeight="600" />
          </IconButton>
        </MKBox>
      )}
      <MKBox position="absolute" top={0} left={0} zIndex={1} width="100%" minHeight="100vh">
        {/* Logo - Adjust position for mobile */}
        <MKBox
          position="absolute"
          top={isMobile ? 10 : 20}
          left={isMobile ? "50%" : 40}
          sx={{
            transform: isMobile ? "translateX(-50%)" : "none",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <img src={dclogo} alt="Logo" style={{ width: isMobile ? "150px" : "200px" }} />
        </MKBox>
      </MKBox>

      <MKBox position="absolute" top={0} left={0} zIndex={1} width="100%" minHeight="100vh">
        <MKBox px={1} mt={5} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            height="100%"
            sx={{ px: isMobile ? 2 : 0 }}
          >
            <Grid item xs={12} sm={9} md={5} lg={4} xl={3}>
              <MKTypography
                variant="h4"
                fontWeight="700"
                sx={{
                  color: "#3E6098",
                  fontSize: isMobile ? "24px" : "32px",
                  textAlign: "center",
                  mb: 1,
                }}
              >
                Create Your Account
              </MKTypography>

              <MKTypography
                variant="body2"
                textAlign="center"
                sx={{ color: "#A0AEC0", fontSize: isMobile ? "12px" : "14px", mb: 3 }}
              >
                Enter your details to sign up
              </MKTypography>

              <MKBox pb={3} px={isMobile ? 2 : 3}>
                <MKBox component="form" role="form" onSubmit={handleSubmit}>
                  {["name", "Phone", "email", "password"].map((field) => (
                    <MKBox mb={2} key={field}>
                      <MKTypography variant="caption" fontWeight="bold" color="textPrimary">
                        {field === "name"
                          ? "Full Name"
                          : field === "Phone"
                          ? "Phone Number"
                          : field.charAt(0).toUpperCase() + field.slice(1)}
                      </MKTypography>
                      <MKInput
                        type={
                          field === "password" ? "password" : field === "Phone" ? "tel" : "text"
                        }
                        name={field}
                        value={formData[field] || ""}
                        onChange={handleChange}
                        placeholder={`Your ${field}`}
                        error={!!errorMessage[field]}
                        fullWidth
                        sx={{
                          borderRadius: "12px",
                          backgroundColor: "#fff",
                          "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                          input: {
                            backgroundColor: "white",
                            padding: isMobile ? "10px" : "12px",
                          },
                        }}
                      />
                    </MKBox>
                  ))}

                  {/* Sign Up Button */}
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      style={{ backgroundColor: "#456CAE", color: "#fff" }}
                      fullWidth
                      sx={{
                        borderRadius: "50px",
                        fontSize: isMobile ? "14px" : "16px",
                        py: isMobile ? "8px" : "12px",
                      }}
                      type="submit"
                    >
                      Sign Up
                    </MKButton>
                  </MKBox>

                  {/* Sign In Link */}
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography
                      variant="button"
                      sx={{ fontSize: isMobile ? "12px" : "14px", color: "#A0AEC0" }}
                    >
                      Already have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/signin"
                        variant="button"
                        fontWeight="medium"
                        sx={{ color: "#3276E8" }}
                      >
                        Sign In
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>

        {/* Footer */}
        <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
          <SimpleFooter />
        </MKBox>
      </MKBox>
    </>
  );
}

export default SignUp;
