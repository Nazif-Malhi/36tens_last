import React, { useEffect, useState } from "react";
import { TextField, MenuItem, FormControl, Select } from "@mui/material";
import { Row, Col, Modal, Container, Button } from "react-bootstrap";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import { useDispatch, useSelector } from "react-redux";
// import { getGroups } from "../../Store/actions/groups_Actions";
// import { getDesignation } from "../../Store/actions/designation_Actions";
// import { getDepartments } from "../../Store/actions/department_Actions";
// import { register } from "../../Store/actions/register_user_Actions";

function AddEmployee(props) {
  // const dispatch = useDispatch();
  // const { groups } = useSelector((state) => state.groups);
  // const { designations } = useSelector((state) => state.designations);
  // const { department } = useSelector((state) => state.departments);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [department_input, setDepartment_Input] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState("");

  // useEffect(() => {
  //   dispatch(getGroups());
  //   dispatch(getDesignation());
  //   dispatch(getDepartments());
  // }, [dispatch]);

  const addEmployee = () => {
    const signup_payoad = {
      first_name: firstName,
      last_name: lastName,
      contact_num: phone,
      email: email,
      designation: designation,
      group: group,
      department: department_input,
      company_name: props.company_name,
      type: "Company",
      role_title: "Viewer",
      password: "360@password_guest",
    };
    // dispatch(register(signup_payoad));
    // props.onHide();
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={8} md={6}>
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
            <Col xs={8} md={6}>
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
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={8} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Joining"
                  value={date}
                  onChange={(e) => {
                    setDate(e);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      style={{ width: "100%" }}
                      disabled
                    />
                  )}
                />
              </LocalizationProvider>
            </Col>
            <Col xs={8} md={6}>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={department_input}
                  onChange={(e) => {
                    setDepartment_Input(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Department</em>
                  </MenuItem>
                  {/* {department.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.title} key={index}>
                        {val.title}
                      </MenuItem>
                    );
                  })} */}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={8} md={6}>
              <TextField
                id="outlined-name"
                label="Email"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
            <Col xs={8} md={6}>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={designation}
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Designation</em>
                  </MenuItem>
                  {/* {designations.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.title} key={index}>
                        {val.title}
                      </MenuItem>
                    );
                  })} */}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={8} md={6}>
              <TextField
                id="outlined-name"
                label="Phone Number"
                size="small"
                fullWidth
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Col>
            <Col xs={8} md={6}>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={group}
                  onChange={(e) => {
                    setGroup(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Group</em>
                  </MenuItem>
                  {/* {groups.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.title} key={index}>
                        {val.title}
                      </MenuItem>
                    );
                  })} */}
                </Select>
              </FormControl>
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
            addEmployee();
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmployee;
