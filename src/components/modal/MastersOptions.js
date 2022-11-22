// Refine Code
import styled from "styled-components";
import { Row, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { ImOffice } from "react-icons/im";
import { GiOfficeChair } from "react-icons/gi";
import { BsViewList } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";

const RowPackage = styled(Row)`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;

  .options {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: 90px;
    height: 90px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    p {
      margin: 0px;
      padding: 0px;
      font-size: 0.9rem;
    }
    :hover {
      background: #a600a0;
      color: white;
      font-color: white;
    }
  }
  .down {
    width: 93px;
  }
`;
export function MasterOptions(props) {
  const navigate = useNavigate();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Master Options
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RowPackage style={{ width: "100%", height: "100%" }}>
          <div
            className="options"
            onClick={() => {
              props.onHide();
              navigate("master/groups");
            }}
          >
            <AiOutlineUsergroupAdd fontSize={"1.5rem"} />
            <p>Groups</p>
          </div>
          <div
            className="options"
            onClick={() => {
              props.onHide();
              navigate("master/department");
            }}
          >
            <ImOffice fontSize={"1.5rem"} />
            <p>Department</p>
          </div>
          <div
            className="options"
            onClick={() => {
              props.onHide();
              navigate("master/designation");
            }}
          >
            <GiOfficeChair fontSize={"1.5rem"} />
            <p>Designation</p>
          </div>

          <div
            className="options down"
            onClick={() => {
              props.onHide();
              navigate("master/competencies-type");
            }}
          >
            <BsViewList fontSize={"1.5rem"} />
            <p>Competency Type</p>
          </div>
          <div
            className="options down"
            onClick={() => {
              props.onHide();
              navigate("master/competency-name");
            }}
          >
            <BsCardList fontSize={"1.5rem"} />
            <p>Competency Name</p>
          </div>
          <div
            className="options down"
            onClick={() => {
              props.onHide();
              navigate("master/competency-statments");
            }}
          >
            <RiFileListLine fontSize={"1.5rem"} />
            <p>Statements</p>
          </div>
        </RowPackage>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
