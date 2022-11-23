import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { Container } from "./Container";

import { useDispatch, useSelector } from "react-redux";
import {
  CompetenciesColumns,
  CompetencyNameModal,
  CustomButton,
} from "../../components";
import {
  add_competencyName,
  comp_name_clearErrors,
  delete_competencyName,
  get_competencyName,
  update_competencyName,
} from "../../store";

const Competency_Name = () => {
  const dispatch = useDispatch();
  const { competency_name, loading, comp_name_error } = useSelector(
    (state) => state.competency_names
  );

  const [show_modal, setShow_Modal] = useState(false);
  const [editValue, setEditValue] = useState([]);
  const [trigger, setTrigger] = useState("");
  const [id, setId] = useState(0);
  const temp = [];

  useEffect(() => {
    if (comp_name_error) {
      console.log(comp_name_error);
      dispatch(comp_name_clearErrors());
    }
    dispatch(get_competencyName());
  }, [dispatch]);

  const handleEdit = (name, id, type, def) => {
    const data = {
      name: name,
      type: type,
      def: def,
    };
    setEditValue(data);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    dispatch(delete_competencyName(e));
  };
  const handleModal = (e) => {
    if (e !== undefined) {
      const competency_name_payload = {
        type: e.competency_type,
        defination: e.def,
        title: e.competency_name,
      };
      setShow_Modal(false);
      setTrigger("");
      switch (e.trigger) {
        case "isEdit":
          dispatch(update_competencyName(competency_name_payload, id));
          break;
        case "isAdd":
          dispatch(add_competencyName(competency_name_payload));
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
            <h1>Competency Name</h1>
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
              <AiOutlinePlus /> Add Competency Name
            </CustomButton>
          </Col>
        </Row>
      </Row>
      <Row className="body">
        <CompetenciesColumns
          handleDelete={(e) => {
            handleDelete(e);
          }}
          handleEdit={(name, id, type, def) => {
            handleEdit(name, id, type, def);
          }}
          rows={!loading ? competency_name : temp}
          pending={loading}
        />
      </Row>
      <CompetencyNameModal
        show={show_modal}
        onHide={() => {
          setShow_Modal(false);
          setTrigger("");
        }}
        trigger={trigger}
        value_input={editValue}
        data={competency_name}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Competency_Name;
