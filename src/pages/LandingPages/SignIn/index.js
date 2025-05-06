import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// import swal from "sweetalert";
import GoogleIcon from "assets/images/common/googlelogo.png";
import SimpleFooter from "examples/Footers/SimpleFooter";
import dclogo from "assets/images/logos/gray-logos/dclogo.svg";
import { toast } from "react-toastify";
// import { login } from "api/auth";
import axios from "axios";
function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const handleBack = () => {
    // console.log("Back button clicked"); // Debugging log
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/"); // Fallback to home if no history
    }
  };
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const userData = res.data;
        console.log("Google user data:", userData);

        // Optional: decode ID token if needed
        const decoded = jwtDecode(tokenResponse.credential);
        console.log("Decoded ID Token:", decoded);
        // You can now send `userData` to your backend for auth
      } catch (err) {
        console.error("Google login error", err);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errors.email = "Invalid email format";
    }
    if (!formData.email || formData.email.trim() === "") {
      errors.email = " Email is required";
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

    // Clear previous errors
    setError({});
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("https://admin.deltachase.in/public/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        axios
          .get("https://admin.deltachase.in/public/api/user", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${response.data.token}`,
            },
          })
          .then((userResponse) => {
            localStorage.setItem("user", JSON.stringify(userResponse.data));
            // console.log("Logged-in user:", userResponse.data);
          });
        toast.success("Login Successful! Welcome back to Delta Chase.", {
          position: "top-right", // Position the toast at the top-right corner
          autoClose: 5000, // Auto close after 5 seconds
          hideProgressBar: true, // Hide progress bar
          theme: "colored", // Use colored theme for the toast
          style: { backgroundColor: "#28a745", color: "#fff", fontWeight: "400", fontSize: "12px" }, // Green background
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "Please try again.";

      toast.error(`${errMsg}`, {
        position: "top-right", // Position the toast at the top-right corner
        autoClose: 5000, // Auto close after 5 seconds
        hideProgressBar: true, // Hide progress bar
        theme: "colored", // Use colored theme for the toast
        style: { backgroundColor: "#e74c3c", color: "#fff", fontWeight: "400", fontSize: "12px" }, // Red background for error
      });
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
            <ArrowBackIcon fontSize="small" />
          </IconButton>
        </MKBox>
      )}
      {/* Background Overlay */}
      <MKBox position="absolute" top={0} left={0} zIndex={1} width="100%" minHeight="100vh">
        {/* Logo and Back Button */}
        <MKBox
          position="absolute"
          top={isMobile ? 10 : 20}
          left={isMobile ? "50%" : 40}
          sx={{
            transform: isMobile ? "translateX(-50%)" : "none",
            textAlign: isMobile ? "center" : "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Back Button */}

          {/* Logo */}
          <img src={dclogo} alt="Logo" style={{ width: isMobile ? "150px" : "200px" }} />
        </MKBox>
      </MKBox>

      {/* Main Sign-In Container */}
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
                fontWeight="medium"
                style={{
                  color: "#3E6098",
                  fontWeight: "700",
                  fontSize: isMobile ? "28px" : "32px",
                }}
                mt={1}
                textAlign="center"
              >
                Welcome Back
              </MKTypography>

              <MKTypography
                variant="body2"
                textAlign="center"
                mt={1}
                mb={3}
                style={{
                  color: "#A0AEC0",
                  fontWeight: "400",
                  fontSize: isMobile ? "12px" : "14px",
                }}
              >
                Enter your email and password to sign in
              </MKTypography>

              <MKBox pb={3}>
                <MKBox component="form" onSubmit={handleSubmit} role="form">
                  {/* Email Field */}
                  <MKBox mb={2}>
                    <MKTypography variant="caption" fontWeight="bold" color="textPrimary">
                      Email
                    </MKTypography>
                    <MKInput
                      type="email"
                      placeholder="Your email address"
                      fullWidth
                      name="email"
                      onChange={handleChange}
                      error={!!error.email}
                      helperText={error.email}
                      required
                      sx={{
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        input: { backgroundColor: "white", padding: "12px" },
                      }}
                    />
                  </MKBox>

                  {/* Password Field */}
                  <MKBox mb={2}>
                    <MKTypography variant="caption" fontWeight="bold" color="textPrimary">
                      Password
                    </MKTypography>
                    <MKInput
                      type="password"
                      placeholder="Your password"
                      name="password"
                      onChange={handleChange}
                      required
                      fullWidth
                      error={!!error.password}
                      sx={{
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        input: { backgroundColor: "white", padding: "12px" },
                      }}
                    />
                  </MKBox>

                  {/* Remember Me */}
                  <MKBox display="flex" alignItems="center">
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="caption"
                      fontWeight="bold"
                      color="textPrimary"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: 1 }}
                    >
                      Remember me
                    </MKTypography>
                  </MKBox>

                  {/* Sign In Button */}
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      type="submit"
                      fullWidth
                      style={{ backgroundColor: "#456CAE", color: "#fff" }}
                      sx={{
                        borderRadius: "50px",
                        minHeight: "45px",
                        "&:hover": { backgroundColor: "#456CAE" },
                      }}
                    >
                      Sign In
                    </MKButton>
                  </MKBox>

                  {/* Forgot Password */}
                  <MKBox mt={2} textAlign="center">
                    <MKTypography
                      component={Link}
                      to="/forgot-password"
                      variant="body2"
                      color="info"
                      style={{ fontSize: isMobile ? "12px" : "14px", fontWeight: "400" }}
                    >
                      Forgot Password?
                    </MKTypography>
                  </MKBox>

                  {/* Google Sign-In */}
                  <MKBox mt={2} textAlign="center">
                    <MKButton
                      onClick={login}
                      fullWidth
                      startIcon={
                        <img src={GoogleIcon} alt="Google Icon" style={{ width: 17, height: 17 }} />
                      }
                      style={{ backgroundColor: "#fff" }}
                      sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: 500,
                        padding: "12px",
                        "&:hover": { backgroundColor: "#fff" },
                      }}
                    >
                      Sign in with Google
                    </MKButton>
                  </MKBox>

                  {/* Sign Up Link */}
                  <MKBox mt={3} mb={3} textAlign="center">
                    <MKTypography
                      variant="button"
                      style={{
                        fontSize: isMobile ? "12px" : "14px",
                        fontWeight: "400",
                        color: "#A0AEC0",
                      }}
                    >
                      Don’t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/signup"
                        variant="button"
                        fontWeight="medium"
                        sx={{
                          color: "#3276E8",
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Sign up
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

export default SignInBasic;
