import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";
import { Row } from "react-bootstrap";

export function CreateSurvey(props) {
  const [surveyName, setSurveyName] = useState("");
  const handleCreation = () => {
    const dumyData = {
      name: surveyName,
    };
    setSurveyName("");
    props.onHide();
    //navigate("/admin/competencies");
    return dumyData;
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Name Your Survey
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <TextField
              id="outlined-name"
              label="Survey Name"
              size="small"
              fullWidth
              value={surveyName}
              onChange={(e) => setSurveyName(e.target.value)}
            />
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            props.createSurveyMethod(handleCreation());
          }}
        >
          Create Survey
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
