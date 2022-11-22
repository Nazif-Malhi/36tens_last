import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineUpload } from "react-icons/ai";
import { Row, Container, Modal, Button } from "react-bootstrap";

// import { useDispatch, useSelector } from "react-redux";
// import { addBulkAdd } from "../../Store/actions/bulk_user_Actions";

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
`;
export function BulkUpload(props) {
  const [csv_file, setCsv_File] = useState(null);
  const inputRef = useRef();

  // const dispatch = useDispatch();
  // const { bulk_user, loading, error } = useSelector(
  //   (state) => state.bulk_users
  // );

  const handleDragOver = (event) => {
    event.preventDefault();
    // console.log(event);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setCsv_File(event.dataTransfer.files[0]);
    // console.log(Array.from(event.dataTransfer.files));
    // console.log(csv_file);
  };
  // useEffect(() => {
  //   // console.log(error);
  //   // console.log(bulk_user);
  // }, [dispatch]);

  const handleRequest = () => {
    // dispatch(addBulkAdd(csv_file));
    // props.onHide();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Upload CSV</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p style={{ color: "#a2abb6" }}>File.csv/File.txt</p>
          {!csv_file ? (
            <Upload onDragOver={handleDragOver} onDrop={handleDrop}>
              <AiOutlineUpload
                style={{ fontSize: "5.7rem", color: "a2abb6" }}
              />

              <h6>Drag & Drop here</h6>
              <input
                type={"file"}
                onChange={(e) => {
                  setCsv_File(e.target.files);
                }}
                hidden
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
            handleRequest();
          }}
        >
          Add Employees
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
