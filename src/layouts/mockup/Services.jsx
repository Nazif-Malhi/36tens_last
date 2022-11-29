import React from "react";
import styled from "styled-components";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { ServiceCard } from "../../components";
import { Desktop2 } from "../../assets";

const ServicesContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  .servicecard_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1096px) {
      margin-top: 75%;
      width: 100%;
      align-items: center;
    }
  }

  .scene {
    width: 400px;
    height: auto;
    .scene2 {
      max-width: 400px;
      height: auto;
    }
  }
  @media screen and (max-width: 447px) {
    .scene {
      width: 250px;
      .scene2 {
        max-width: 250px;
      }
    }
  }
`;

const Services = ({ id }) => {
  return (
    <ServicesContainer id={id}>
      <Row style={{ width: "80%" }}>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text">
            <h1>Do more</h1>
            <h1>than</h1>
            <h1>just Surveys.</h1>
            <p>People and Data analytics combined for </p>
            <p>powerful resutls, interactive dashboards </p>
            <p>Intutive analysis with predictions and smart </p>
            <p> recommendations.</p>
            <div className="circleBtnWrapper">
              <BsArrowRightCircleFill
                style={{ color: "#C897E4", fontSize: "4rem" }}
              />
              <div className="text">
                <p>Start Your</p>
                <p>Free Trail</p>
              </div>
            </div>
            <div className="scene">
              <img className="scene2" src={Desktop2} alt="scene2" />
            </div>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="servicecard_wrapper">
            <ServiceCard active={true} heading="Feedbacks Survey" />
            <ServiceCard active={false} heading="Development" />
            <ServiceCard active={false} heading="Insights" />
            <ServiceCard active={false} heading="Work Flows" />
          </div>
        </Col>
      </Row>
    </ServicesContainer>
  );
};

export default Services;
