import React, { useState, useEffect } from "react";
import { Container, Grid, Button, TextField } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKBox from "components/MKBox";
import "react-input-range/lib/css/index.css";
import MKTypography from "components/MKTypography";
import { Chart, ArcElement, Tooltip, Legend, Filler } from "chart.js";
import Subscription from "pages/Presentation/sections/Subscription";
import {
  Row,
  Col,
  Input,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { Doughnut } from "react-chartjs-2";
// import about from "assets/images/common/about.png";
// import dclogo from "assets/images/logos/gray-logos/black-logo.png";

// import MKButton from "components/MKButton";
import Footer from "pages/Presentation/sections/Footer";
const SipCalCulatorComponent = () => {
  Chart.register(ArcElement, Tooltip, Legend, Filler);

  const [amount, setAmount] = useState(5000);
  const [interestRate, setInterestRate] = useState(5);
  const [tenure, setTenure] = useState(12);
  const [futureValue, setFutureValue] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalGain, setTotalGain] = useState(0);
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  //   const formatAmount = (value) => {
  //     if (value >= 1e7) return `₹${(10).toFixed(0)}CR`;
  //     return `₹${(value / 1e5).toFixed(0)}L`;
  //   };

  const formatInterestRate = (value) => `${value}%`;
  const formatTenure = (value) => `${value}Y`;

  const handleAmountChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    const newValue = value ? parseInt(value, 10) : "";
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

  //   const handleAmountInputChange = (event) => {
  //     const value = event.target.value.replace(/[^0-9]/g, "");
  //     const newValue = value ? parseInt(value, 10) : "";
  //     setAmount(newValue);
  //   };

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
  const calculateSIP = (P, r, n) => {
    r = r / (12 * 100); // Monthly interest rate
    n = n * 12; // Number of monthly installments
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return futureValue.toFixed(2);
  };
  const calculateLumpsum = (P, r, n) => {
    r = r / 100; // Annual interest rate as a decimal
    const futureValue = P * Math.pow(1 + r, n);
    return futureValue.toFixed(2);
  };
  useEffect(() => {
    if (amount && interestRate && tenure) {
      if (activeTab === "1") {
        const futureValue = calculateSIP(amount, interestRate, tenure);
        setFutureValue(futureValue);
        setTotalInvestment((amount * tenure * 12).toFixed(2));
        setTotalGain((futureValue - amount * tenure * 12).toFixed(2));
      } else {
        const futureValue = calculateLumpsum(amount, interestRate, tenure);
        setFutureValue(futureValue);
        setTotalInvestment(amount.toFixed(2));
        setTotalGain((futureValue - amount).toFixed(2));
      }
    } else {
      setFutureValue(0);
      setTotalInvestment(0);
      setTotalGain(0);
    }
  }, [amount, interestRate, tenure, activeTab]);

  //   chart
  const data = {
    labels: ["Invested Amount", "Estimate return"],
    datasets: [
      {
        data: [totalInvestment, totalGain],
        backgroundColor: ["#9BDFC4", "#62B2FD"],
        hoverBackgroundColor: ["#9BDFC4", "#62B2FD"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Move legends below the chart
        labels: {
          font: {
            size: 12,
            weight: 500,
          },
          usePointStyle: true, // Use circular markers
          pointStyle: "circle",
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                return {
                  text: `${label}: ₹${data.datasets[0].data[i]}`, // Show label with value
                  fillStyle: data.datasets[0].backgroundColor[i], // Use dataset color
                  strokeStyle: "transparent", // Prevent strikethrough
                  lineWidth: 0, // Remove border around legend
                  pointStyle: "circle", // Keep circular markers
                  hidden: false, // Ensure legends are always visible
                };
              });
            }
            return [];
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ₹${context.raw}`;
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
        ctx.fillText(`₹${futureValue}`, centerX, centerY);
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
            Sip <span style={{ color: "#114CF2" }}>Calculator</span>
          </MKTypography>
          <img
            src="/static/media/vector_line.90aaecb8184d78c563eedb885288f805.svg"
            width={330}
            height={34}
            style={{ marginTop: "10px" }}
          />
          <MKTypography
            id="whyus-desc"
            style={{ fontWeight: "500", fontSize: "16px", color: "#83847E", marginTop: "15px" }}
          >
            The SIP calculator helps estimate the potential growth of your Systematic Investment
            Plan (SIP) investment
            <br /> over your chosen time frame. SIP is a convenient method to save for your
            long-term financial goals.
          </MKTypography>
        </Grid>
        <Card style={{ marginTop: "40px", marginBottom: "40px" }}>
          <CardBody>
            <Nav
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "nowrap", // Prevents wrapping
                gap: "8px", // Adds spacing between buttons
              }}
            >
              <NavItem>
                {" "}
                {/* Allows buttons to stretch equally */}
                <NavLink className={classnames({ active: activeTab === "1" })}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: activeTab === "1" ? "#134FEF" : "#FFFFFF",
                      color: activeTab === "1" ? "#FFF" : "#134FEF",
                      border: "1px solid #134FEF",
                      padding: "10px 10px",
                      borderRadius: "50px",
                      fontWeight: activeTab === "1" ? "300" : "400",
                      fontSize: "12px",
                      textTransform: "none",
                      flexGrow: 1, // Ensures equal width
                      minWidth: "auto", // Prevents fixed size issues
                      maxWidth: "100%", // Prevents overflow
                      "&:hover": {
                        backgroundColor: "#134FEF",
                        color: "#FFF",
                      },
                    }}
                    onClick={() => toggle("1")}
                  >
                    Sip Investment
                  </Button>
                </NavLink>
              </NavItem>

              <NavItem>
                {" "}
                {/* Allows buttons to stretch equally */}
                <NavLink className={classnames({ active: activeTab === "2" })}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: activeTab === "2" ? "#134FEF" : "#FFFFFF",
                      color: activeTab === "2" ? "#FFF" : "#134FEF",
                      border: "1px solid #134FEF",
                      padding: "10px 10px",
                      borderRadius: "50px",
                      fontWeight: activeTab === "2" ? "300" : "400",
                      fontSize: "12px",
                      textTransform: "none",
                      flexGrow: 1, // Ensures equal width
                      minWidth: "auto", // Prevents fixed size issues
                      maxWidth: "100%", // Prevents overflow
                      "&:hover": {
                        backgroundColor: "#134FEF",
                        color: "#FFF",
                      },
                    }}
                    onClick={() => toggle("2")}
                  >
                    Lumpsum
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                {/* SIP content goes here */}
                <Container className="mt-3">
                  <Row>
                    <Col lg="5" xl="5" sm="12" md="5">
                      <p className="headsubtext" style={{ fontSize: "16px", fontWeight: "600" }}>
                        Returns Estimator
                      </p>
                      <div className="sip-amount-input-box">
                        <div className="sip-inner-box">
                          <div className="sip-input-container">
                            <span
                              className="rupee-symbol"
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                marginRight: "5px",
                              }}
                            >
                              ₹
                            </span>
                            <TextField
                              variant="outlined"
                              type="text"
                              label="Enter Amount"
                              value={amount}
                              onChange={handleAmountChange}
                              placeholder="0"
                              inputProps={{ maxLength: 15 }}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "8px",
                                  height: "40px",
                                  minWidth: "120px",
                                },
                                "& .MuiOutlinedInput-input": {
                                  padding: "10px",
                                  textAlign: "left",
                                },
                              }}
                            />
                            <span className="clone-sip-input"></span>
                          </div>
                        </div>
                      </div>
                      {/* Loan Tenure */}
                      <Row>
                        <Col md="12" className="mt-4">
                          <Row className="align-items-center">
                            <Col>
                              <p
                                className="headsubtext"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                              >
                                Select Duration (years)
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
                            min={1}
                            max={30}
                            step={1} // Step of 1 year
                            onChange={handleTenureChange}
                          />
                          <div className="d-flex justify-content-between">
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatTenure(1)}
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatTenure(30)}
                            </span>
                          </div>
                        </Col>
                      </Row>
                      {/* Interest Rate */}
                      <Row>
                        <Col md="12" className="mt-4">
                          <Row className="align-items-center">
                            <Col>
                              <p
                                className="headsubtext"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                              >
                                Expected Rate of Return(%)
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
                            min={8}
                            max={30}
                            step={0.1} // Step of 0.1%
                            onChange={handleInterestRateChange}
                          />
                          <div className="d-flex justify-content-between">
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatInterestRate(8)}
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatInterestRate(30)}
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="7" xl="7" sm="12" md="7">
                      <Row className="align-items-center">
                        {/* Doughnut Chart (Show First on Mobile, Second on Desktop) */}
                        <Col xs="12" md="6" className="order-1 order-md-2">
                          <Doughnut data={data} options={options} />
                        </Col>

                        {/* Investment Value Box (Show Second on Mobile, First on Desktop) */}
                        <Col xs="12" md="6" className="order-2 order-md-1">
                          <div
                            style={{
                              textAlign: "center",
                              marginTop: "120px",
                              padding: "20px",
                              border: "1px solid #ccc",
                              borderRadius: "20px",
                              backgroundColor: "#f9f9f9",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                marginBottom: "10px",
                              }}
                            >
                              The total value of your investment after{" "}
                              <b style={{ color: "#134FEF" }}>{tenure}</b> years will be
                            </p>

                            <span
                              style={{ fontSize: "28px", fontWeight: "bold", display: "block" }}
                            >
                              ₹{futureValue}
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tabId="2">
                {/* Lumpsum Amount content goes here */}
                <Container className="mt-3">
                  <Row>
                    <Col lg="5" xl="5" sm="12" md="5">
                      <p
                        className="headsubtext"
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Returns Estimator
                      </p>
                      <div className="sip-amount-input-box">
                        <div className="sip-inner-box">
                          <div className="sip-input-container">
                            <span
                              className="rupee-symbol"
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                marginRight: "5px",
                              }}
                            >
                              ₹
                            </span>
                            <TextField
                              variant="outlined"
                              type="text"
                              label="Enter Amount"
                              value={amount}
                              onChange={handleAmountChange}
                              placeholder="0"
                              inputProps={{ maxLength: 15 }}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "8px",
                                  height: "40px",
                                  minWidth: "120px",
                                },
                                "& .MuiOutlinedInput-input": {
                                  padding: "10px",
                                  textAlign: "left",
                                },
                              }}
                            />

                            <span className="clone-sip-input"></span>
                          </div>
                        </div>
                      </div>
                      {/* Loan Tenure */}
                      <Row>
                        <Col md="12" className="mt-4">
                          <Row className="align-items-center">
                            <Col>
                              <p
                                className="headsubtext"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                              >
                                Select Duration (years)
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
                            min={1}
                            max={30}
                            step={1} // Step of 1 year
                            onChange={handleTenureChange}
                          />
                          <div className="d-flex justify-content-between">
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatTenure(1)}
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatTenure(30)}
                            </span>
                          </div>
                        </Col>
                      </Row>
                      {/* Interest Rate */}
                      <Row>
                        <Col md="12" className="mt-4">
                          <Row className="align-items-center">
                            <Col>
                              <p
                                className="headsubtext"
                                style={{ fontSize: "16px", fontWeight: "600" }}
                              >
                                Expected Rate of Return(%)
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
                            min={8}
                            max={30}
                            step={0.1} // Step of 0.1%
                            onChange={handleInterestRateChange}
                          />
                          <div className="d-flex justify-content-between">
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatInterestRate(8)}
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "400", color: "#131111" }}>
                              {formatInterestRate(30)}
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="7" xl="7" sm="12" md="7">
                      <Row>
                        <Col md="6">
                          <div
                            style={{
                              textAlign: "center",
                              marginTop: "120px",
                              padding: "20px",
                              border: "1px solid #ccc",
                              borderRadius: "20px",
                              backgroundColor: "#f9f9f9", // Optional: Light background
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Soft shadow
                            }}
                          >
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                marginBottom: "10px",
                              }}
                            >
                              The total value of your investment after{" "}
                              <b style={{ color: "#134FEF" }}>{tenure}</b> years will be
                            </p>

                            <span
                              style={{ fontSize: "28px", fontWeight: "bold", display: "block" }}
                            >
                              ₹{futureValue}
                            </span>
                          </div>
                        </Col>

                        <Col md="6">
                          <Doughnut data={data} options={options} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Container>
      <Subscription />
      <Footer />
    </>
  );
};

export default SipCalCulatorComponent;
