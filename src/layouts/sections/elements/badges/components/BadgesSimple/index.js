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
import Stack from "@mui/material/Stack";

//React React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";

function BadgesSimple() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <MKBadge badgeContent="primary" variant="contained" color="primary" container />
            <MKBadge badgeContent="secondary" variant="contained" color="secondary" container />
            <MKBadge badgeContent="success" variant="contained" color="success" container />
            <MKBadge badgeContent="error" variant="contained" color="error" container />
            <MKBadge badgeContent="warning" variant="contained" color="warning" container />
            <MKBadge badgeContent="info" variant="contained" color="info" container />
            <MKBadge badgeContent="light" variant="contained" color="light" container />
            <MKBadge badgeContent="dark" variant="contained" color="dark" container />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BadgesSimple;
