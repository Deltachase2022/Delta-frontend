import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "context/AuthContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import AuthContext from "context/AuthContext";
// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import SignIn from "pages/LandingPages/SignIn/index";
import SignUp from "pages/Presentation/sections/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "./style.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// Material Kit 2 React routes
import routes from "routes";
import ProtectedRoute from "ProtectedRoute"; // Import Protected Route
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={
              route.protected ? <ProtectedRoute>{route.component}</ProtectedRoute> : route.component
            }
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <GoogleOAuthProvider clientId="723805591-your-client-id-here.apps.googleusercontent.com">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Routes>
            {getRoutes(routes)}
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/presentation" />} />
          </Routes>
          {/* WhatsApp Floating Button  */}
          <FloatingWhatsApp
            phoneNumber="+91 7907791884"
            accountName="Delta Chase"
            allowEsc
            allowClickAway
            notification
            notificationSound
          />
        </ThemeProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
