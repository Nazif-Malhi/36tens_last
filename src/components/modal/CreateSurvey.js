import React, { useState } from "react";
import {Button, Container, Modal, Row, Col} from "react-bootstrap";
import { TextField } from "@mui/material";


import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";



export function CreateSurvey(props) {
  const [surveyName, setSurveyName] = useState("");
  const [end_date, setEnd_Date]= useState("");
  const handleCreation = () => {
    const dumyData = {
      name: surveyName,
    };
    setSurveyName("");
    props.onHide();
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
            <Col>
            <TextField
              id="outlined-name"
              label="Survey Name"
              size="small"
              fullWidth
              value={surveyName}
              onChange={(e) => setSurveyName(e.target.value)}
            />
            </Col>
            <Col>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Survey End Date"
                  value={end_date}
                  onChange={(e) => {
                    setEnd_Date(e);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      style={{ width: "100%" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Col>
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
