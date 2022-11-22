import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
    </DashboardContainer>
  );
};

export default Dashboard;
