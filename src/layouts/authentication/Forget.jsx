import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";

import { StyledContainer } from "./Container";
import { Logo } from "../../assets";
import { CustomButton } from "../../components";

const ForgetWrapper = styled.div`
  width: 35%;
  background-color: white;
  border-radius: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .header {
    margin-top: 40px;
    h1 {
      font-weight: 600px;
      font-size: 30px;
    }
  }
  .center-row {
    width: 80%;
    margin: 10px 0px;
  }

  @media screen and (max-width: 1075px) {
    width: 60%;
  }
  @media screen and (max-width: 570px) {
    width: 80%;
  }
  @media screen and (max-width: 380px) {
    width: 95%;
  }
`;

const Forget = () => {
  return (
    <StyledContainer>
      <ForgetWrapper>
        <div className="header">
          <h1>FORGET PASSWORD</h1>
        </div>

        <Row className="center-row">
          <TextField
            label="Email"
            placeholder="Enter Your Email"
            size="small"
          />
        </Row>
        <Row className="center-row">
          <CustomButton
            type={"normal textnormal"}
            width={"130px"}
            height={"40px"}
          >
            Continue
          </CustomButton>
        </Row>
        <Row className="center-row">
          <p>
            If you havn't Register yet ?{" "}
            <a href="/36tens/authentication/signup">Register Now</a>
          </p>
        </Row>
        <Row className="center-row">
          <Col style={{ textAlign: "left", marginLeft: "20px" }}>
            <img src={Logo} alt="logo" />
          </Col>
        </Row>
      </ForgetWrapper>
    </StyledContainer>
  );
};

export default Forget;
