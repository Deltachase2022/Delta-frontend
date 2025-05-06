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
import MKAvatar from "components/MKAvatar";

// Images
import team4 from "assets/images/team-4.jpg";

function AvatarSize() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKAvatar src={team4} alt="xs" size="xs" />
            <MKAvatar src={team4} alt="sm" size="sm" />
            <MKAvatar src={team4} alt="md" size="md" />
            <MKAvatar src={team4} alt="lg" size="lg" />
            <MKAvatar src={team4} alt="xl" size="xl" />
            <MKAvatar src={team4} alt="xxl" size="xxl" />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarSize;
