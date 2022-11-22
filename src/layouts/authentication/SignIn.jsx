import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { StyledContainer } from "./Container";

import { Logo } from "../../assets";
import { CustomButton } from "../../components";
import { is_emailValid } from "../../utils";

import { useDispatch, useSelector } from "react-redux";
import { login, login_clearErrors, user_data_clearErrors } from "../../store";
import { useNavigate } from "react-router-dom";

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

  const { isAuthenticated, user_auth_login_error, token_set } = useSelector(
    (state) => state.user_auth_login
  );
  const { user_last_login, user_data_error } = useSelector(
    (state) => state.user_data
  );

  const [email_validation_error, setEmail_validation_error] = useState(false);
  const [text_error, setText_error] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    const login_Payload = {
      email: email,
      password: password,
    };
    if (email.length === 0) {
      setText_error("Email feild is empty");
    } else if (email_validation_error) {
      setText_error("Email not valid");
    } else if (password.length === 0) {
      setText_error("Password feild is empty");
    } else {
      setText_error("");

      dispatch(login(login_Payload));
    }
  };
  useEffect(() => {
    if (user_data_error) {
      console.log(user_data_error);
      dispatch(user_data_clearErrors);
    }
    if (user_auth_login_error === "Bad Request") {
      setText_error("Email or Password is incorrect");
      setPassword("");
      dispatch(login_clearErrors());
    }
    if (isAuthenticated && token_set) {
      if (user_last_login === null) {
        navigate("/36tens/admin/profile");
      } else {
        navigate("/36tens/admin/dashboard");
      }
    }
  }, [
    dispatch,
    user_auth_login_error,
    isAuthenticated,
    token_set,
    user_last_login,
    user_data_error,
    navigate,
  ]);

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
          <p style={{ color: text_error.length === 0 ? "white" : "red" }}>
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
            Login
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
