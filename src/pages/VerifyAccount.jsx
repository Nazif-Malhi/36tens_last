import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Checkmark } from "react-checkmark";
import { CustomButton } from "../components";

const VerifyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f8fa;
  .end-position {
    position: absolute;
    bottom: 0px;
    color: #9ca8bf;
  }
  h6 {
    margin-top: 20px;
  }
`;

const VerifyAccount = () => {
  const navigate = useNavigate();
  return (
    <VerifyContainer>
      <Checkmark size="60px" />
      <h5>Its great ! your account has been created, John Doe</h5>
      <p>
        Please verify your account by clicking the link that has been{" "}
        <u>sent to your email</u>
      </p>
      <p>and go back to fill profile</p>
      <p>Thanks !</p>
      <h6>To Log In please click the button below</h6>
      <CustomButton
        type={"normal textnormal margin-top"}
        width={"130px"}
        height={"40px"}
        onClick={() => {
          navigate("/36tens/authentication/login");
        }}
      >
        Log In
      </CustomButton>
      <div className="end-position">
        <p>©2022 Fifth Tought. All rights reserved.</p>
      </div>
    </VerifyContainer>
  );
};

export default VerifyAccount;
