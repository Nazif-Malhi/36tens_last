// add name with different value and then edit to with some other same value it will be done
import React, { useState, useEffect } from "react";
import {
  OutlinedInput,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  is_filter_by_name_in_title,
  is_filter_comp_name_modal_feilds,
} from "../../utils";
import { Row, Modal, Button, Container } from "react-bootstrap";

import { useSelector } from "react-redux";

function CompetencyNameModal({ onHandleCallBack, ...props }) {
  const [competencyName, setCompetencyName] = useState("");
  const [competencytype, setCompetencyType] = useState("");
  const [def, setDef] = useState("");
  const [text_error, setText_error] = useState("");

  const { competency_type } = useSelector((state) => state.competency_types);

  useEffect(() => {
    if (props.trigger === "isEdit") {
      setCompetencyName(props.value_input.name);
      setCompetencyType(props.value_input.type);
      setDef(props.value_input.def);
    } else {
      setCompetencyName("");
      setCompetencyType("");
      setDef("");
    }
    setText_error("");
  }, [props.value_input, props.trigger]);

  const handleModal = () => {
    const data = {
      competency_name: competencyName,
      competency_type: competencytype,
      def: def,
      trigger: props.trigger,
    };
    if (competencyName.length === 0 || competencytype.length === 0) {
      setText_error("Please Fill Competency Name & Type");
    } else if (competencyName.length > 0 && competencytype.length > 0) {
      switch (props.trigger) {
        case "isAdd":
          if (!want_toAdd()) {
            setText_error("Already Exist");
          } else {
            setText_error("");
            return data;
          }
          break;
        case "isEdit":
          if (!want_toEdit()) {
            setText_error("Already Exist");
          } else {
            setText_error("");

            return data;
          }
          break;
        default:
          break;
      }
    }
  };

  const want_toAdd = () => {
    if (is_filter_by_name_in_title(props.data, competencyName)) {
      return false;
    } else {
      return true;
    }
  };
  const want_toEdit = () => {
    if (
      is_filter_comp_name_modal_feilds(
        props.data,
        competencyName,
        competencytype,
        def
      )
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="md">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.trigger === "isEdit" ? "Update" : "Add"} Competency Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <TextField
              id="outlined-name"
              label={"Competency Name"}
              size="small"
              value={competencyName}
              onChange={(e) => {
                setCompetencyName(e.target.value);
              }}
              fullWidth
            />
          </Row>
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
                onChange={(e) => setCompetencyType(e.target.value)}
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
          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <TextField
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
          <p
            style={{
              color: text_error.length === 0 ? "white" : "red",
              textAlign: "center",
              fontStyle: "bold",
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

export default CompetencyNameModal;
