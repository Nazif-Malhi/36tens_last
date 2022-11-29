import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  CompetencyStatementModal,
  CompetencyStatmentsColumns,
  CustomButton,
} from "../../components";
import {
  add_competencyStatements,
  competencyStatment_clearErrors,
  delete_competencyStatements,
  get_competencyStatements,
  update_competencyStatements,
} from "../../store";

import { Container } from "./Container";

const Competency_Statments = () => {
  const dispatch = useDispatch();
  const { competency_statements, loading, comp_state_error } = useSelector(
    (state) => state.competency_statements
  );

  const [show_modal, setShow_Modal] = useState(false);
  const [editValue, setEditValue] = useState([]);
  const [trigger, setTrigger] = useState("");
  const [id, setId] = useState(0);
  const temp = [];

  useEffect(() => {
    if (comp_state_error) {
      dispatch(competencyStatment_clearErrors());
    }
    dispatch(get_competencyStatements());
  }, [dispatch]);

  const handleEdit = (name, id, type, def, statement) => {
    const data = {
      name: name,
      type: type,
      def: def,
      statement: statement,
    };
    setEditValue(data);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    dispatch(delete_competencyStatements(e));
  };
  const handleModal = (e) => {
    if (e !== undefined) {
      const competency_statment_payload = {
        competency: e.competency,
        competency_title: e.competency_title,
        type: e.type,
        defination: e.defination[0],
        statement: e.statement,
      };
      setShow_Modal(false);
      setTrigger("");
      switch (e.trigger) {
        case "isEdit":
          dispatch(
            update_competencyStatements(competency_statment_payload, id)
          );
          break;
        case "isAdd":
          dispatch(add_competencyStatements(competency_statment_payload));
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
            <h1>Competency Statements</h1>
          </Col>
          <Col className={"responsive-button"}>
            <CustomButton
              type={"normal textnormal margin-button"}
              width="250px"
              height="40px"
              onClick={() => {
                setShow_Modal(true);
                setTrigger("isAdd");
              }}
            >
              <AiOutlinePlus fontSize={"1.2rem"}/> Add Competency Statements
            </CustomButton>
          </Col>
        </Row>
      </Row>
      <Row className="body">
        <CompetencyStatmentsColumns
          handleDelete={(e) => {
            handleDelete(e);
          }}
          handleEdit={(name, id, type, def, statement) => {
            handleEdit(name, id, type, def, statement);
          }}
          rows={!loading ? competency_statements : temp}
          pending={loading}
        />
      </Row>
      <CompetencyStatementModal
        show={show_modal}
        onHide={() => {
          setShow_Modal(false);
          setTrigger("");
        }}
        trigger={trigger}
        value_input={editValue}
        data={competency_statements}
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Competency_Statments;
