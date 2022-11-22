import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .default {
    margin-left: -100%;
    background: #a600a0;
    border-radius: 7px;
    border: none;
    :hover {
      background: #232340;
    }
  }
  .bold {
    color: #ffffff;
    font-size: 13px;
    font-weight: bold;
  }
  .normal {
    background: #a600a0;
    border-radius: 7px;
    border: none;
    :hover {
      background: #232340;
    }
  }
  .cancel {
    background: #c3cad9;
    border-radius: 7px;
    border: none;
    :hover {
      background: #232340;
    }
    color: black;
  }
  .textnormal {
    color: #ffffff;
  }
  .margin-right {
    margin-right: 10px;
  }
  .margin-right20 {
    margin-right: 30px;
  }
  .margin-left20 {
    margin-left: 60px;
  }
  .margin-left {
    margin-left: 10px;
  }
  .margin-top {
    margin-top: 10px;
  }
  .margin-top_xl {
    margin-top: 20px;
  }
  .floatRight {
    float: right;
  }
  .disabled {
    background: #c3cad9;
    cursor: default;
    :hover {
      background: #c3cad9;
    }
  }
  .circle {
    border-radius: 50%;
  }
  .margin-bottom {
    margin-bottom: 40px;
  }
`;

const CustomButton = ({
  type,
  children,
  width,
  height,
  style,
  onClick,
  ...props
}) => {
  return (
    <ButtonStyle>
      <button
        className={type}
        {...props}
        onClick={onClick}
        style={{ width: width, height: height, style }}
      >
        {children}
      </button>
    </ButtonStyle>
  );
};

export default CustomButton;
