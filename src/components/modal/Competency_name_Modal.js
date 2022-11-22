import React, { useState, useEffect } from "react";

import {
  OutlinedInput,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

import { Row, Modal, Button, Container } from "react-bootstrap";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   clearErrors,
//   getCompetency_type,
// } from "../../Store/actions/comptenecy_type_Actions";

function CompetencyNameModal({ onHandleCallBack, ...props }) {
  // const dispatch = useDispatch();
  const [competencyName, setCompetencyName] = useState("");
  const [competencytype, setCompetencyType] = useState("");
  const [def, setDef] = useState("");

  // const { competency, error } = useSelector((state) => state.competency_types);
  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getCompetency_type());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (props.trigger === "isEdit") {
  //     setCompetencyName(props.value_input.name);
  //     setCompetencyType(props.value_input.type);
  //     setDef(props.value_input.def);
  //   } else {
  //     setCompetencyName("");
  //     setCompetencyType("");
  //     setDef("");
  //   }
  // }, [props.value_input, props.trigger]);

  const handleModal = () => {
    const data = {
      competency_name: competencyName,
      competency_type: competencytype,
      def: def,
      trigger: props.trigger,
    };

    return data;
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
                {/* {competency.map((val, id) => {
                  return (
                    <MenuItem key={val.title} value={val.title}>
                      {val.title}
                    </MenuItem>
                  );
                })} */}
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
