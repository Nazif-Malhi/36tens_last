//completed
import React, { useState, useEffect } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import { is_filter_by_name_in_title } from "../../utils";

function SingleFeildModal({ onHandleCallBack, ...props }) {
  const [value, setValue] = useState("");
  const [text_error, setText_error] = useState("");

  useEffect(() => {
    setText_error("")
    if (props.trigger === "isEdit") {
      setValue(props.value_input);
    } else {
      setValue("");
    }
  }, [props.value_input, props.trigger]);

  const handleModal = () => {
    if (value.length === 0) {
      setText_error("Please Fill all feilds");
    } else if (value.length > 0) {
      if (is_filter_by_name_in_title(props.data, value)) {
        setText_error("Already Exist");
      } else {
        setText_error("");
        const data = {
          new_value: value,
          trigger: props.trigger,
        };
        return data;
      }
    }
  };


  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.trigger === "isEdit" ? "Update" : "Add New"} {props.txt}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <TextField
              id="outlined-name"
              label={`${props.feild_name}`}
              size="small"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              fullWidth
            />
          </Row>
          <p
            style={{
              color: text_error.length === 0 ? "white" : "red",
              textAlign: "center",
            }}
          >
            {text_error}
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={() => {
            props.onHide();
          }}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            onHandleCallBack(handleModal());
          }}
        >
          {props.trigger === "isEdit" ? "Update" : "Add"} {props.txt}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SingleFeildModal;
