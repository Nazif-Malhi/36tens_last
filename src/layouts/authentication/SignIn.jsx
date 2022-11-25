import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { StyledContainer } from "./Container";

import { Logo } from "../../assets";
import { CustomButton } from "../../components";
import { is_emailValid } from "../../utils";

import { useDispatch, useSelector } from "react-redux";
import { getUserData, login, login_clearErrors, user_data_clearErrors } from "../../store";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


const LogInWrapper = styled.div`
  width: 35%;
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
  .center-m-r {
    width: 80%;
    p {
      color: red;
    }
  }

  @media screen and (max-width: 1075px) {
    width: 60%;
  }
  @media screen and (max-width: 570px) {
    width: 80%;
  }
  @media screen and (max-width: 380px) {
    width: 95%;
  }
`;

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user_auth_login_error, token_set, loading } = useSelector(
    (state) => state.user_auth_login
  );
  const { user_last_login, user_data_error, updated } = useSelector(
    (state) => state.user_data
  );


  const [email_validation_error, setEmail_validation_error] = useState(false);
  const [text_error, setText_error] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const handleAuth = () => {
    if(!spinner_trigger){
      console.log("auth")
    setSpinner_trigger(true);
    const login_Payload = {
      email: email,
      password: password,
    };
    if (email.length === 0 || password.length === 0) {
      setText_error("Feilds are empty");
    } else if (email_validation_error) {
      setText_error("Email not valid");
    } else if(email.length > 0 && password.length > 0 && !email_validation_error){
      setText_error("");
      dispatch(login(login_Payload));
       
    }
  }
   };
   useEffect(() => {
    if(isAuthenticated){
    dispatch(getUserData());
    }
    else if(isAuthenticated === false && loading === false){
      if(user_auth_login_error){
      setText_error(user_auth_login_error.data.non_field_errors[0]);
      }
      else{
        setText_error("Check your connectivity");

      }
      setSpinner_trigger(false);
    }
    
   }, [dispatch, isAuthenticated, user_auth_login_error, loading])

   useEffect(() => {
if(updated){
  setSpinner_trigger(false);
  console.log(user_last_login);
  if(user_last_login === null){
    navigate("/36tens/admin/profile");
  }
  else{
    if(user_last_login.length > 1){
    navigate("/36tens/admin/dashboard");
  }
}
}
   }, [updated])



  return (
    <StyledContainer>
      <LogInWrapper>
        <div className="header">
          <h1>Log In</h1>
        </div>
        <Row className="center-row">
          <TextField
            error={email_validation_error}
            type={"email"}
            label="Email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => handleEmail_Validation(e.target.value)}
            size="small"
          />
        </Row>
        <Row className="center-row">
          <TextField
            type={"password"}
            label="Password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
          />
        </Row>
        <Row className="center-m-r">
          <p style={{ color:  "red" }}>
            {text_error}
          </p>
        </Row>
        <Row className="center-row">
          <CustomButton
            type={"normal textnormal"}
            width={"130px"}
            height={"40px"}
            onClick={() => {
              handleAuth();
            }}
          >
            {spinner_trigger ? <Spinner animation="border" variant="light" /> : "Login"}
          </CustomButton>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <p>
            Forget your password{" "}
            <a href="/36tens/authentication/forget-pasword">Recover now</a>
          </p>
        </Row>
        <Row>
          <p>
            or Register yet ?{" "}
            <a href="/36tens/authentication/signup">Register Now</a>
          </p>
        </Row>
        <Row className="center-row">
          <Col style={{ textAlign: "left" }}>
            <img src={Logo} alt="logo" />
          </Col>
        </Row>
      </LogInWrapper>
    </StyledContainer>
  );
};

export default SignIn;
