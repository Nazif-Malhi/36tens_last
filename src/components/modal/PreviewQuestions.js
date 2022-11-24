import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import { Labeling, LabelMarker } from "../marking/markingcomponents";
import Modal from "react-bootstrap/Modal";
import { competencies_data } from "../../assets";

const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #6c6a6a;

  .header {
  }
  .border {
    border-bottom: 2px solid #edeff2;
  }
`;

const PreviewQuestions = ({ show, onHide, onProceed }) => {
  let number = 0;
  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={onHide}
      className="customScroll"
    >
      <Modal.Header closeButton>
        <Modal.Title>Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuestionContainer>
          <div className="header">
            <Row>
              <Col md={"auto"} style={{ width: "40px", padding: "0px" }}></Col>
              <Col
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <h5 style={{ marginBottom: "0px" }}>Questions</h5>
              </Col>
              <Col>
                <LabelMarker bold={true} />
              </Col>
            </Row>
          </div>
          <div className="border" style={{ marginTop: "20px" }} />

          <div className="body">
            {competencies_data.map((val, key) => {
              return val.competencies.map((newVal, id) => {
                return newVal.statements.map((quest, index) => {
                  return (
                    <Row
                      style={{ height: "80px", alignItems: "center" }}
                      key={number}
                    >
                      {/* <Col
                        md={"auto"}
                        style={{ width: "40px", padding: "0px" }}
                      >
                        <h5 style={{ marginLeft: "5px" }}>{(number += 1)} .</h5>
                      </Col> */}
                      <Col
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <h6 style={{ marginBottom: "0px" }}>
                          {(number += 1) + " . "}
                        </h6>
                        <h6 style={{ marginBottom: "0px" }}>{quest}</h6>
                      </Col>
                      <Col>
                        <Labeling />
                      </Col>
                      <div className="border" />
                    </Row>
                  );
                });
              });
            })}
          </div>
        </QuestionContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={onHide}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={onProceed}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewQuestions;
