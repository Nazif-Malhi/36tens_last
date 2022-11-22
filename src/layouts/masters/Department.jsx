import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import CustomButton from "../../components/buttons/Custombutton";
import { AiOutlinePlus } from "react-icons/ai";
import { CustomButton, GroupColumns, SingleFeildModal } from "../../components";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   clearErrors,
//   deleteDepartment,
//   getDepartments,
//   newDepartment,
//   updateDepartment,
// } from "../../Store/actions/department_Actions";
// import GroupColumns from "../../components/Table/GroupsColumns";
// import SingleFeildModal from "../../components/modals/Dynamic_single_feild_Modal";

import { Container } from "./Container";

const Department = () => {
  // const dispatch = useDispatch();
  const [trigger, setTrigger] = useState("");
  const [editValue, setEditValue] = useState("");
  const [id, setId] = useState(0);
  const [show_modal, setShow_Modal] = useState(false);

  let temp = [];

  // const { department, loading, error } = useSelector(
  //   (state) => state.departments
  // );

  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getDepartments());
  // }, [dispatch]);

  const handleEdit = (name, id) => {
    setEditValue(name);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    // dispatch(deleteDepartment(e));
  };
  const handleModal = (e) => {
    const department_payload = {
      title: e.new_value,
    };
    console.log(department_payload);
    setShow_Modal(false);
    setTrigger("");
    switch (e.trigger) {
      case "isEdit":
        // dispatch(updateDepartment(department_payload, id));
        break;
      case "isAdd":
        // dispatch(newDepartment(department_payload));
        break;
      default:
        break;
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
          // rows={!loading ? department : temp}
          // pending={loading}
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
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Department;
