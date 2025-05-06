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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

//React React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

//React React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import NewsComponent from "pages/Presentation/sections/NewsComponent";
import Footer from "pages/Presentation/sections/Footer";
// import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-presentation.jpg";

import vectorLine from "assets/images/vector_line.svg";
import homeMain from "assets/images/home_main.svg";
import MKButton from "components/MKButton";
// import { Margin } from "@mui/icons-material";

function Presentation() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id "${id}" not found.`);
    }
  };

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

      <Container id="home">
        <MKBox
          py={1}
          my={2}
          mx={3}
          width={"calc(100% - 48px)"}
          borderRadius="xl"
          position={"relative"}
          left={0}
          zIndex={3}
          id="main-content"
        >
          <Grid container className="home-container">
            <MKTypography color="#191A15" className="mob-heading" id="mob-heading">
              <span>Confused With Your&nbsp;</span>
              <span>Finances?</span>
              <img src={vectorLine} className="vector-line" />
            </MKTypography>
            {/* Left Side Grid (Text Section) */}
            <Grid container spacing={1} className=" hero-container">
              {/* Right Side Grid (Image) - This will appear first on mobile */}

              {/* Left Side Grid (Text Section) - This will appear below the image on mobile */}
              <Grid item xs={12} lg={5} className="left-grid">
                <MKTypography variant="h1" color="#191A15" className="heading">
                  <span>Confused</span>
                  <span>With Your</span>
                  <span>Finances?</span>
                  <img src={vectorLine} className="vector-line" />
                </MKTypography>

                <span className="description" id="description">
                  Don’t worry, we’ve got you covered! <br />
                  Managing money can be tricky, but our expert financial services are designed to
                  simplify your life. Whether it’s budgeting, investing, or retirement planning,
                  Delta Chase will guide you every step of the way.
                </span>
                <br />
                <MKButton
                  color="info"
                  variant="contained"
                  className="getButton"
                  sx={{
                    borderRadius: "50px",
                    padding: "14px 38px",
                    textTransform: "none",
                    alignItems: "center",
                    display: "inline-block",
                    marginTop: "22px",
                  }}
                  onClick={() => scrollToSection("services")}
                >
                  Get Started
                </MKButton>
              </Grid>
              <Grid item xs={12} lg={6} container justifyContent="flex-end" className="right-grid">
                <img src={homeMain} className="home-image" />
              </Grid>
            </Grid>
          </Grid>
          <Counters />
          <Information />
          <DesignBlocks />
          <Pages />
          <NewsComponent />
        </MKBox>
      </Container>
      <Footer />
    </>
  );
}

export default Presentation;
