import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .header {
    width: 80%;
    height: auto;
    .common-row {
      height: auto;
      margin: 10px 0px;
      padding: 0px;
      .responsive-button {
        display: flex;
        justify-content: flex-end;
      }
    }
    .title {
      display: flex;
      @media screen and (max-width: 528px) {
        justify-content: center;
      }
    }

    .margin-button {
      margin-right: 10px;
      @media screen and (max-width: 776px) {
        margin-bottom: 5px;
      }
    }
  }
  .body {
    width: 79%;
    display: flex;
    align-items: start;
    justify-content: start;
  }
`;
