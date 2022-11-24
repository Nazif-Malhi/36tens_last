import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Checkbox } from "@mui/material";
import { packageSelected } from "../../assets";

const CardContainer = styled.div`
  width: 100%;
`;
const RemoveIconHeader = styled(Accordion.Header)`
  .accordian-button {
    content: none;
  }
`;
const CompetenciesCards = ({ title, question, handleClick, type, index }) => {
  return (
    <CardContainer>
      <Accordion
        onClick={handleClick}
        style={{ margin: "5px 0px" }}
        defaultActiveKey={["0"]}
      >
        <Accordion.Item eventKey={index.toString()}>
          <RemoveIconHeader>
            <Row style={{ width: "100%" }}>
              <Col>
                <h6>{title}</h6>
              </Col>
              {/* <Col md={"auto"}>
               {type === "add" ? (
                <AiOutlinePlus style={{ fontSize: "1.5rem" }} />
              ) : type === "del" ? (
                <MdOutlineDelete style={{ fontSize: "1.5rem" }} />
              ) : null} 
              </Col> */}
            </Row>
          </RemoveIconHeader>
          <Accordion.Body>
            {question?.map((val, index) => {
              return (
                <Row key={index}>
                  <Col style={{ cursor: "pointer" }}>
                    <p>{val.competency_name}</p>
                  </Col>
                  <Col md={"auto"}>
                    <Checkbox
                      defaultChecked
                      color="secondary"
                      disabled={packageSelected === "standard" ? true : false}
                    />
                  </Col>
                </Row>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </CardContainer>
  );
};

export default CompetenciesCards;
