import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import CustomButton from "../../components/buttons/Custombutton";
import { AiOutlinePlus } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { CustomButton, GroupColumns, SingleFeildModal } from "../../components";

// import GroupColumns from "../../components/Table/GroupsColumns";
// import SingleFeildModal from "../../components/modals/Dynamic_single_feild_Modal";
// import {
//   clearErrors,
//   deleteCompetency_type,
//   getCompetency_type,
//   newCompetency_type,
//   updateCompetency_type,
// } from "../../Store/actions/comptenecy_type_Actions";
import { Container } from "./Container";

const Competency_Type = () => {
  // const dispatch = useDispatch();
  const [trigger, setTrigger] = useState("");
  const [editValue, setEditValue] = useState("");
  const [id, setId] = useState(0);
  const [show_modal, setShow_Modal] = useState(false);

  let temp = [];

  // const { competency, loading, error } = useSelector(
  //   (state) => state.competency_types
  // );

  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getCompetency_type());
  // }, [dispatch]);

  const handleEdit = (name, id) => {
    setEditValue(name);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    // dispatch(deleteCompetency_type(e));
  };
  const handleModal = (e) => {
    const competency_type_payload = {
      title: e.new_value,
    };
    console.log(competency_type_payload);
    setShow_Modal(false);
    setTrigger("");
    switch (e.trigger) {
      case "isEdit":
        // dispatch(updateCompetency_type(competency_type_payload, id));
        break;
      case "isAdd":
        // dispatch(newCompetency_type(competency_type_payload));
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
            <h1>Competency Types</h1>
          </Col>
          <Col className={"responsive-button"}>
            <CustomButton
              type={"normal textnormal margin-button"}
              width="220px"
              height="40px"
              onClick={() => {
                setShow_Modal(true);
                setTrigger("isAdd");
              }}
            >
              <AiOutlinePlus /> Add Competency Type
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
          // rows={!loading ? competency : temp}
          // pending={loading}
        />
      </Row>
      <SingleFeildModal
        show={show_modal}
        onHide={() => {
          setShow_Modal(false);
          setTrigger("");
        }}
        txt={"Competency Type"}
        feild_name={"Competency Type"}
        trigger={trigger}
        value_input={editValue}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Competency_Type;
