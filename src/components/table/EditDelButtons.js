import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  .iconwrapper {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-radius: 7px;
    width: 40px;
    height: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .iconwrapper:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

export const Edit = ({ onClickHandle }) => {
  return (
    <ActionContainer onClick={() => onClickHandle()}>
      <div className="iconwrapper">
        <CiEdit color="black" fontSize={"1.5rem"} />
      </div>
    </ActionContainer>
  );
};

export const Delete = ({ onClickHandle }) => {
  return (
    <ActionContainer onClick={() => onClickHandle()}>
      <div className="iconwrapper">
        <MdDelete color="red" fontSize={"1.5rem"} />
      </div>
    </ActionContainer>
  );
};
