import { Box, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
// import { competencies_data } from "../../assets/Data/OrdinalCompetencies";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import CustomButton from "../../components/buttons/Custombutton";
import CompetenciesCards from "../../components/cards/CompetenciesCards";
import BuisnessImpactScale from "../../components/cards/BuisnessImpactScale";
// import PreviewQuestions from "../../components/modals/PreviewQuestions";
import Assign from "../../components/cards/Assign";
import Done from "../../components/cards/Done";
import { competencies_data } from "../../assets/data";
import { PreviewQuestions } from "../../components/modal";

const CompetenciesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f7f8fa;
  .header {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    padding: 0px;
    @media screen and (max-width: 925px) {
      justify-content: center;
      flex-direction: column;
    }
    h2 {
      color: #979797;
    }
    .title {
      display: flex;
      align-items: center;
      max-width: 400px;
      justify-content: center;

      @media screen and (max-width: 925px) {
        justify-content: center;
        max-width: 100%;
      }
    }
    .stepper {
      display: flex;
      justify-content: start;
      align-items: start;
    }
  }
  .body {
    width: 100%;
    height: auto;
    @media screen and (max-width: 925px) {
      justify-content: center;
      flex-direction: column;
    }
    .slider-questions {
      /* width */
      ::-webkit-scrollbar {
        width: 3px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #a600a0;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #34485f;
      }
      @media screen and (max-width: 925px) {
        max-width: 100%;
      }
      max-width: 400px;
      overflow-y: scroll;
      height: 360px;
    }
    .cards {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
const MasterButtons = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;
const steps = ["Impact Scale", "Preview", "Assign", "Done"];

const Competencies = () => {
  const [index0fCompetencyType, setIndexOfCompetencyType] = useState(0);
  const [indexOfCard, setIndexOfCard] = useState(0);
  const [isShowPreview, setShowPreview] = useState(false);

  const handleNext = () => {
    if (index0fCompetencyType < competencies_data.length - 1) {
      setIndexOfCompetencyType(index0fCompetencyType + 1);
      // console.log(index0fCompetencyType);
    } else if (index0fCompetencyType === competencies_data.length - 1) {
      if (indexOfCard === 0) {
        setShowPreview(true);
        setIndexOfCard(indexOfCard + 1);
        console.log(indexOfCard);
      } else if (indexOfCard === 1) {
        setShowPreview(false);
        setIndexOfCard(indexOfCard + 1);
      } else if (indexOfCard === 2) {
        setIndexOfCard(indexOfCard + 1);
      }
      console.log(indexOfCard);
    }
  };
  const handleBack = () => {
    // if (index0fCompetencyType > 0) {
    //   setIndexOfCompetencyType(index0fCompetencyType - 1);
    // } else

    if (indexOfCard > 0) {
      if (indexOfCard === 3) {
        setIndexOfCard(indexOfCard - 1);
        console.log(indexOfCard);
      } else if (indexOfCard === 2) {
        setIndexOfCard(indexOfCard - 1);
        setShowPreview(true);
      } else if (indexOfCard === 1) {
        setShowPreview(false);
        setIndexOfCard(indexOfCard - 1);
      }
    } else if (indexOfCard === 0) {
      if (index0fCompetencyType > 0) {
        setIndexOfCompetencyType(index0fCompetencyType - 1);
      }
    }
  };

  const handleScale = (list) => {
    console.log(list);
  };

  return (
    <CompetenciesContainer>
      <Row className="header">
        <Col className="title">
          <h2>Competency Types</h2>
        </Col>
        <Col className="stepper">
          <Box sx={{ width: "100%", marginTop: "30px" }}>
            <Stepper activeStep={indexOfCard} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Col>
      </Row>
      <Row className="body">
        <Col className="slider-questions">
          {competencies_data.map((value, index) => {
            return (
              <CompetenciesCards
                key={index}
                index={index}
                title={value.competency_type}
                question={value.competencies}
              />
            );
          })}
        </Col>
        <Col className="cards">
          {indexOfCard === 0 ? (
            <BuisnessImpactScale
              index={index0fCompetencyType}
              handleScale={handleScale}
            />
          ) : indexOfCard === 2 ? (
            <Assign />
          ) : indexOfCard === 3 ? (
            <Done />
          ) : null}
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <MasterButtons>
              <CustomButton
                type={`normal textnormal  ${
                  index0fCompetencyType > 0 ? null : "disabled"
                }`}
                width="160px"
                height="40px"
                onClick={() => {
                  handleBack();
                }}
              >
                <BiChevronLeft style={{ fontSize: "1.5rem" }} /> Previous Step
              </CustomButton>
              <CustomButton
                type={`normal textnormal  ${
                  indexOfCard < 3 ? null : "disabled"
                }`}
                width="140px"
                height="40px"
                onClick={() => {
                  handleNext();
                }}
              >
                Next Step <BiChevronRight style={{ fontSize: "1.5rem" }} />
              </CustomButton>
            </MasterButtons>
          </Row>
        </Col>
      </Row>
      <PreviewQuestions
        show={isShowPreview}
        onHide={() => handleBack()}
        onProceed={() => handleNext()}
      />
    </CompetenciesContainer>
  );
};

export default Competencies;
