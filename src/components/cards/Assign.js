import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { newEmployeeDepartment } from "../../assets/Data/DropDownData";

const AssignContainer = styled.div`
  width: 100%;
  height: 332px;
  margin-top: 20px;
  background: white;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .assign_wrapper {
    height: 80%;
    width: 80%;
    h3 {
      color: #979797;
    }
  }
`;

const Assign = () => {
  const [department, setDepartment] = useState("");

  const handleAssign = () => {};

  return (
    <AssignContainer>
      <div className="assign_wrapper">
        <Container>
          <Row style={{ marginBottom: "20px" }}>
            <h3>Assign Surveys</h3>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <FormControl
              sx={{ width: "100%" }}
              size="small"
              style={{ background: "white" }}
            >
              <Select
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Relationships</em>
                </MenuItem>
                {/* {newEmployeeDepartment.map((val, index) => {
                  return (
                    <MenuItem id={index} value={val.val}>
                      {val.des}
                    </MenuItem>
                  );
                })} */}
              </Select>
            </FormControl>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <FormControl
              sx={{ width: "100%" }}
              size="small"
              style={{ background: "white" }}
            >
              <Select
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Select Employee</em>
                </MenuItem>
                {/* {newEmployeeDepartment.map((val, index) => {
                  return (
                    <MenuItem id={index} value={val.val}>
                      {val.des}
                    </MenuItem>
                  );
                })} */}
              </Select>
            </FormControl>
          </Row>
        </Container>
      </div>
    </AssignContainer>
  );
};

export default Assign;
