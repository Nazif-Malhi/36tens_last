import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Competency_Name,
  Competency_Statments,
  Competency_Type,
  Designation,
  Groups,
  Department,
} from "../masters";

const Masters = () => {
  return (
    <Routes>
      <Route path="department" element={<Department />} />
      <Route path="groups" element={<Groups />} />
      <Route path="designation" element={<Designation />} />
      <Route path="competencies-type" element={<Competency_Type />} />
      <Route path="competency-name" element={<Competency_Name />} />
      <Route path="competency-statments" element={<Competency_Statments />} />
    </Routes>
  );
};

export default Masters;
