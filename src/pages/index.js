import { lazy } from "react";

export const Mockup = lazy(() => import("./Mockup.jsx"));
export const VerifyAccount = lazy(() => import("./VerifyAccount"));
export const Authentication = lazy(() => import("./Authentication"));
export const Admin = lazy(() => import("./Admin"));

export { default as Loading } from "./Loading";
