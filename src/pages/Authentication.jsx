import React from "react";
import { Routes, Route } from "react-router-dom";
import { Forget, SignIn, SignUp } from "../layouts";

const Authentication = () => {
  return (
    <Routes>
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forget-pasword" element={<Forget />} />
    </Routes>
  );
};

export default Authentication;
