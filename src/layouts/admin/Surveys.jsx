import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import {MenuItem, FormControl, Select, Pagination} from "@mui/material";
import { SurveyCreation } from "../../assets/data/Database";
import { CreateSurvey, CustomButton, Table, TableHeading, usePagination } from "../../components";

import { useNavigate } from "react-router-dom";

const SurveyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .header {
    height: auto;
    width: 90%;
    .common-row {
      height: auto;
      margin: 10px 0px;
      padding: 0px;
    }
    .title {
      display: flex;
      @media screen and (max-width: 528px) {
        justify-content: center;
      }
    }
    .responsive-button {
      display: flex;
      justify-content: end;
      @media screen and (max-width: 776px) {
        flex-direction: column;
      }
    }
    .options {
      width: 60%;
      @media screen and (max-width: 890px) {
        width: 100%;
      }
    }
  }
  .body {
    width: 90%;
    display: flex;
    height: calc(100% - 60px);
    align-items: center;
    flex-direction: column;
  }
`;
const Surveys = () => {
  const navigate = useNavigate();
  const [recentlyUpdated, setRecentlyUpdated] = useState("");
  const [allTypes, setAllTypes] = useState("");
  const [active, setActive] = useState("");
  const [isShowSurveyModal, setShowSurveyModal] = useState(false);

  const [dumyData, setDumyData] = useState([]);

  const handleRecentlyUpdated = (event) => {
    setRecentlyUpdated(event.target.value);
  };
  const handleAllTypes = (event) => {
    setAllTypes(event.target.value);
  };
  const handleActive = (event) => {
    setActive(event.target.value);
  };

  // const create survey

  const createSurveyMethod = (val) => {
    if(val !== null){
SurveyCreation.push(val);
setShowSurveyModal(false);
    navigate("/36tens/admin/competencies");

    }
    
  };

  useEffect(() => {
    setDumyData(SurveyCreation);
  }, [isShowSurveyModal]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(dumyData.length / PER_PAGE);
  const _DATA = usePagination(dumyData, PER_PAGE);

  const handleChangePagination = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <SurveyContainer>
      <Row className="header">
        <Row className="common-row">
          <Col className="title">
            <h1>Surveys Creation</h1>
          </Col>
          <Col className={"responsive-button"}>
            <CustomButton
              type={"normal textnormal"}
              width="220px"
              height="40px"
              onClick={() => setShowSurveyModal(true)}
            >
              Create New Survey
            </CustomButton>
          </Col>
          <Row className="common-row">
            <div className="options">
              <Row>
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <Select
                      value={recentlyUpdated}
                      onChange={handleRecentlyUpdated}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Recently Created</em>
                      </MenuItem>
                      <MenuItem value={"recently_updated"}>
                        Recently Updated
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <Select
                      value={allTypes}
                      onChange={handleAllTypes}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>All Types</em>
                      </MenuItem>
                      <MenuItem value={"standard"}>Standard</MenuItem>
                      <MenuItem value={"custom"}>Custom</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <Select
                      value={active}
                      onChange={handleActive}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Active</em>
                      </MenuItem>
                      <MenuItem value={"completed"}>Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>
            </div>
          </Row>
        </Row>
      </Row>
      <Row className="body">
        <TableHeading
          columnName={["Name", "Questions", "Responses", "Completion Rate"]}
          action={true}
        />
        {_DATA.currentData().map((val, key) => {
          return (
            <Table key={key} name={val.name} quest={38} res={"10"} rate={80} />
          );
        })}
      </Row>

      <Pagination
        count={count}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePagination}
        style={{ marginBottom: "15px" }}
      />
      <CreateSurvey
        show={isShowSurveyModal}
        onHide={() => setShowSurveyModal(false)}
        createSurveyMethod={(e) => {
          createSurveyMethod(e);
        }}
      />
    </SurveyContainer>
  );
};

export default Surveys;
