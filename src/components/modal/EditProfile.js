import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Row, Col, Button, Container, Modal, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { isNumber } from "../../utils";
import { update_user, update_user_clearErrors } from "../../store";

function EditProfile(props) {
  const dispatch = useDispatch();
  const {is_updated_user, update_user_error} = useSelector((state) => state.update_user);


  const [firstName, setFirstName] = useState(props.first_name);
  const [lastName, setLastName] = useState(props.last_name);
  const [contact, setContact] = useState(props.contact);
  const [text_error, setText_error] = useState("");

  const [text_error_trigger, setTextErrorTrigger] = useState(false);
  const [spinner_trigger, setSpinner_trigger] = useState(false);


  useEffect(() => {
    if(!is_updated_user){
      if(update_user_error){
        update_user_error.feild === "email" ? 
      setText_error(update_user_error.error)
      : setText_error(update_user_error.feild +" : "+update_user_error.error)
      }
      
    }
    else if(is_updated_user){
      setText_error("");
      dispatch(update_user_clearErrors());
      setSpinner_trigger(false);
      onClose();
    }
  }, [is_updated_user]);

  const handleSave = () => {
    if (ready_to_change()) {
      const edit_profile = {
        first_name: firstName,
        last_name: lastName,
        contact_num: contact,
      };
      if(!spinner_trigger){
        
        dispatch(update_user_clearErrors());
        setSpinner_trigger(true);
        dispatch(update_user(edit_profile, props.id));
        setTextErrorTrigger(true);
        }
    }
  };

  const ready_to_change = () => {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      contact.length === 0
    ) {
      setText_error("Fill all Feilds");
      return false;
    } else if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      contact.length > 0
    ) {
      setText_error("");
      return true;
    }
  };
  const onClose = () => {
    setFirstName(props.first_name);
    setLastName(props.last_name);
    setContact(props.contact);
    setTextErrorTrigger(false);
    setText_error("");
    props.onHide();
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <TextField
                id="outlined-name"
                label="First Name"
                size="small"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                fullWidth
              />
            </Col>
            <Col>
              <TextField
                id="outlined-name"
                label="Last Name"
                size="small"
                fullWidth
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Col>
            <Col>
              <TextField
                id="outlined-name"
                label="Contact Number"
                size="small"
                fullWidth
                value={contact}
                onChange={(e) => {
                  setContact(isNumber(e.target.value));
                }}
              />
            </Col>
          </Row>
          <p
            style={{
              color: text_error.length === 0 ? "white" : "red",
              textAlign: "center",
            }}
          >
            {text_error}
          </p>
          {text_error_trigger && (
            <Row
              style={{
                width: "100%",
                 color: is_updated_user ? "green" : "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h6>{is_updated_user ? "Updated" : "Not Updated"}</h6>
            </Row>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            handleSave();
          }}
        >
                                          {spinner_trigger ? <Spinner animation="border" variant="light" /> : "Save"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfile;
