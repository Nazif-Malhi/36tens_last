import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const Box = styled.div`
  width: 12%;
  height: 100%;
  border: 1.4px solid rgba(108, 106, 106, 0.42);
  border-radius: 8px;
  border-radius: 7px;
  color: #6c6a6a;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    margin: 5px;
  }
`;
const Text = styled.div`
  width: 28%;
  height: 100%;
  color: #6c6a6a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  p {
    margin: 5px;
  }
`;
export const Labeling = () => {
  return (
    <Row
      style={{
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <h5>0</h5>
      </Box>
      <Box>
        <h5>1</h5>
      </Box>
      <Box>
        <h5>2</h5>
      </Box>
      <Box>
        <h5>3</h5>
      </Box>
      <Box>
        <h5>4</h5>
      </Box>
    </Row>
  );
};
export const LabelMarker = ({ bold }) => {
  const style = {
    fontSize: "1.1rem",
  };
  return (
    <Row
      style={{
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Text>
        <p style={bold ? style : null}>Least Likely</p>
      </Text>
      <Text>
        <p style={bold ? style : null}>Neutral</p>
      </Text>
      <Text>
        <p style={bold ? style : null}>Most Likely</p>
      </Text>
    </Row>
  );
};
