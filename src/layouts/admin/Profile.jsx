import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  TextField,
} from "@mui/material";
import countryList from "react-select-country-list";

import {
  annualData,
  companyTypeData,
  headCount,
  industries,
  MarketShare,
} from "../../assets";
import { ChangePassword, CustomButton, EditProfile } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  updateUserData,
  user_data_clearErrors,
} from "../../store";

const ProfileContainer = styled.div`
  display: flex;
  //align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  .container_profile {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 4px;

    .button-wrapper {
      width: 80%;
      display: flex;
      justify-content: space-around;
    }
    .header {
      width: 80%;
      display: flex;
      justify-content: center;
    }
    .body {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #a6a6b3;
    }
  }
  .card-slots {
    padding: 40px 20px;
    margin-top: 20px;
    .slots {
      width: 100%;
      margin-bottom: 10px;
      border-bottom: 0.5px solid #c3cad9;
      color: #627285;

      h6 {
        width: 100%;
      }
      span {
        float: right;
      }
    }
  }
  .personal_details {
    margin-top: 20px;
    width: 90%;
    color: #627285;
  }
  .less_width {
    width: 90%;
    margin-top: 10px;
  }
  .full_row {
    width: 100%;
  }
`;

const Profile = ({ data }) => {
  const dispatch = useDispatch();
  const { user_data, updated, user_data_error } = useSelector(
    (state) => state.user_data
  );

  const options = useMemo(() => countryList().getData(), []);
  const [firstName, setFirstName] = useState(
    data.first_name === null ? "" : data.first_name
  );
  const [lastName, setLastName] = useState(
    data.last_name === null ? "" : data.last_name
  );
  const [email, setEmail] = useState(data.email === null ? "" : data.email);
  const [contact, setContact] = useState(
    data.contact_num === null ? "" : data.contact_num
  );

  const [address, setAddress] = useState(
    data.address === null ? "" : data.address
  );
  const [city, setCity] = useState(data.city === null ? "" : data.city);
  const [province, setProvince] = useState(
    data.province === null ? "" : data.province
  );
  const [country, setCountry] = useState(
    data.country === null ? "" : data.country
  );

  const [companyName, setCompanyName] = useState(
    data.company_name === null ? "" : data.company_name
  );
  const [companyType, setCompanyType] = useState(
    data.company_type === null ? "" : data.company_type
  );

  const [industry, setIndustry] = useState(
    data.industry === null ? "" : data.industry
  );
  const [annual, setAnnual] = useState(
    data.revenue === null ? "" : data.revenue
  );

  const [totalHeadCount, setTotalHeadCount] = useState(
    data.headcount === null ? "" : data.headcount
  );
  const [marketShare, setMarketShare] = useState(
    data.market_share === null ? "" : data.market_share
  );

  const [type, setType] = useState(data.type === null ? "" : data.type);
  const [user_package, setUser_package] = useState(
    data.package === null ? "" : data.package
  );

  const [editProfileModal, setEditProfileModal] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const [text_error, setText_error] = useState("");

  const ready_to_change = () => {
    if (data.type === "Company") {
      if (companyName.length === 0) {
        setText_error("Company Name must be filled");
        return false;
      } else if (companyName.length > 0) {
        setText_error("");
        return true;
      }
    }
  };

  const handleUpadate = () => {
    if (ready_to_change()) {
      const payload_update = {
        address: address,
        city: city,
        province: province,
        country: country,
        company_type: companyType,
        industry: industry,
        revenue: annual,
        headcount: totalHeadCount,
        market_share: marketShare,
      };
      dispatch(updateUserData(payload_update, data.id));
    }
  };

  return (
    <>
      <ProfileContainer>
        <Row style={{ width: "100%", padding: "20px" }}>
          <Col xs={12} md={4}>
            <Row>
              <div
                className="container_profile"
                style={{ padding: "20px 0px" }}
              >
                <div className="header">
                  <h3>{firstName + " " + lastName}</h3>
                </div>
                <div className="body">
                  <p>Email: {email}</p>
                  <p>Contact Number: {contact}</p>
                </div>
                <div className="button-wrapper">
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setEditProfileModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setChangePasswordModal(true);
                    }}
                  >
                    Change Password
                  </Button>
                </div>
              </div>
            </Row>
            <Row>
              <div className="container_profile card-slots">
                <div className="slots">
                  <h6>
                    Who you are ? : <span>{type}</span>
                  </h6>
                </div>
                <div className="slots">
                  <h6>
                    Package :{" "}
                    <span>{user_package === 1 ? "Standard" : "Custom"}</span>
                  </h6>
                </div>
                <div className="slots">
                  <h6>
                    Verified :{" "}
                    <span>
                      <input
                        type={"checkbox"}
                        checked={data.is_verified}
                        value="verfication"
                        readOnly
                      />
                    </span>
                  </h6>
                </div>
                <Button variant="primary" disabled={true}>
                  Edit
                </Button>
              </div>
            </Row>
          </Col>
          <Col xs={12} md={8}>
            <div className="container_profile ">
              <Row className="personal_details">
                <h5>Personal Details</h5>
              </Row>
              <Row className="less_width">
                <Col>
                  <TextField
                    id="outlined-name"
                    label="Address"
                    size="small"
                    fullWidth
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Col>

                <Col>
                  <TextField
                    id="outlined-address"
                    label="City"
                    size="small"
                    fullWidth
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row className="less_width">
                <Col>
                  <TextField
                    id="outlined-name"
                    label="Province"
                    size="small"
                    fullWidth
                    value={province}
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  />
                </Col>

                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Country{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={country.length > 0 ? country : ""}
                      onChange={(e) => setCountry(e.target.value)}
                      input={<OutlinedInput label="Name" />}
                    >
                      {options.map((val, id) => {
                        return (
                          <MenuItem key={val.value} value={val.value}>
                            {val.label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Row className="personal_details">
                <h5>Company Details</h5>
              </Row>
              <Row className="less_width">
                <Col>
                  <TextField
                    disabled={data.type === "Company" ? false : true}
                    id="outlined-name"
                    label="Company Name"
                    size="small"
                    fullWidth
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Company Type{" "}
                    </InputLabel>
                    <Select
                      disabled={data.type === "Company" ? false : true}
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={companyType.length > 0 ? companyType : ""}
                      onChange={(e) => setCompanyType(e.target.value)}
                      input={<OutlinedInput label="Company Type" />}
                    >
                      {companyTypeData.map((val, id) => {
                        return (
                          <MenuItem key={val.company} value={val.company}>
                            {val.company}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Row className="less_width">
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Industry{" "}
                    </InputLabel>
                    <Select
                      disabled={data.type === "Company" ? false : true}
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={industry.length > 0 ? industry : ""}
                      onChange={(e) => setIndustry(e.target.value)}
                      input={<OutlinedInput label="Industry" />}
                    >
                      {industries.map((val, id) => {
                        return (
                          <MenuItem
                            key={val.Industry_name}
                            value={val.Industry_name}
                          >
                            {val.Industry_name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Annual Revenue in USD{" "}
                    </InputLabel>
                    <Select
                      disabled={data.type === "Company" ? false : true}
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={annual}
                      onChange={(e) => setAnnual(e.target.value)}
                      input={<OutlinedInput label="Annual Revenue in USD" />}
                    >
                      {annualData.map((val, id) => {
                        return (
                          <MenuItem key={val.annual} value={val.annual}>
                            {val.annual}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Row className="less_width">
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Total Head Count{" "}
                    </InputLabel>
                    <Select
                      disabled={data.type === "Company" ? false : true}
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={totalHeadCount.length > 0 ? totalHeadCount : ""}
                      onChange={(e) => setTotalHeadCount(e.target.value)}
                      input={<OutlinedInput label="Total Head Count" />}
                    >
                      {headCount.map((val, id) => {
                        return (
                          <MenuItem key={val.head} value={val.head}>
                            {val.head}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Market Share{" "}
                    </InputLabel>
                    <Select
                      disabled={data.type === "Company" ? false : true}
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={marketShare.length > 0 ? marketShare : ""}
                      onChange={(e) => setMarketShare(e.target.value)}
                      input={<OutlinedInput label="Market Share" />}
                    >
                      {MarketShare.map((val, id) => {
                        return (
                          <MenuItem key={val.share} value={val.share}>
                            {val.share}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <p
                style={{
                  color: text_error.length === 0 ? "white" : "red",
                  textAlign: "center",
                }}
              >
                {text_error}
              </p>
              <Row
                style={{
                  width: "90%",
                  marginBottom: "30px",
                  marginTop: "20px",
                }}
              >
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <CustomButton
                    type={"cancel textnormal margin-top margin-right20"}
                    width="120px"
                    height="40px"
                  >
                    Cancel
                  </CustomButton>
                  <CustomButton
                    type={"normal textnormal margin-top "}
                    width="120px"
                    height="40px"
                    onClick={() => {
                      handleUpadate();
                    }}
                  >
                    Update
                  </CustomButton>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </ProfileContainer>
      <EditProfile
        show={editProfileModal}
        onHide={() => {
          setEditProfileModal(false);
        }}
        first_name={data.first_name}
        last_name={data.last_name}
        contact={data.contact_num}
        id={data.id}
      />
      <ChangePassword
        show={changePasswordModal}
        onHide={() => {
          setChangePasswordModal(false);
        }}
      />
    </>
  );
};

export default Profile;
