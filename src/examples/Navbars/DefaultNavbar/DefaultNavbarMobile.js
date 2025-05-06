import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

//React React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Avatar from "@mui/material/Avatar";
//React React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import MKButton from "components/MKButton";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
function DefaultNavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("You have been logged out successfully.", {
      position: "top-right", // Position the toast at the top-right corner
      autoClose: 5000, // Auto close after 5 seconds
      hideProgressBar: true, // Hide progress bar
      theme: "colored", // Use colored theme for the toast
      style: { backgroundColor: "#28a745", color: "#fff", fontWeight: "400", fontSize: "12px" }, // Green background
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };
  const handleSetCollapse = (name, hasDropdown) => {
    if (hasDropdown) {
      setCollapse((prev) => (prev === name ? false : name));
    }
  };

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name, Boolean(navCollapse))}
        href={href}
        route={route}
        collapse={Boolean(navCollapse)}
      >
        <MKBox sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}>
          {routeCollapses &&
            routeCollapses.map((item) => (
              <MKBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                    >
                      {item.name}
                    </MKTypography>
                    {item.collapse.map((el) => (
                      <MKTypography
                        key={el.name}
                        component={el.route ? Link : MuiLink}
                        to={el.route ? el.route : ""}
                        href={el.href ? el.href : ""}
                        target={el.href ? "_blank" : ""}
                        rel={el.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="dark"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}
                    display="block"
                    component={item.route ? Link : MuiLink}
                    to={item.route ? item.route : ""}
                    href={item.href ? item.href : ""}
                    target={item.href ? "_blank" : ""}
                    rel={item.href ? "noreferrer" : "noreferrer"}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
        </MKBox>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      {user ? (
        <>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
              alignItems: "center",
              padding: "13px 16px", // Padding inside the card
              borderRadius: "8px", // Rounded corners for the card
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect for card
              backgroundColor: "#fff", // White background
              marginTop: "8px", // Margin on top of the card
              width: "100%", // Full width on mobile
              boxSizing: "border-box", // Ensure padding is included in the width calculation
            }}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                bgcolor: "#1976d2",
                marginRight: 2, // space between avatar and username
              }}
              alt={user.name}
              src={user.avatar || "/default-avatar.png"}
            />
            <Typography variant="body1">{user.name}</Typography>
          </Box>
          {/* <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu> */}
        </>
      ) : (
        ""
      )}
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </MKBox>
      {!user ? (
        <MKButton
          color="info"
          variant="contained"
          sx={{
            borderRadius: "50px", // Makes the button rounded
            padding: "10px 30px", // Ensures proper spacing for rounded buttons
            textTransform: "none", // Keeps the label text uncapitalized
            alignItems: "center",
            display: "inline-block",
          }}
          href="/signin"
        >
          Sign Up
        </MKButton>
      ) : (
        <>
          <MKButton
            color="info"
            variant="contained"
            sx={{
              borderRadius: "50px", // Makes the button rounded
              padding: "10px 30px", // Ensures proper spacing for rounded buttons
              textTransform: "none", // Keeps the label text uncapitalized
              alignItems: "center",
              display: "inline-block",
            }}
            onClick={handleLogout}
          >
            Logout
          </MKButton>
        </>
      )}
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
