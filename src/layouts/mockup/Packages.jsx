import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { initial, mid, Path1, popular } from "../../assets";
import { CustomButton, PricingCard } from "../../components";

const PricingContainer = styled.div`
  display: flex;
  height: 180vh;
  width: 100%;
  justify-content: center;
  background-image: url(${Path1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    .upperText {
      margin-top: 60px;
      text-align: center;
      width: 90%;
      h1 {
        font-weight: 700px;
        font-size: 280%;
        color: #232340;
      }
      p {
        color: #818181;
      }
      .margintop {
        margin-top: 40px;
      }
    }
    .pricing {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;

      h1 {
        font-size: 400%;
      }
      .center-col {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 1043px) {
    height: 270vh;
  }
  @media screen and (max-width: 687px) {
    height: 350vh;
  }
`;

const Packages = ({ id }) => {
  return (
    <PricingContainer id={id}>
      <div className="body">
        <div className="upperText">
          <h1>Evaluate Behaviours For Performance &</h1>
          <h1>Buisness Growth Today!</h1>
          <p className="margintop">
            We empowers and enables employees to get and provide structured
          </p>
          <p>
            feedback for leadership and competency assessments, coupled with
          </p>
          <p>prioritized development and action plans.</p>
          <CustomButton
            className="normal margin-top textnormal"
            width={"250px"}
            height={"50px"}
          >
            Request Online Demo <BsArrowRight fontSize={"1.2rem"} />
          </CustomButton>
        </div>
        <div className="pricing">
          <h1>Pricing</h1>
          <Row style={{ margin: "0px", marginTop: "120px" }}>
            <Col className="center-col">
              <PricingCard list={initial} />
            </Col>
            <Col className="center-col">
              <PricingCard list={mid} />
            </Col>
            <Col className="center-col">
              <PricingCard list={popular} popular={true} />
            </Col>
          </Row>
        </div>
      </div>
    </PricingContainer>
  );
};

export default Packages;
