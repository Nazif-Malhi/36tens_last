import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineUpload } from "react-icons/ai";
import { Row, Container, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add_BulkAdd } from "../../store";

const Upload = styled.div`
  border-radius: 7px;
  width: 100%;
  height: 220px;
  border: 2px dashed #a2abb6;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    cursor: pointer;
    border: 2px dashed #3b4f66;

    color: #3b4f66;
    h6 {
      color: #3b4f66;
    }
  }
  p {
    color: #a2abb6;
  }
  h6 {
    color: #a2abb6;
  }
  .buttonadd{
    width:40%
  }
`;
export function BulkUpload(props) {
  const [csv_file, setCsv_File] = useState(null);
  const [text_error, setText_error] = useState("");

  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const { import_fail } = useSelector((state) => state.bulk_users);

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setCsv_File(event.dataTransfer.files[0]);
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleRequest = () => {
    if (csv_file === null) {
      setText_error("Please upload file");
    } else {
      dispatch(add_BulkAdd(csv_file));
      if (import_fail) {
        setText_error(
          "Not Imported File format wrong or server down or data may be already present"
        );
      } else if (!import_fail) {
        setText_error("");
        handleClose();
      }
    }
  };

  const handleClose = () => {
    setCsv_File(null);
    setText_error("");

    props.onHide();
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton onClick={() => handleClose()}>
        <Modal.Title id="contained-modal-title-vcenter">Upload CSV</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p style={{ color: "#a2abb6" }}>File.csv/File.txt</p>
          {!csv_file ? (
            <Upload
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <AiOutlineUpload
                style={{ fontSize: "5.7rem", color: "a2abb6" }}
              />

              <h6>Drag & Drop here</h6>
              <input
                type={"file"}
                onChange={(e) => {
                  setCsv_File(e.target.files[0]);
                }}
                hidden
                multiple
                ref={inputRef}
              />
            </Upload>
          ) : (
            <Upload>
              <h6>{csv_file.name}</h6>
            </Upload>
          )}
          <Row style={{ textAlign: "right" }}>
            <p style={{ color: "#a2abb6" }}>
              Can't Import ? <a href="/needhelp">Need Help</a>
            </p>
          </Row>
          <Row style={{ textAlign: "center" }}>
             <div className="buttonadd">
             <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={onButtonClick}
        >
        Click to upload
        </Button>        
             </div>
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
          onClick={() => handleClose()}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            handleRequest();
          }}
        >
          Add Employees
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
