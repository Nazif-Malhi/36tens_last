import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import {
  AdminNav,
  AdminSideNav,
  Dashboard,
  Masters,
  Profile,
  Questionier,
  WorkForce,
  Surveys,
  Competencies,
} from "../layouts/admin";

import { useDispatch, useSelector } from "react-redux";
// import { getUserData, user_data_clearErrors } from "../store";

const Master = styled.div`
  width: 100%;
  height: 100vh;
  background: #f7f8fa;
`;
const MasterWrapper = styled.div`
  margin-left: 60px;
  width: calc(100% - 60px);
  height: calc(100% - 70px);
`;

const Admin = () => {
  const dispatch = useDispatch();
  const { user_data, updated, user_data_error } = useSelector(
    (state) => state.user_data
  );

  useEffect(() => {
    // dispatch(getUserData());
    if (user_data_error) {
      console.log(user_data_error);
      // dispatch(user_data_clearErrors());
    }
  }, [dispatch]);

  return (
    <Master>
      <AdminNav />
      <AdminSideNav />
      <MasterWrapper>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          {updated && (
            <>
              <Route path="profile" element={<Profile data={user_data} />} />
              <Route
                path="workforce"
                element={<WorkForce data={user_data} />}
              />
            </>
          )}
          <Route path="/master/*" element={<Masters />} />
          <Route path="survey" element={<Surveys />} />
          <Route path="competencies" element={<Competencies />} />
          <Route path="questionier" element={<Questionier />} />
        </Routes>
      </MasterWrapper>
    </Master>
  );
};

export default Admin;
