//data format from columns be in list
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import {
  AddEmployee,
  BulkUpload,
  CustomButton,
  InputContact,
  WorkforceColumns,
} from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { get_Employees } from "../../store";
import { employees_clearErrors } from "../../store/Actions/employees_actions";

const WorkforceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .header {
    width: 80%;
    height: auto;
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
    .margin-button {
      margin-right: 10px;
      @media screen and (max-width: 776px) {
        margin-bottom: 5px;
      }
    }
    .margin-top-responsive {
      @media screen and (max-width: 776px) {
        margin-top: 5px;
      }
    }
    .filtersearch {
      @media screen and (max-width: 455px) {
        display: flex;
        justify-content: center;
      }
    }
    .filterbutton {
      display: flex;
      justify-content: end;
      @media screen and (max-width: 776px) {
        justify-content: center;
      }
    }
  }
  .body {
    width: 79%;
    display: flex;
    align-items: start;
    justify-content: start;
    @media screen and (max-width: 776px) {
    }
  }
`;

const handleEdit = (
  id,
  first_name,
  last_name,
  department,
  designation,
  contact_num,
  group,
  email
) => {
  const data = {
    id: id,
    first_name: first_name,
    last_name: last_name,
    department: department,
    designation: designation,
    contact_num: contact_num,
    group: group,
    email: email,
  };
  console.log(data);
};
const handleDelete = (id) => {
  console.log(id);
};

const WorkForce = ({ data }) => {
  const dispatch = useDispatch();
  const { employees, loading, employees_error } = useSelector(
    (state) => state.employees
  );
  let temp = [];

  const [search, setSearch] = useState("");
  const [filterResults, setFilterResults] = useState(employees);

  const [isShowAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [isBulkUpload, setBulkUpload] = useState(false);

  const filter = () => {
    const result = employees.filter((list) => {
      return list.first_name.toLowerCase().match(search.toLowerCase());
    });
    setFilterResults(result);
  };

  useEffect(() => {
    if (employees_error) {
      console.log(employees_error);
      dispatch(employees_clearErrors());
    }
    if (isShowAddEmployeeModal === false && isBulkUpload === false) {
      dispatch(get_Employees(data.company_name));
    }
  }, [dispatch, isShowAddEmployeeModal, isBulkUpload]);

  useEffect(() => {
    if (!loading) {
      setFilterResults(employees);
    }
  }, [employees, loading]);

  return (
    <WorkforceContainer>
      <Row className="header">
        <Row className="common-row">
          <Col className="title">
            <h1>WorkForce</h1>
          </Col>
          <Col className={"responsive-button"}>
            <CustomButton
              type={"normal textnormal margin-button"}
              width="180px"
              height="40px"
              onClick={() => {
                setShowAddEmployeeModal(true);
              }}
            >
              <AiOutlinePlus /> Add New Employee
            </CustomButton>
            <CustomButton
              type={"normal textnormal margin-button"}
              width="180px"
              height="40px"
              onClick={() => {
                setBulkUpload(true);
              }}
            >
              <AiOutlinePlus /> Bulk Add
            </CustomButton>
          </Col>
        </Row>
        <Row className="common-row">
          <Col className="filtersearch">
            <InputContact
              placeholder={`Search`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col className="filterbutton">
            <CustomButton
              type={"normal textnormal margin-button margin-top-responsive"}
              width="120px"
              height="40px"
              onClick={() => {
                filter();
              }}
            >
              <BiFilterAlt /> Filter
            </CustomButton>
          </Col>
        </Row>
      </Row>
      <Row className="body">
        <WorkforceColumns
          handleDelete={(id) => {
            handleDelete(id);
          }}
          handleEdit={(
            id,
            first_name,
            last_name,
            department,
            designation,
            contact_num,
            group,
            email
          ) => {
            handleEdit(
              id,
              first_name,
              last_name,
              department,
              designation,
              contact_num,
              group,
              email
            );
          }}
          rows={!loading ? filterResults : temp}
          pending={loading}
        />
      </Row>

      {/* Modals */}
      <AddEmployee
        show={isShowAddEmployeeModal}
        onHide={() => {
          setShowAddEmployeeModal(false);
        }}
        company_name={data.company_name}
      />
      <BulkUpload
        show={isBulkUpload}
        onHide={() => {
          setBulkUpload(false);
        }}
      />
    </WorkforceContainer>
  );
};

export default WorkForce;
