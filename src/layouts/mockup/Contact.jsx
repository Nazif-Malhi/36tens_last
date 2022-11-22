import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { InputContact } from "../../components";

const ContactWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .contact-form {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px 0px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px 0px;
    border-radius: 8px;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    .centerRow {
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 20px 0px;
      select {
        width: 100%;
        background: rgba(216, 216, 216, 0.1);
        border: 1px solid rgba(35, 35, 64, 0.31);
        border-radius: 2px;
        padding: 10px;
      }
      textarea {
        background: rgba(216, 216, 216, 0.1);
      }
    }
  }
`;

const Contact = ({ id }) => {
  return (
    <ContactWrapper id={id}>
      <div className="contact-form">
        <Row className="centerRow">
          <h2>Contact Us</h2>
        </Row>
        <Row className="centerRow">
          <InputContact
            type={"text"}
            placeholder="Full Name"
            required="required"
          />
        </Row>

        <Row className="centerRow">
          <select required="required">
            <option>Select</option>
          </select>
        </Row>
        <Row className="centerRow">
          <textarea
            name="message"
            rows="5"
            cols="30"
            placeholder="Description"
          />
        </Row>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
