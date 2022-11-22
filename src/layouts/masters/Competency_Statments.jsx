import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import CustomButton from "../../components/buttons/Custombutton";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  CompetenciesColumns,
  CompetencyStatementModal,
  CustomButton,
} from "../../components";
// import CompetencyStatmentsColumns from "../../components/Table/CompetenciesStatementsColumns";
// import CompetencyStatementModal from "../../components/modals/competency_statment_modal";

// import {
//   clearErrors,
//   deleteCompetency_name,
//   getCompetency_name,
//   newCompetency_name,
//   updateCompetency_name,
// } from "../../Store/actions/competency_name_Actions";
// import {
//   deleteCompetency_statements,
//   getCompetency_statements,
//   newCompetency_statements,
//   updateCompetency_statements,
// } from "../../Store/actions/competency_statements_Actions";
import { Container } from "./Container";

const Competency_Statments = () => {
  // const dispatch = useDispatch();
  // const { competency_statements, loading, error } = useSelector(
  //   (state) => state.competency_statements
  // );

  const [show_modal, setShow_Modal] = useState(false);
  const [editValue, setEditValue] = useState([]);
  const [trigger, setTrigger] = useState("");
  const [id, setId] = useState(0);
  const temp = [];

  // useEffect(() => {
  //   // if (error) {
  //   //   dispatch(clearErrors());
  //   // }
  //   dispatch(getCompetency_statements());
  // }, [dispatch]);

  const handleEdit = (name, id, type, def, statement) => {
    const data = {
      name: name,
      type: type,
      def: def,
      statement: statement,
    };
    console.log(data);
    setEditValue(data);
    setId(id);
    setTrigger("isEdit");
    setShow_Modal(true);
  };
  const handleDelete = (e) => {
    // dispatch(deleteCompetency_statements(e));
  };
  const handleModal = (e) => {
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
        // dispatch(updateCompetency_statements(competency_statment_payload, id));
        break;
      case "isAdd":
        // dispatch(newCompetency_statements(competency_statment_payload));
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
            <h1>Competency Statements</h1>
          </Col>
          <Col className={"responsive-button"}>
            <CustomButton
              type={"normal textnormal margin-button"}
              width="260px"
              height="40px"
              onClick={() => {
                setShow_Modal(true);
                setTrigger("isAdd");
              }}
            >
              <AiOutlinePlus /> Add Competency Statements
            </CustomButton>
          </Col>
        </Row>
      </Row>
      <Row className="body">
        <CompetenciesColumns
          handleDelete={(e) => {
            handleDelete(e);
          }}
          handleEdit={(name, id, type, def, statement) => {
            handleEdit(name, id, type, def, statement);
          }}
          // rows={!loading ? competency_statements : temp}
          // pending={loading}
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
        onHandleCallBack={(e) => {
          handleModal(e);
        }}
      />
    </Container>
  );
};

export default Competency_Statments;
