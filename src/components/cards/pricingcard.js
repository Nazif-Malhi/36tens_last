import React from "react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import CustomButton from "../buttons/Custombutton";

const CardWrapper = styled.div`
  height: 550px;
  width: 332px;
  border-radius: 26px;
  padding: 20px 30px 20px 30px;
  @media screen and (max-width: 361px) {
    width: 300px;
    padding: 20px 20px 20px 20px;
  }

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    float: right;
    width: 60%;
    height: 30px;
    background: #a600a0;
    border-radius: 13.5px;
    p {
      color: white;
      font-size: 0.9rem;
      font-weight: bold;
      margin: 0px;
    }
  }
  .price {
    display: flex;
    margin-top: 50px;
    align-items: baseline;

    p {
      font-size: 1rem;
      color: #202ba3;
    }
    h2 {
      color: #202ba3;
      font-size: 32px;
    }
  }
  .subHeading {
    display: flex;
    align-items: flex-start;
    margin-top: 0px;

    h2 {
      margin-top: 0px;
      color: #202ba3;
      font-weight: normal;
    }
  }
  .description {
    text-align: start;
    p {
      margin: 0px;
      color: #202ba3;
    }
    .list {
      margin-top: 10px;
      p {
        margin-top: 10px;
      }
    }
  }
  .planpopular {
    margin-top: 70px;
  }
  :hover {
    background-color: #202ba3;
    box-shadow: 0px 42px 34px 0px #5243c24b;
    transition: 0.5s ease-in-out;

    @media screen and (min-width: 1085px) {
      transform: translate(0%, -15%);
    }
    .heading {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      float: right;
      width: 60%;
      height: 30px;
      background: white;
      border-radius: 13.5px;
      p {
        color: #a600a0;
        font-size: 0.9rem;
        font-weight: bold;
        margin: 0px;
      }
    }
    .price {
      p {
        color: white;
      }
      h2 {
        color: white;
      }
    }
    .subHeading {
      h2 {
        color: white;
      }
    }
    .description {
      p {
        color: white;
      }
      .list {
        margin-top: 10px;
        p {
          margin-top: 10px;
        }
      }
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;
const PricingCard = ({ list, popular }) => {
  return list.map((key, index) => {
    return (
      <CardWrapper key={index}>
        {popular ? (
          <div className="heading">
            <p>MOST POPULAR</p>
          </div>
        ) : (
          ""
        )}
        <div className="price">
          <h2>${key.price}/</h2>
          <p>{key.per}</p>
        </div>
        <div className="subHeading">
          <h2>{key.subHeading}</h2>
        </div>
        <div className="description">
          <p>{key.desc}</p>
          <div className="list">
            {key.list.map((newList, newIndex) => {
              return (
                <p key={newIndex}>
                  <AiOutlineCheckCircle style={{ marginRight: "5px" }} />
                  {newList}
                </p>
              );
            })}
          </div>
        </div>
        <div className="button-wrapper">
          <CustomButton
            className={`margin-top_xl normal textnormal `}
            width={"220px"}
            height="50px"
          >
            Choose Plan
          </CustomButton>
        </div>
      </CardWrapper>
    );
  });
};

export default PricingCard;
