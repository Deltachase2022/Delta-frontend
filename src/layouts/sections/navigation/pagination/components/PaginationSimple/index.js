/* eslint-disable no-param-reassign */
/**
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
import Icon from "@mui/material/Icon";

//React React components
import MKPagination from "components/MKPagination";

function PaginationSimple() {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
        <MKPagination>
          <MKPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </MKPagination>
          <MKPagination item active>
            1
          </MKPagination>
          <MKPagination item>2</MKPagination>
          <MKPagination item>3</MKPagination>
          <MKPagination item>4</MKPagination>
          <MKPagination item>5</MKPagination>
          <MKPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </MKPagination>
        </MKPagination>
      </Grid>
    </Container>
  );
}

export default PaginationSimple;
