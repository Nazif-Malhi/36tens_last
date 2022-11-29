import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { Desktop } from "../../assets";
import { CustomButton, InputRound } from "../../components";
import "../../assets/styles/fonts.css";
// import './fonts.css'

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 88vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  .wrapper {
    display: flex;
    height: 90%;
    width: 90%;
    .containerwrapper {
      .text {
        display: flex;
        flex-direction: column;
        align-items: start;

        h1 {
          font-family: "Roboto", sans-serif;

          font-weight: 700;
          font-size: 100px;
          color: #950090;
          letter-spacing: 2px;
          line-height: 88px;
          margin: 0px;
        }
        h2 {
          font-weight: 700px;
          font-size: 70px;
          line-height: 46px;
          letter-spacing: 2px;
          margin: 0px;
          color: #040b5c;
          font-family: "Raleway", sans-serif;
        }
        h3 {
          font-family: "Raleway", sans-serif;
          color: #071399;
          font-weight: 200px;
          font-size: 25px;
          line-height: 25px;
          letter-spacing: 1px;
          margin: 0px;
        }
      }
      .lower {
        display: flex;
        margin-top: 20px;
      }
    }

    .home_image {
      max-width: 100%;
      min-width: 450px;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      .containerwrapper {
        .text {
          h1 {
            font-size: 80px;
            color: #950090;
            letter-spacing: 1px;
            line-height: 68px;
          }
          h2 {
            font-size: 45px;
            line-height: 36px;
            letter-spacing: 0.5px;
          }
          h3 {
            font-weight: 200px;
            font-size: 25px;
            line-height: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 997px) {
    height: 160vh;
  }
  @media screen and (max-width: 490px) {
    .home_image {
      min-width: 200px !important ;
    }
  }
  @media screen and (max-width: 557px) {
    height: 100vh;
  }
`;

const Home = ({ id }) => {
  return (
    <HomeContainer id={id}>
      <Row className="wrapper">
        <Col
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div className="containerwrapper">
            <div className="text">
              <h1>360</h1>
              <h2>FEEDBACK</h2>
              <h3 style={{ marginTop: "20px" }}>ONLINE FAST & SIMPLE</h3>
            </div>
            <div className="lower">
              <InputRound
                type="email"
                placeholder="lucasdebelder@imd.com"
                required="required"
              />
              <CustomButton
                type={"default bold"}
                width={"100px"}
                height={"40px"}
              >
                Free Trail
              </CustomButton>
            </div>
          </div>
        </Col>
        <Col
          style={{
            borderRadius: "20px",
            background:
              "linear-gradient(323.15deg,#ca66c6 -9.01%,rgba(202, 102, 198, 0) 23.86%)",
          }}
        >
          <img src={Desktop} alt="desktop" className="home_image" />
        </Col>
      </Row>
    </HomeContainer>
  );
};

export default Home;
