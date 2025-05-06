import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKBox from "components/MKBox";
import "react-input-range/lib/css/index.css";
import MKTypography from "components/MKTypography";
import { Chart, ArcElement, Tooltip, Legend, Filler } from "chart.js";
import Subscription from "pages/Presentation/sections/Subscription";
import { Row, Col, Input, Card, CardBody } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
// import about from "assets/images/common/about.png";
// import dclogo from "assets/images/logos/gray-logos/black-logo.png";

// import MKButton from "components/MKButton";
import Footer from "pages/Presentation/sections/Footer";
const EmiCalCulatorComponent = () => {
  const amountLabels = [1e5, 25e5, 50e5, 75e5, 1e7];
  // Register Chart.js components
  Chart.register(ArcElement, Tooltip, Legend, Filler);

  const [amount, setAmount] = useState(amountLabels[1]);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const formatAmount = (value) => {
    if (value >= 1e7) return `₹${(10).toFixed(0)}CR`;
    return `₹${(value / 1e5).toFixed(0)}L`;
  };

  const formatInterestRate = (value) => `${value}%`;
  const formatTenure = (value) => `${value}Y`;

  const handleAmountChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setAmount(newValue);
  };

  const handleInterestRateChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setInterestRate(newValue);
  };

  const handleTenureChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setTenure(newValue);
  };

  const handleAmountInputChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    const newValue = value ? parseInt(value, 10) : "";
    setAmount(newValue);
  };

  const handleInterestRateInputChange = (event) => {
    const value = event.target.value.replace(/[^0-9.]/g, "");
    const newValue = value ? parseFloat(value) : "";

    setInterestRate(newValue);
  };

  const handleTenureInputChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    const newValue = value ? parseInt(value, 10) : "";

    setTenure(newValue);
  };
  const calculateEMI = (P, R, N) => {
    R = R / (12 * 100); // Monthly interest rate
    N = N * 12; // Number of monthly installments
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return emi.toFixed(2);
  };

  useEffect(() => {
    if (amount && interestRate && tenure) {
      const emiValue = calculateEMI(amount, interestRate, tenure);
      setEmi(emiValue);

      const totalAmountPayable = emiValue * tenure * 12;
      setTotalPayable(totalAmountPayable.toFixed(2));
      setTotalInterest((totalAmountPayable - amount).toFixed(2));
    } else {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayable(0);
    }
  }, [amount, interestRate, tenure]);
  //   chart
  const data = {
    labels: ["Principal Amount", "Interest Amount", "Loan Emi", " Total Payable Amount"],
    datasets: [
      {
        data: [emi, amount, totalInterest, totalPayable],
        backgroundColor: ["#62B2FD", "#9BDFC4", "#F99BAB", "#FFB44F"],
        hoverBackgroundColor: ["#62B2FD", "#9BDFC4", "#F99BAB", "#FFB44F"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw;
            return label;
          },
        },
      },
      beforeDraw: (chart) => {
        const { ctx, chartArea } = chart;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        ctx.save();
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "#FF0000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`₹${emi}`, centerX, centerY);
        ctx.restore();
      },
    },
    cutout: "70%",
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
            Emi <span style={{ color: "#114CF2" }}>Calculator</span>
          </MKTypography>
          <img
            src="/static/media/vector_line.90aaecb8184d78c563eedb885288f805.svg"
            width={330}
            height={34}
            style={{ marginTop: "10px" }}
          />
          <MKTypography
            id="whyus-desc"
            style={{ fontWeight: "500", fontSize: "16px", color: "#83847E" }}
          >
            Calculate your EMI for different interest rates, loan amounts and loan tenures,
            <br /> using <span style={{ color: "#114CF2" }}>DeltaChase</span> EMI Calculator.
          </MKTypography>
        </Grid>
        <Card style={{ marginTop: "40px", marginBottom: "40px" }}>
          <CardBody>
            <Row>
              <Col lg="5" xl="5" sm="12" md="5">
                {/* Left Side: Loan Inputs */}

                <Row>
                  <Col md="12" className="mt-4">
                    <Row className="align-items-center">
                      <Col md="6">
                        <p className="headsubtext" style={{ fontSize: "16px", fontWeight: "600" }}>
                          Loan Amount(₹)
                        </p>
                      </Col>
                      <Col md="6" className="d-flex justify-content-end">
                        <span
                          className="headsubtext mt-2"
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          ₹
                        </span>
                        &nbsp;&nbsp;
                        <Input
                          type="number"
                          className="form-control w-50 text-end"
                          value={amount}
                          onChange={handleAmountInputChange}
                        />
                      </Col>
                    </Row>
                    <input
                      type="range"
                      className="loan_amount_range w-100 my-3"
                      value={amount}
                      min={1e5}
                      max={100000000}
                      step={1e5}
                      onChange={handleAmountChange}
                    />
                    <div className="d-flex justify-content-between">
                      <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                        {formatAmount(1e5)}
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                        {formatAmount(1e7)}
                      </span>
                    </div>
                  </Col>
                </Row>

                {/* Interest Rate */}
                <Row>
                  <Col md="12" className="mt-4">
                    <Row className="align-items-center">
                      <Col>
                        <p className="headsubtext" style={{ fontSize: "16px", fontWeight: "600" }}>
                          Interest Rate (%)
                        </p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          className="headsubtext mt-2"
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          %
                        </span>
                        &nbsp;&nbsp;
                        <Input
                          type="number"
                          className="form-control w-50 text-end"
                          value={interestRate}
                          onChange={handleInterestRateInputChange}
                        />
                      </Col>
                    </Row>
                    <input
                      type="range"
                      className="interest_rate_range w-100 my-3"
                      value={interestRate}
                      min={4}
                      max={40}
                      step={0.1}
                      onChange={handleInterestRateChange}
                    />
                    <div className="d-flex justify-content-between">
                      <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                        {formatInterestRate(4)}
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                        {formatInterestRate(40)}
                      </span>
                    </div>
                  </Col>
                </Row>

                {/* Loan Tenure */}
                <Row>
                  <Col md="12" className="mt-4">
                    <Row className="align-items-center">
                      <Col>
                        <p className="headsubtext" style={{ fontSize: "16px", fontWeight: "600" }}>
                          Loan Tenure (years)
                        </p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <span
                          className="headsubtext mt-2"
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          Yrs
                        </span>
                        &nbsp;&nbsp;
                        <Input
                          type="number"
                          className="form-control w-50 text-end"
                          value={tenure}
                          onChange={handleTenureInputChange}
                        />
                      </Col>
                    </Row>
                    <input
                      type="range"
                      className="loan_tenure_range w-100 my-3"
                      value={tenure}
                      min={4}
                      max={40}
                      step={1}
                      onChange={handleTenureChange}
                    />
                    <div className="d-flex justify-content-between">
                      <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                        {formatTenure(4)}
                      </span>
                      <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                        {formatTenure(40)}
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg="7" xl="7" sm="12" md="7">
                <Row>
                  {/* Second Column (Chart) - Display First on Mobile */}
                  <Col md="6" className="order-1 order-md-2">
                    <div className="mt-5 mb-5 pt-3">
                      <Doughnut data={data} options={options} />
                      <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1px" }}>
                          Loan EMI
                        </p>
                        <span style={{ fontSize: "24px", fontWeight: "bold" }}>₹{emi}</span>
                      </div>
                    </div>
                  </Col>

                  {/* First Column (EMI Details) - Display Second on Mobile */}
                  <Col md="6" className="order-2 order-md-1">
                    <div className="mt-5 p-3">
                      <div className="emi-row mt-5">
                        <div className="d-flex justify-content-between">
                          <p
                            className="mb-0"
                            style={{ fontSize: "16px", fontWeight: "600" }}
                            id="emi-text"
                          >
                            Loan EMI
                          </p>
                          <p
                            className="mb-0 ms-3"
                            style={{ fontSize: "16px", fontWeight: "600" }}
                            id="emi-text"
                          >
                            ₹{emi}
                          </p>
                        </div>
                      </div>
                      <div className="emi-row mt-4">
                        <div className="d-flex justify-content-between">
                          <p
                            className="mb-0"
                            style={{ fontSize: "16px", fontWeight: "600" }}
                            id="emi-text"
                          >
                            Principal Amount
                          </p>
                          <p
                            className="mb-0 ms-3"
                            style={{ fontSize: "16px", fontWeight: "600" }}
                            id="emi-text"
                          >
                            ₹{amount}
                          </p>
                        </div>
                      </div>
                      <div className="emi-row mt-4">
                        <div className="d-flex justify-content-between">
                          <p
                            className="mb-0"
                            style={{ fontSize: "16px", fontWeight: "600" }}
                            id="emi-text"
                          >
                            Interest Amount
                          </p>
                          <p
                            className="mb-0 ms-3"
                            style={{ fontSize: "16px", fontWeight: "600" }}
                            id="emi-text"
                          >
                            ₹{totalInterest}
                          </p>
                        </div>
                      </div>
                      <div className="emi-row mt-4">
                        <div className="d-flex justify-content-between">
                          <p
                            className="mb-0"
                            style={{ fontSize: "16px", fontWeight: "600", color: "#0C3AB5" }}
                            id="emi-text"
                          >
                            Total Payable Amount
                          </p>
                          <p
                            className="mb-0"
                            style={{ fontSize: "16px", fontWeight: "600", color: "#0C3AB5" }}
                            id="emi-text"
                          >
                            ₹{totalPayable}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
      <Subscription />
      <Footer />
    </>
  );
};

export default EmiCalCulatorComponent;
