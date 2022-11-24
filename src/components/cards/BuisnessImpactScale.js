import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { competencies_data } from "../../assets";
import Rating from "../competenciesrating/Rating";

const BuisnessImpactScaleContainer = styled.div`
  width: 95%;
  height: 400px;
  background: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h3 {
    color: #979797;
    margin-top: 10px;
  }
  p {
    color: #979797;
    marign: 0;
    padding: 0;
  }
  .responsive-row {
    @media screen and (max-width: 1303px) {
      flex-direction: column;
    }
  }
  .center-col {
    @media screen and (max-width: 1303px) {
      display: flex;
      justify-content: center;
    }
  }
`;

function valuetext(value) {
  return `${value}`;
}

const BuisnessImpactScale = ({ index, handleScale }) => {
  const [sliderScore, setSliderScore] = useState(50);
  const handleRating = (list) => {
    console.log(list);
  };
  const bindingData = (e) => {
    console.log(e);
  };
  return (
    <BuisnessImpactScaleContainer>
      <Row>
        <h3>{competencies_data[index].competency_type}</h3>
      </Row>
      <Row style={{ justifyContent: "center", width: "100%" }}>
        <Row style={{ width: "80%", marginTop: "10px" }}>
          <Col style={{ textAlign: "left", padding: "0px" }}>
            <p>Operational</p>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <p>Financial</p>
          </Col>
          <Col style={{ textAlign: "right", padding: "0px" }}>
            <p>Strategic</p>
          </Col>
        </Row>
        <Row style={{ width: "70%", marginTop: "10px" }}>
          <Slider
            aria-label="Custom marks"
            getAriaValueText={valuetext}
            step={sliderScore}
            size={"small"}
            style={{ padding: "0px 0px" }}
            onChange={(e) => {
              setSliderScore(e.target.value);
            }}
          />
        </Row>
        <Row style={{ marginTop: "20px", width: "90%", height: "200px" }}>
          <Row className="responsive-row">
            <Col className="center-col">
              <h4>Competencies</h4>
            </Col>
            <Col className="center-col">
              <Row>
                <Col>
                  <p>Basic</p>
                </Col>
                <Col>
                  <p>Intermediate</p>
                </Col>
                <Col>
                  <p>Advance</p>
                </Col>
                <Col>
                  <p>Expert</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Rating index={index} rating={handleRating} />
          </Row>
        </Row>
      </Row>
    </BuisnessImpactScaleContainer>
  );
};

export default BuisnessImpactScale;
