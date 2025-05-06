import React, { useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKBox from "components/MKBox";
import "react-input-range/lib/css/index.css";
import MKTypography from "components/MKTypography";
import Subscription from "pages/Presentation/sections/Subscription";
import { Row, Col, Input, Card, CardBody, FormGroup, Label } from "reactstrap";
import { CircularProgress, Box } from "@mui/material";
// import about from "assets/images/common/about.png";
// import dclogo from "assets/images/logos/gray-logos/black-logo.png";

// import MKButton from "components/MKButton";
import Footer from "pages/Presentation/sections/Footer";
const IncomeTaxCalculator = () => {
  const [assessmentYear, setAssessmentYear] = useState("2023-2024");
  const [ageCategory, setAgeCategory] = useState("below 60");
  const [grossSalary, setGrossSalary] = useState(0);
  const [incomeFromOtherSources, setIncomeFromOtherSources] = useState(0);
  const [incomeFromInterest, setIncomeFromInterest] = useState(0);
  const [rentalIncome, setRentalIncome] = useState(0);
  const [interestPaidHomeLoanSelf, setInterestPaidHomeLoanSelf] = useState(0);
  const [interestPaidHomeLoanLetOut, setInterestPaidHomeLoanLetOut] = useState(0);
  const [deductions80C, setDeductions80C] = useState(0);
  const [deductions80CCD1B, setDeductions80CCD1B] = useState(0);
  const [medicalInsurance80D, setMedicalInsurance80D] = useState(0);
  const [charityDonations80G, setCharityDonations80G] = useState(0);
  const [educationLoanInterest80E, setEducationLoanInterest80E] = useState(0);
  const [savingAccountInterest80TTA, setSavingAccountInterest80TTA] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);
  const [dearnessAllowance, setDearnessAllowance] = useState(0);
  const [hraReceived, setHraReceived] = useState(0);
  const [totalRentPaid, setTotalRentPaid] = useState(0);
  const [isMetroCity, setIsMetroCity] = useState("no");
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [taxPayableOldRegime, setTaxPayableOldRegime] = useState(0);
  const [taxPayableNewRegime, setTaxPayableNewRegime] = useState(0);
  const [loading, setLoading] = useState(false);

  const assessmentYears = ["2021-2022", "2022-2023", "2023-2024", "2024-2025"];
  const ageCategories = ["below 60", "60 or above 60", "80 or above 80"];
  const metroOptions = ["yes", "no"];
  const safeParse = (value) => parseFloat(value || 0);
  const calculateTaxableIncome = () => {
    // HRA Exemption calculation
    const basicHRAExemption = basicSalary * 0.5; // Assuming 50% of basic salary for HRA exemption
    const actualHRAExemption = Math.min(hraReceived, basicHRAExemption);
    const metroHRAExemption = Math.max(
      isMetroCity === "yes"
        ? totalRentPaid - 0.5 * (basicSalary + dearnessAllowance)
        : totalRentPaid - 0.4 * (basicSalary + dearnessAllowance),
      0
    );

    const hraExemption = Math.min(actualHRAExemption, metroHRAExemption);

    // Total income
    const totalIncome =
      safeParse(grossSalary) +
      safeParse(incomeFromOtherSources) +
      safeParse(incomeFromInterest) +
      safeParse(rentalIncome) -
      safeParse(interestPaidHomeLoanSelf) -
      safeParse(interestPaidHomeLoanLetOut);

    // Deductions
    const totalDeductions =
      safeParse(deductions80C) +
      safeParse(deductions80CCD1B) +
      safeParse(medicalInsurance80D) +
      safeParse(charityDonations80G) +
      safeParse(educationLoanInterest80E) +
      safeParse(savingAccountInterest80TTA);

    // Taxable income
    const taxableIncome = totalIncome - hraExemption - totalDeductions;
    setTaxableIncome(taxableIncome);
  };

  const calculateTaxPayableOldRegime = () => {
    let taxPayable = 0;
    // Example tax slabs for old regime
    if (taxableIncome <= 250000) {
      taxPayable = 0;
    } else if (taxableIncome <= 500000) {
      taxPayable = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      taxPayable = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
      taxPayable = 112500 + (taxableIncome - 1000000) * 0.3;
    }
    setTaxPayableOldRegime(taxPayable);
  };

  const calculateTaxPayableNewRegime = () => {
    let taxPayable = 0;
    // Example tax slabs for new regime (assuming lower rates)
    if (taxableIncome <= 250000) {
      taxPayable = 0;
    } else if (taxableIncome <= 500000) {
      taxPayable = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      taxPayable = 10000 + (taxableIncome - 500000) * 0.15;
    } else {
      taxPayable = 85000 + (taxableIncome - 1000000) * 0.25;
    }
    setTaxPayableNewRegime(taxPayable);
  };
  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent overlay
            zIndex: 9999, // Ensure it stays on top
          }}
        >
          <CircularProgress size={50} sx={{ color: "#fff" }} />
        </Box>
      )}
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
      <MKBox
        minHeight="20vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${bgImage})`,
          // backgroundSize: "cover",

          display: "grid",
          placeItems: "center",
          // backgroundColor: "white",
        }}
      />
      <Container>
        <Grid item xs={12} lg={6}>
          <MKTypography id="why-us" style={{ fontSize: "50px", fontWeight: "600", color: "#000" }}>
            Income Tax <span style={{ color: "#114CF2" }}>Calculator</span>
          </MKTypography>
          <img
            src="/static/media/vector_line.90aaecb8184d78c563eedb885288f805.svg"
            width={330}
            height={34}
            style={{ marginTop: "10px" }}
          />
          <MKTypography
            id="whyus-desc"
            style={{ fontWeight: "500", fontSize: "16px", color: "#83847E", marginTop: "20px" }}
          >
            An Income-tax calculator is an online tool that helps to evaluate taxes based on a
            person’s income, his respective tax slab and tax liability. Individuals falling under
            the taxable income bracket are liable to pay a specific portion of their net annual
            income as tax. Income tax can be paid either as tax deducted at source while
            disbursement of monthly salary, or through the income tax returns portal managed by the
            Central Board of Direct Taxes (CBDT). The provision for online payment of taxes is to
            ensure individuals pay their stipulated dues on any earnings generated from other
            sources.
          </MKTypography>
        </Grid>
        <Card style={{ marginTop: "40px", marginBottom: "40px", borderRadius: "12px" }}>
          <CardBody style={{ padding: "80px" }}>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="assessmentYear"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Assessment Year
                  </Label>
                  <Input
                    type="select"
                    id="assessmentYear"
                    value={assessmentYear}
                    onChange={(e) => setAssessmentYear(e.target.value)}
                  >
                    {assessmentYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="ageCategory"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Age Category
                  </Label>
                  <Input
                    type="select"
                    id="ageCategory"
                    value={ageCategory}
                    onChange={(e) => setAgeCategory(e.target.value)}
                  >
                    {ageCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <span
              className="headsubtext"
              style={{ fontSize: "14px", fontWeight: "700", color: "#134FEF" }}
            >
              Income
            </span>
            <Row className="mt-3">
              <Col md="6">
                <FormGroup>
                  <Label
                    for="grossSalary"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Gross Salary Income
                  </Label>
                  <Input
                    type="number"
                    id="grossSalary"
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="incomeFromOtherSources"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Annual Income from Other Sources
                  </Label>
                  <Input
                    type="number"
                    id="incomeFromOtherSources"
                    value={incomeFromOtherSources}
                    onChange={(e) => setIncomeFromOtherSources(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="incomeFromInterest"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Annual Income from Interest
                  </Label>
                  <Input
                    type="number"
                    id="incomeFromInterest"
                    value={incomeFromInterest}
                    onChange={(e) => setIncomeFromInterest(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="rentalIncome"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Annual Income from Let-out House Property (Rental Income)
                  </Label>
                  <Input
                    type="number"
                    id="rentalIncome"
                    value={rentalIncome}
                    onChange={(e) => setRentalIncome(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="interestPaidHomeLoanSelf"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Annual Interest Paid on Home Loan (Self-occupied)
                  </Label>
                  <Input
                    type="number"
                    id="interestPaidHomeLoanSelf"
                    value={interestPaidHomeLoanSelf}
                    onChange={(e) => setInterestPaidHomeLoanSelf(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="interestPaidHomeLoanLetOut"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Annual Interest Paid on Home Loan (Let-out)
                  </Label>
                  <Input
                    type="number"
                    id="interestPaidHomeLoanLetOut"
                    value={interestPaidHomeLoanLetOut}
                    onChange={(e) => setInterestPaidHomeLoanLetOut(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <span
              className="headsubtext"
              style={{ fontSize: "14px", fontWeight: "700", color: "#134FEF" }}
            >
              Deductions
            </span>
            <Row className="mt-3">
              <Col md="6">
                <FormGroup>
                  <Label
                    for="deductions80C"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Basic Deductions u/s 80C
                  </Label>
                  <Input
                    type="number"
                    id="deductions80C"
                    value={deductions80C}
                    onChange={(e) => setDeductions80C(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="deductions80CCD1B"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Contribution to NPS u/s 80CCD(1B)
                  </Label>
                  <Input
                    type="number"
                    id="deductions80CCD1B"
                    value={deductions80CCD1B}
                    onChange={(e) => setDeductions80CCD1B(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="medicalInsurance80D"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Medical Insurance Premium u/s 80D
                  </Label>
                  <Input
                    type="number"
                    id="medicalInsurance80D"
                    value={medicalInsurance80D}
                    onChange={(e) => setMedicalInsurance80D(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="charityDonations80G"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Donation to Charity u/s 80G
                  </Label>
                  <Input
                    type="number"
                    id="charityDonations80G"
                    value={charityDonations80G}
                    onChange={(e) => setCharityDonations80G(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="educationLoanInterest80E"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Interest on Educational Loan u/s 80E
                  </Label>
                  <Input
                    type="number"
                    id="educationLoanInterest80E"
                    value={educationLoanInterest80E}
                    onChange={(e) => setEducationLoanInterest80E(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="savingAccountInterest80TTA"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Interest on Deposits in Saving Account u/s 80TTA/TTB
                  </Label>
                  <Input
                    type="number"
                    id="savingAccountInterest80TTA"
                    value={savingAccountInterest80TTA}
                    onChange={(e) => setSavingAccountInterest80TTA(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <span
              className="headsubtext"
              style={{ fontSize: "14px", fontWeight: "700", color: "#134FEF" }}
            >
              HRA Exemption
            </span>
            <Row className="mt-3">
              <Col md="6">
                <FormGroup>
                  <Label
                    for="basicSalary"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Basic Salary Received Per Annum
                  </Label>
                  <Input
                    type="number"
                    id="basicSalary"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="dearnessAllowance"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Dearness Allowance (DA) Received Per Annum
                  </Label>
                  <Input
                    type="number"
                    id="dearnessAllowance"
                    value={dearnessAllowance}
                    onChange={(e) => setDearnessAllowance(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="hraReceived"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    HRA Received Per Annum
                  </Label>
                  <Input
                    type="number"
                    id="hraReceived"
                    value={hraReceived}
                    onChange={(e) => setHraReceived(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    for="totalRentPaid"
                    className="incomeFormtext"
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                  >
                    Total Rent Paid Per Annum
                  </Label>
                  <Input
                    type="number"
                    id="totalRentPaid"
                    value={totalRentPaid}
                    onChange={(e) => setTotalRentPaid(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label
                    style={{ fontSize: "14px", fontWeight: "700", color: "#131111" }}
                    for="isMetroCity"
                  >
                    Do You Live in a Metro City?
                  </Label>
                  <Input
                    type="select"
                    id="isMetroCity"
                    value={isMetroCity}
                    onChange={(e) => setIsMetroCity(e.target.value)}
                  >
                    {metroOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#134FEF",
                color: "#fff",
                padding: "9px 35px",
                borderRadius: "50px",
                fontWeight: "300",
                fontSize: "14px",
                textTransform: "none",
                "&:disabled": {
                  backgroundColor: "#a0a0a0",
                },
              }}
              disabled={loading}
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  calculateTaxableIncome();
                  calculateTaxPayableOldRegime();
                  calculateTaxPayableNewRegime();
                  setLoading(false); // stop loader
                }, 1000);
              }}
            >
              {loading ? <CircularProgress size={20} sx={{ color: "#fff" }} /> : "Calculate Tax"}
            </Button>

            <div className="result-card p-5">
              <div className="d-flex justify-content-end align-items-center mb-3">
                <p
                  className="subtext"
                  id="income-tax"
                  style={{ fontSize: "16px", fontWeight: "700", color: "#0C3AB5" }}
                >
                  Total tax (old regime)
                </p>
                <p
                  className="subtext ms-4"
                  style={{ fontSize: "16px", fontWeight: "700", color: "#0C3AB5" }}
                >
                  ₹{taxPayableOldRegime.toFixed(2)}
                </p>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <p
                  className="subtext"
                  id="income-tax"
                  style={{ fontSize: "16px", fontWeight: "700", color: "#0C3AB5" }}
                >
                  Total tax (New regime)
                </p>
                <p
                  className="subtext ms-3"
                  style={{ fontSize: "16px", fontWeight: "700", color: "#0C3AB5" }}
                >
                  ₹{taxPayableNewRegime.toFixed(2)}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
      <Subscription />
      <Footer />
    </>
  );
};

export default IncomeTaxCalculator;
