//completed
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { Container } from "./Container";

import { CustomButton, GroupColumns, SingleFeildModal } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  add_Designation,
  delete_Designation,
  designation_clearErrors,
  get_Designation,
  update_Designation,
} from "../../store";

const Designation = () => {
  const dispatch = useDispatch();
  const { designations, loading, designation_error } = useSelector(
    (state) => state.designations
  );

  const [trigger, setTrigger] = useState("");
  const [editValue, setEditValue] = useState("");
  const [id, setId] = useState(0);
  const [show_modal, setShow_Modal] = useState(false);
  let temp = [];

  useEffect(() => {
    if (designation_error) {
      console.log(designation_error);
      dispatch(designation_clearErrors());
    }
    dispatch(get_Designation());
  }, [dispatch]);

  const handleEdit = (name, id) => {
    setEditValue(name);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    dispatch(delete_Designation(e));
  };
  const handleModal = (e) => {
    if (e !== undefined) {
      const designation_payload = {
        title: e.new_value,
      };
      setShow_Modal(false);
      setTrigger("");
      switch (e.trigger) {
        case "isEdit":
          dispatch(update_Designation(designation_payload, id));
          break;
        case "isAdd":
          dispatch(add_Designation(designation_payload));
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
            <h1>Designation</h1>
          </Col>
          <Col className={"responsive-button"}>
            <CustomButton
              type={"normal textnormal margin-button"}
              width="170px"
              height="40px"
              onClick={() => {
                setShow_Modal(true);
                setTrigger("isAdd");
              }}
            >
              <AiOutlinePlus fontSize={"1.2rem"}/> Add Designation
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
          rows={!loading ? designations : temp}
          pending={loading}
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
        data={designations}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Designation;
