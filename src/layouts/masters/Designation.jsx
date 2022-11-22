import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import CustomButton from "../../components/buttons/Custombutton";
import { AiOutlinePlus } from "react-icons/ai";
import { CustomButton, GroupColumns, SingleFeildModal } from "../../components";
// import GroupColumns from "../../components/Table/GroupsColumns";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   clearErrors,
//   deleteDesignation,
//   getDesignation,
//   newDesignation,
//   updateDesignation,
// } from "../../Store/actions/designation_Actions";
// import SingleFeildModal from "../../components/modals/Dynamic_single_feild_Modal";

import { Container } from "./Container";

const Designation = () => {
  // const dispatch = useDispatch();
  const [trigger, setTrigger] = useState("");
  const [editValue, setEditValue] = useState("");
  const [id, setId] = useState(0);
  const [show_modal, setShow_Modal] = useState(false);
  let temp = [];

  // const { designations, loading, error } = useSelector(
  //   (state) => state.designations
  // );

  // useEffect(() => {
  //   console.log(error);
  //   // if (error) {
  //   //   dispatch(clearErrors());
  //   // }
  //   dispatch(getDesignation());
  // }, [dispatch]);

  const handleEdit = (name, id) => {
    setEditValue(name);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    // dispatch(deleteDesignation(e));
  };
  const handleModal = (e) => {
    const designation_payload = {
      title: e.new_value,
    };
    console.log(designation_payload);
    setShow_Modal(false);
    setTrigger("");
    switch (e.trigger) {
      case "isEdit":
        // dispatch(updateDesignation(designation_payload, id));
        break;
      case "isAdd":
        // dispatch(newDesignation(designation_payload));
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
            <h1>Designation</h1>
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
              <AiOutlinePlus /> Add Designation
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
          // rows={!loading ? designations : temp}
          // pending={loading}
        />
      </Row>
      <SingleFeildModal
        show={show_modal}
        onHide={() => {
          setShow_Modal(false);
          setTrigger("");
        }}
        txt={"Designation"}
        feild_name={"Designation Name"}
        trigger={trigger}
        value_input={editValue}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Designation;
