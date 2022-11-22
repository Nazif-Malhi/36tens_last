import { lazy } from "react";

export const Department = lazy(() => import("./Department"));
export const Groups = lazy(() => import("./Groups"));
export const Designation = lazy(() => import("./Designation"));
export const Competency_Type = lazy(() => import("./Competency_Type"));
export const Competency_Statments = lazy(() =>
  import("./Competency_Statments")
);
export const Competency_Name = lazy(() => import("./Competency_Name"));
