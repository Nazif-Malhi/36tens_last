import React from "react";
import styled from "styled-components";
import { Checkmark } from "react-checkmark";

const DoneContainer = styled.div`
  width: 100%;
  height: 332px;
  margin-top: 20px;
  background: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .assign_wrapper {
    height: 60%;
    width: 50%;
    color: #7ac142;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: column;
  }
`;
const Done = () => {
  return (
    <DoneContainer>
      <div className="assign_wrapper">
        <Checkmark size="120px" />
        <h2>Done</h2>
      </div>
    </DoneContainer>
  );
};

export default Done;
