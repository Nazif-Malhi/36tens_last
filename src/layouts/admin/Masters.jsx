import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Competency_Name,
  Competency_Statments,
  Competency_Type,
  Designation,
  Groups,
  Department,
} from "../masters";

import { useDispatch } from "react-redux";
import { get_competencyName, get_competencyType } from "../../store";

const Masters = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_competencyType());
    dispatch(get_competencyName());
  }, [dispatch]);

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
