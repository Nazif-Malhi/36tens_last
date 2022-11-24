import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import { competencies_data } from "../../assets";

const RatingContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 120px;
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
  }
  .responsive-row {
    @media screen and (max-width: 1303px) {
      flex-direction: column;
      margin-top:5px;
    }
  }
  .center-col {
    @media screen and (max-width: 1303px) {
      display: flex;
      justify-content: center;
      
    }
  }
`;

const Rating = ({ index, rating }) => {
  const [competenciesVal, setCompetenciesVal] = useState([]);

  const addValues = (value, name) => {
    const tempComp = {
      name: name,
      value: value,
    };
    setCompetenciesVal([...competenciesVal, tempComp]);
  };
  const updateValues = (val, name) => {
    setCompetenciesVal(
      competenciesVal.map((comp) => {
        if (comp.name === name) {
          return { ...comp, value: val };
        } else {
          return comp;
        }
      })
    );
  };
  const handleChange = (value, name) => {
    if (competenciesVal.length === 0) {
      addValues(value, name);
    } else {
      competenciesVal.filter((element) => {
        if (element.name === name) {
          return updateValues(value, name);
        } else {
          return addValues(value, name);
        }
      });
    }
  };
  // useEffect(() => {
  //   rating(competenciesVal);
  // }, [competenciesVal]);

  return (
    <RatingContainer>
      {competencies_data[index].competencies.map((val, id) => {
        return (
          <Row key={id} className="responsive-row">
            <Col className="center-col">
              <h6>{val.competency_name}</h6>
            </Col>
            <Col className="center-col">
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    value={1}
                    name={val.competency_name}
                    onChange={(e) => {
                      handleChange(e.target.value, val.competency_name);
                    }}
                  />
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    value={2}
                    name={val.competency_name}
                    onChange={(e) => {
                      handleChange(e.target.value, val.competency_name);
                    }}
                  />
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    value={3}
                    name={val.competency_name}
                    onChange={(e) => {
                      handleChange(e.target.value, val.competency_name);
                    }}
                  />
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Form.Check
                    type="radio"
                    value={4}
                    name={val.competency_name}
                    onChange={(e) => {
                      handleChange(e.target.value, val.competency_name);
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </RatingContainer>
  );
};

export default Rating;
