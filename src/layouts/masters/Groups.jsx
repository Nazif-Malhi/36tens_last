//completed
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { CustomButton, GroupColumns, SingleFeildModal } from "../../components";
import { Container } from "./Container";

import { useDispatch, useSelector } from "react-redux";
import {
  getGroups,
  addNewGroup,
  updateGroup,
  deleteGroup,
  groups_clearErrors,
} from "../../store";

const Groups = () => {
  const dispatch = useDispatch();

  const { groups, loading, group_error } = useSelector((state) => state.groups);


  const [trigger, setTrigger] = useState("");
  const [editValue, setEditValue] = useState("");
  const [id, setId] = useState(0);
  let temp = [];

  const [show_modal, setShow_Modal] = useState(false);


  useEffect(() => {
    dispatch(getGroups());
    if (group_error) {
      console.log(group_error);
      dispatch(groups_clearErrors());
    }
  }, [dispatch]);

  const handleEdit = (name, id) => {
    setEditValue(name);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    dispatch(deleteGroup(e));
  };

  const handleModal = (e) => {
    if (e !== undefined) {
      const group_payload = {
        title: e.new_value,
      };
      setShow_Modal(false);
      setTrigger("");
      switch (e.trigger) {
        case "isEdit":
          dispatch(updateGroup(group_payload, id));
          break;
        case "isAdd":
          dispatch(addNewGroup(group_payload));
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
            <h1>Groups</h1>
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
              <AiOutlinePlus fontSize={"1.2rem"} /> Add Groups
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
          rows={!loading ? groups : temp}
          pending={loading}
        />
      </Row>
      <SingleFeildModal
        show={show_modal}
        onHide={() => {
          setShow_Modal(false);
          setTrigger("");
        }}
        txt={"Groups"}
        feild_name={"Group Name"}
        trigger={trigger}
        value_input={editValue}
        data={groups}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Groups;
