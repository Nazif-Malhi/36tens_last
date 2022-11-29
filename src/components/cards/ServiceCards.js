import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const ServiceContainerInactive = styled.div`
  max-width: 400px;
  min-width: 400px;
  height: 200px;
  border-radius: 40px;
  text-align: start;
  background: white;
  margin-top: -30px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: black;

  .servicetext {
    margin-top: 40px;
    margin-left: 50px;
    h1 {
      margin-bottom: 0px;
    }
    p {
      margin-top: 0px;
      font-size: 15px;
    }
  }
  :hover {
    z-index: 1000;
    transition: 0.5s ease-in-out;
    transform: scaleY(1.1);
    background: #3942ad;
    color: white;
  }
`;

const ServiceCard = ({ heading }) => {
  return (
    <>
      <ServiceContainerInactive>
        <div className="servicetext">
          <h1>{heading}</h1>
          <p>Explore Now</p>
          <BsArrowRight style={{ fontSize: "1.75rem" }} />
        </div>
      </ServiceContainerInactive>
    </>
  );
};

export default ServiceCard;
