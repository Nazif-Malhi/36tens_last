//Done
import React, { useState, useEffect } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  OutlinedInput,
  TextField,
} from "@mui/material";

import { useSelector } from "react-redux";
import { is_filter_to_add_in_statment } from "../../utils/other";

function CompetencyStatementModal({ onHandleCallBack, ...props }) {
  const { competency_type } = useSelector((state) => state.competency_types);
  const { competency_name } = useSelector((state) => state.competency_names);

  const [competencyName, setCompetencyName] = useState("");
  const [competencytype, setCompetencyType] = useState("");
  const [def, setDef] = useState("");
  const [statement, setStatement] = useState("");

  const [filterCompetencyName, setFilter_CompetencyName] = useState([]);
  const [competency_name_id, setCompetency_Name_ID] = useState(-1);
  const [text_error, setText_error] = useState("");

  useEffect(() => {
    if (props.trigger === "isEdit") {
      setCompetencyName(props.value_input.name);
      setCompetencyType(props.value_input.type);
      setDef(props.value_input.def);
      setStatement(props.value_input.statement);
      handleCompetency_typeChange(props.value_input.type);
    } else {
      setCompetencyName("");
      setCompetencyType("");
      setDef("");
      setStatement("");
    }
    setText_error("");
  }, [props.value_input, props.trigger]);

  const handleModal = () => {
    const data = {
      competency: competency_name_id,
      competency_title: competencyName,
      type: competencytype,
      defination: def,
      statement: statement,
      trigger: props.trigger,
    };
    if (
      competencyName.length === 0 ||
      competencytype.length === 0 ||
      statement.length === 0
    ) {
      setText_error("Please Fill Feilds");
    } else if (
      competencyName.length > 0 &&
      competencytype.length > 0 &&
      statement.length > 0
    ) {
      if (
        is_filter_to_add_in_statment(
          props.data,
          competencytype,
          competencyName,
          statement
        )
      ) {
        setText_error("Already Exist");
      } else {
        setText_error("");
        return data;
      }
    }
  };

  const handleCompetency_typeChange = (value) => {
    setCompetencyType(value);
    const filterData = competency_name.filter((item) => item.type === value);
    setFilter_CompetencyName(filterData);
  };
  const handleCompany_NameChange = (value) => {
    setCompetencyName(value);
    const filterData = competency_name
      .filter(function (item) {
        return item.title === value;
      })
      .map(function (item) {
        setCompetency_Name_ID(item.id);
        return item.defination;
      });
    setDef(filterData);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="md">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.trigger === "isEdit" ? "Update" : "Add"} Competency Statement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <FormControl
              sx={{ width: "100%" }}
              size="small"
              style={{ background: "white" }}
            >
              <InputLabel id="demo-multiple-name-label">
                Competency Type{" "}
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={competencytype}
                onChange={(e) => handleCompetency_typeChange(e.target.value)}
                input={<OutlinedInput label="Competency Type" />}
              >
                {competency_type.map((val, id) => {
                  return (
                    <MenuItem key={val.title} value={val.title}>
                      {val.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Row>
          <Row>
            <FormControl
              sx={{ width: "100%" }}
              size="small"
              style={{ background: "white", marginTop: "10px" }}
            >
              <InputLabel id="demo-multiple-name-label">
                Competency Name{" "}
              </InputLabel>
              <Select
                disabled={competencytype.length === 0 ? true : false}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={competencyName}
                onChange={(e) => handleCompany_NameChange(e.target.value)}
                input={<OutlinedInput label="Competency Name" />}
              >
                {filterCompetencyName.map((val, id) => {
                  return (
                    <MenuItem key={val.title} value={val.title}>
                      {val.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Row>

          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <TextField
              disabled
              id="outlined-name"
              label={"Defination"}
              size="small"
              value={def}
              multiline
              rows={3}
              onChange={(e) => {
                setDef(e.target.value);
              }}
              fullWidth
            />
          </Row>
          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <TextField
              disabled={def.length === 0 ? true : false}
              id="outlined-name"
              label={"Statement"}
              size="small"
              value={statement}
              multiline
              rows={3}
              onChange={(e) => {
                setStatement(e.target.value);
              }}
              fullWidth
            />
          </Row>
          <p
            style={{
              color: text_error.length === 0 ? "white" : "red",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {text_error}
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={() => {
            props.onHide();
          }}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            onHandleCallBack(handleModal());
          }}
        >
          {props.trigger === "isEdit" ? "Update" : "Add"} {props.txt}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CompetencyStatementModal;
