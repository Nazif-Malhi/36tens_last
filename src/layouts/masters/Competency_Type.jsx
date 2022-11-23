import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "./Container";
import { CustomButton, GroupColumns, SingleFeildModal } from "../../components";
import { AiOutlinePlus } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  add_competencyType,
  comp_type_clearErrors,
  delete_competencyType,
  get_competencyType,
  update_competencyType,
} from "../../store";

const Competency_Type = () => {
  const dispatch = useDispatch();
  const { competency_type, loading, comp_type_error } = useSelector(
    (state) => state.competency_types
  );

  const [trigger, setTrigger] = useState("");
  const [editValue, setEditValue] = useState("");
  const [id, setId] = useState(0);
  const [show_modal, setShow_Modal] = useState(false);
  let temp = [];

  useEffect(() => {
    if (comp_type_error) {
      dispatch(comp_type_clearErrors());
    }
    dispatch(get_competencyType());
  }, [dispatch]);

  const handleEdit = (name, id) => {
    setEditValue(name);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    dispatch(delete_competencyType(e));
  };
  const handleModal = (e) => {
    if (e !== undefined) {
      const competency_type_payload = {
        title: e.new_value,
      };
      setShow_Modal(false);
      setTrigger("");
      switch (e.trigger) {
        case "isEdit":
          dispatch(update_competencyType(competency_type_payload, id));
          break;
        case "isAdd":
          dispatch(add_competencyType(competency_type_payload));
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
          rows={!loading ? competency_type : temp}
          pending={loading}
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
        data={competency_type}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Competency_Type;
