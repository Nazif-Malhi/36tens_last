import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Spinner } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { StyledContainer } from "./Container";
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { CustomButton } from "../../components";
import { Custom, Logo, Standard } from "../../assets";
import { first_letter_capitalize, isNumber, is_emailValid } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { register, user_reg_clearErrors } from "../../store/Actions";


const SignUpWrapper = styled.div`
  width: 45%;
  background-color: white;
  border-radius: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .header {
    margin-top: 40px;
    h1 {
      font-weight: 600px;
      font-size: 30px;
    }
  }
  .center-row {
    width: 80%;
    margin: 10px 0px;
  }
  .packageWrapper {
    height: 160px;
    width: 80%;
    min-width: 120px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin: 10px;
    border-radius: 10px;
    .packageheader {
      width: 100%;
      height: 30px;
      .circleWrapper {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
      }
    }
    .packagebody {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .imgWrap {
        width: 30%;
        height: auto;
      }
    }
  }
  @media screen and (max-width: 1075px) {
    width: 95%;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, user_reg_error, is_reg } = useSelector((state) => state.user_reg);
  const [email_validation_error, setEmail_validation_error] = useState(false);

  const [whoYouAre, setWhoYouAre] = useState("");
  const [packageOfUser, setPackageOfUser] = useState("Standard");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [text_error, setText_error] = useState("");
  const [spinner_trigger, setSpinner_trigger] = useState(false);


  const handleEmail_Validation = (email) => {
    setEmail(email);
    if (is_emailValid(email)) {
      setEmail_validation_error(false);
      setText_error("");
    } else {
      setEmail_validation_error(true);
      setText_error("Email not valid");
    }
  };

  const request_for_register = () => {
    if(!spinner_trigger){
      setSpinner_trigger(true)
      const signup_payoad = {
        first_name: firstName,
        last_name: lastName,
        contact_num: mobileNumber,
        company_name: companyName,
        email: email,
        password: password,
        type: whoYouAre,
        package:
          packageOfUser === "Custom"
            ? 2
            : packageOfUser === "Standard"
            ? 1
            : null,
      };
      if (email_validation_error) {
        setText_error("Email not valid");
      } else {
        dispatch(register(signup_payoad));
      }
    }
  };

  const handleSignUp = () => {

    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      mobileNumber.length === 0 ||
      whoYouAre.length === 0
    ) {
      setText_error("Feilds are Empty");
    } else if (whoYouAre === "Indvidual") {
      if (email.length > 0 && password.length > 0) {
        request_for_register();
      } else {
        if (email.length === 0 || password.length === 0) {
          setText_error("Feilds are Empty");
        }
      }
    } else if (whoYouAre === "Company") {
      if (email.length > 0 && password.length > 0) {
        request_for_register();
      } else {
        if (
          companyName.length === 0 ||
          email.length === 0 ||
          password.length === 0
        ) {
          setText_error("Feilds are Empty");
        }
      }
    }
  };
  useEffect(() => {
      if(!is_reg){
        if (user_reg_error !== undefined ) {
          setText_error(user_reg_error);
          setSpinner_trigger(false)
        }
      }
      else{
        if (status === "Created") {
  
          localStorage.setItem("temp_user", firstName+" "+lastName);
          dispatch(user_reg_clearErrors());
          navigate("/36tens/verify-email");
        } else if (status === "Not Created") {
          setText_error(status);
        }
        setSpinner_trigger(false)

      }
  }, [dispatch, user_reg_error, status, navigate]);



  return (
    <StyledContainer signup>
      <SignUpWrapper>
        <div className="header">
          <h1>Sign Up</h1>
        </div>
        <Row className="center-row">
          <TextField
            label="First Name"
            placeholder="Enter Your First Name"
            size="small"
            value={firstName}
            onChange={(e) => {
              setFirstName(first_letter_capitalize(e.target.value));
            }}
          />
        </Row>
        <Row className="center-row">
          <TextField
            label="Last Name"
            placeholder="Enter Your Last Name"
            size="small"
            value={lastName}
            onChange={(e) => {
              setLastName(first_letter_capitalize(e.target.value));
            }}
          />
        </Row>
        <Row className="center-row">
          <TextField
          type="text"
            label="Mobile Number"
            placeholder="Enter Your Mobile Number"
            size="small"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(isNumber(e.target.value));
            }}
          />
        </Row>
        <Row className="center-row">
          <Select
            value={whoYouAre}
            onChange={(e) => {
              setWhoYouAre(e.target.value);
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            size="small"
            style={{ textAlign: "left", padding:"0px" }}
          >
            <MenuItem value="">
              <em style={{ fontStyle: "unset" }}>Who are you ?</em>
            </MenuItem>
            <MenuItem value={"Indvidual"}>Indvidual</MenuItem>
            <MenuItem value={"Company"}>Company</MenuItem>
          </Select>
        </Row>
        {whoYouAre === "Company" ? <Row className="center-row">
          <TextField
            disabled={whoYouAre === "Company" ? false : true}
            label={"Company Name"}
            placeholder={"Enter your Company Name"}
            size="small"
            type={"email"}
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
        </Row> : null}
        
        <Row className="center-row">
          <TextField
            disabled={
              whoYouAre === "Indvidual" || whoYouAre === "Company"
                ? false
                : true
            }
            label={
              whoYouAre === "Indvidual"
                ? "Email"
                : whoYouAre === "Company"
                ? "Company Email"
                : "Email"
            }
            placeholder={
              whoYouAre === "Indvidual"
                ? "Enter your Email"
                : whoYouAre === "Company"
                ? "Enter your Company Email"
                : null
            }
            size="small"
            type={"email"}
            value={email}
            onChange={(e) => {
              handleEmail_Validation(e.target.value);
            }}
          />
        </Row>

        <Row className="center-row">
          <TextField
            label="Password"
            placeholder="Enter Your Password"
            size="small"
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Row>
        <Row className="center-row">
          <Col
            style={{
              margin: "0px",
              padding: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="packageWrapper"
              onClick={() => {
                setPackageOfUser("Standard");
              }}
            >
              <div className="packageheader">
                <div className="circleWrapper">
                  {packageOfUser === "Custom" ? null : (
                    <BsCheckCircleFill
                      style={{ color: "#202ba3", fontSize: "1.5rem" }}
                    />
                  )}
                </div>
              </div>

              <div className="packagebody">
                <h4>Standard</h4>
                <img src={Standard} alt="standard" className="imgWrap" />
              </div>
            </div>
          </Col>
          <Col
            style={{
              margin: "0px",
              padding: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="packageWrapper"
              onClick={() => {
                setPackageOfUser("Custom");
              }}
            >
              <div className="packageheader">
                <div className="circleWrapper">
                  {packageOfUser === "Custom" ? (
                    <BsCheckCircleFill
                      style={{ color: "#202ba3", fontSize: "1.5rem" }}
                    />
                  ) : null}
                </div>
              </div>
              <div className="packagebody">
                <h4>Custom</h4>
                <img src={Custom} alt="standard" className="imgWrap" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="center-m-r">
          <p style={{ color:  "red" }}>
            {text_error}
          </p>
        </Row>
        <Row className="center-row">
          <CustomButton
            type={"normal textnormal margin-top"}
            width={"130px"}
            height={"40px"}
            onClick={() => {
              handleSignUp();
            }}
          >
            {spinner_trigger ? <Spinner animation="border" variant="light" /> : "Sign-Up"}

          </CustomButton>
        </Row>
        <Row className="center-row">
          <p style={{ marginTop: "10px" }}>
            if you already have an account?{" "}
            <a href="/36tens/authentication/login">Login Now</a>
          </p>
        </Row>
        <Row className="center-row">
          <Col style={{ textAlign: "left" }}>
            <img src={Logo} alt="logo" />
          </Col>
        </Row>
      </SignUpWrapper>
    </StyledContainer>
  );
};
export default SignUp;
