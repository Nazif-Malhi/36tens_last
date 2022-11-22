import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets";

const RightsWrapper = styled.div`
  margin-top: 30px;
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  p {
    color: #606060;
    text-transform: lowercase;
    margin-bottom: 0px;
    font-size: 18px;
  }
  .break {
    width: 70%;
    height: 10px;
    text-align: flex-start;
    hr {
      border-top: 2px solid #d8d8d8;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Rights = () => {
  return (
    <RightsWrapper>
      <img src={Logo} alt="logo" />
      <p>sOLUTION TO MEASURE BUSINESS-CRITICAL LEADERSHIP</p>
      <p> COMPETENCIES THAT WILL DRIVE THE FUTURE OF ORGANIZATIONS TODAY.</p>
      <div className="break">
        <hr />
        <p>© 2022, All Copy Right Reserved - Fifththought.</p>
      </div>
    </RightsWrapper>
  );
};

export default Rights;
