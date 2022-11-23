//complete
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

import { Container } from "./Container";

import { CustomButton, GroupColumns, SingleFeildModal } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  add_Department,
  delete_Department,
  department_clearErrors,
  get_Departments,
  update_Department,
} from "../../store";

const Department = () => {
  const dispatch = useDispatch();
  const { department, loading, department_error } = useSelector(
    (state) => state.departments
  );

  const [trigger, setTrigger] = useState("");
  const [editValue, setEditValue] = useState("");
  const [id, setId] = useState(0);
  const [show_modal, setShow_Modal] = useState(false);

  let temp = [];

  useEffect(() => {
    if (department_error) {
      console.log(department_error);
      dispatch(department_clearErrors());
    }
    dispatch(get_Departments());
  }, [dispatch]);

  const handleEdit = (name, id) => {
    setEditValue(name);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    dispatch(delete_Department(e));
  };
  const handleModal = (e) => {
    if (e !== undefined) {
      const department_payload = {
        title: e.new_value,
      };
      setShow_Modal(false);
      setTrigger("");
      switch (e.trigger) {
        case "isEdit":
          dispatch(update_Department(department_payload, id));
          break;
        case "isAdd":
          dispatch(add_Department(department_payload));
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Row className="header">
        <Row className="common-row">
          <Col className="title">
            <h1>Department</h1>
          </Col>
          <Col className={"responsive-button"}>
            <CustomButton
              type={"normal textnormal margin-button"}
              width="180px"
              height="40px"
              onClick={() => {
                setShow_Modal(true);
                setTrigger("isAdd");
              }}
            >
              <AiOutlinePlus /> Add Department
            </CustomButton>
          </Col>
        </Row>
      </Row>
      <Row className="body">
        <GroupColumns
          handleDelete={(e) => {
            handleDelete(e);
          }}
          handleEdit={(name, id) => {
            handleEdit(name, id);
          }}
          rows={!loading ? department : temp}
          pending={loading}
        />
      </Row>
      <SingleFeildModal
        show={show_modal}
        onHide={() => {
          setShow_Modal(false);
          setTrigger("");
        }}
        txt={"Department"}
        feild_name={"Department Name"}
        trigger={trigger}
        value_input={editValue}
        data={department}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Department;
