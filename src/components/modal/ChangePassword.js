import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container, Modal } from "react-bootstrap";
import { TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { changePassword, change_password_clearErrors } from "../../store";

function ChangePassword(props) {
  const dispatch = useDispatch();
  const { error, change_pass, status, pass_status } = useSelector(
    (state) => state.change_pass
  );

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [text_error, setText_error] = useState("");

  const handleChangePassword = () => {
    if (ready_to_change()) {
      const change_password_payload = {
        old_password: oldPassword,
        new_password: newPassword,
      };
      console.log(change_password_payload);
      dispatch(changePassword(change_password_payload));
    }
  };

  const ready_to_change = () => {
    if (oldPassword.length === 0 || newPassword.length === 0) {
      setText_error("Fill all Feilds");
      return false;
    } else if (oldPassword.length > 0 && newPassword.length > 0) {
      setText_error("");
      return true;
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(change_password_clearErrors());
    }
    if (pass_status) {
      setSuccess(status);
    }
  }, [dispatch, change_pass, status, pass_status, error]);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <TextField
                id="outlined-name"
                label="Old Password"
                size="small"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                fullWidth
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <TextField
                id="outlined-name"
                label="New Password"
                size="small"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                fullWidth
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
          <Row
            style={{
              width: "100%",
              color: "green",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h6>{success}</h6>
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
            handleChangePassword();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangePassword;
