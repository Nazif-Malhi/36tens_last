import React, { useEffect, useState } from "react";
import { TextField, MenuItem, FormControl, Select } from "@mui/material";
import { Row, Col, Modal, Container, Button, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  department_clearErrors,
  designation_clearErrors,
  groups_clearErrors,
  get_Departments,
  get_Designation,
  getGroups,
  register,
  updateUserData,
  add_employee,
  user_reg_clearErrors,
  update_employee,
  get_Employees,
} from "../../store";
import { isNumber, is_emailValid } from "../../utils";

function AddEmployee({ onHandleCallBack, ...props }) {
  const dispatch = useDispatch();
  const { groups, group_error } = useSelector((state) => state.groups);
  const { designations, designation_error } = useSelector(
    (state) => state.designations
  );
  const { department, department_error } = useSelector(
    (state) => state.departments
  );
  const { user_reg, user_reg_error, is_reg } = useSelector(
    (state) => state.user_reg
  );
  const {update_emp, update_emp_error, is_updated_emp} = useSelector( (state) => state.update_emp)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [department_input, setDepartment_Input] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email_validation_error, setEmail_validation_error] = useState(false);
  const [spinner_trigger, setSpinner_trigger] = useState(false);


  const [text_error, setText_error] = useState("");

  useEffect(() => {
    if (group_error || designation_error || department_error) {
      console.log(group_error, designation_error, department_error);
      dispatch(designation_clearErrors());
      dispatch(department_clearErrors());
      dispatch(groups_clearErrors());
    }
    dispatch(getGroups());
    dispatch(get_Departments());
    dispatch(get_Designation());
  }, [dispatch]);

  useEffect(() => {
    if (props.trigger === "isEdit") {
      setFirstName(
        props.value_input.first_name === null
          ? ""
          : props.value_input.first_name
      );
      setLastName(
        props.value_input.last_name === null ? "" : props.value_input.last_name
      );
      setDepartment_Input(
        props.value_input.department === null
          ? ""
          : props.value_input.department
      );
      setDesignation(
        props.value_input.designation === null
          ? ""
          : props.value_input.designation
      );
      setGroup(props.value_input.group === null ? "" : props.value_input.group);
      setEmail(props.value_input.email === null ? "" : props.value_input.email);
      setPhone(
        props.value_input.contact_num === null
          ? ""
          : props.value_input.contact_num
      );
    } else {
      emptyFeilds();
    }
    setText_error("");
  }, [props.value_input, props.trigger]);

  const addEmployee = () => {
    if(!spinner_trigger){
      setSpinner_trigger(true)
      setText_error("");
    const update_payoad = {
      first_name: firstName,
      last_name: lastName,
      contact_num: phone,
      email: email,
      designation: designation,
      group: group,
      department: department_input,
      company_name: props.company_name,
      type: "Company",
      role_title: "admin",
      password: "360@password_guest",
      package_title: 1,
    };
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      phone.length === 0 ||
      department_input.length === 0 ||
      email.length === 0 ||
      designation.length === 0 ||
      group.length === 0
    ) {
      setText_error("Please Fill all Feilds");
    } else if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      phone.length > 0 &&
      department_input.length > 0 &&
      email.length > 0 &&
      designation.length > 0 &&
      group.length > 0
    ) {
      if (email_validation_error) {
        setText_error("Email not valid");
      } else {
        switch (props.trigger) {
          case "isAdd":
            dispatch(register(update_payoad));
            break;
          case "isEdit":
            dispatch(update_employee(update_payoad, props.id));
            break;
          default:
            break;
        }
      }
    }
    }
  };
  useEffect(() => {
    if (!is_reg) {
      if (user_reg_error !== undefined ) {
        setText_error(user_reg_error);
        setSpinner_trigger(false)

      }
    } else {
      dispatch(get_Employees(props.company_name));
      setSpinner_trigger(false)
      handleOnClose();
    }
  }, [is_reg]);

  useEffect(() => {
    if(!is_updated_emp){
      setText_error(update_emp_error);
      setSpinner_trigger(false)

    } else{
      dispatch(get_Employees(props.company_name));
      setSpinner_trigger(false)

      handleOnClose();
    }
  }, [is_updated_emp]);

  const handleOnClose = () => {
    emptyFeilds();
    setText_error("");
    props.onHide();
  };

  const emptyFeilds = () => {
    setFirstName("");
    setLastName("");
    setDepartment_Input("");
    setDesignation("");
    setGroup("");
    setEmail("");
    setPhone("");
  };

  const handleEmail_Validation = (email) => {
    setEmail(email);
    if (is_emailValid(email)) {
      setEmail_validation_error(false);
      setText_error("");
    } else {
      setEmail_validation_error(true);
      setText_error("Email not valid");
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header
        closeButton
        onClick={() => {
          handleOnClose();
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          {props.trigger === "isEdit" ? "Update" : "Add New"}
          Employee
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
              <TextField
                id="outlined-name"
                label="Email"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => {
                  handleEmail_Validation(e.target.value);
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
                  {designations.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.title} key={index}>
                        {val.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={8} md={6}>
              <TextField
                type={"text"}
                id="outlined-name"
                label="Phone Number"
                size="small"
                fullWidth
                value={phone}
                onChange={(e) => {
                  setPhone(isNumber(e.target.value));
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
                  {groups.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.title} key={index}>
                        {val.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
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
                  {department.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.title} key={index}>
                        {val.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
          </Row>
          <p
            style={{
              color: "red",
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
            handleOnClose();
          }}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            addEmployee();
          }}
        >
          {spinner_trigger ? <Spinner animation="border" variant="light" /> : props.trigger === "isEdit" ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEmployee;
