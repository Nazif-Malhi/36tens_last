import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Admin, Authentication, Loading, Mockup, VerifyAccount } from "./pages";

import "./App.css";
import ProtectedRoute from "./ProtectedGaurd/ProtectedRoute";
import { set_authtoken_toHeader } from "./utils/auth_token";

function App() {
  if (localStorage.getItem("token") !== null) {
    set_authtoken_toHeader(localStorage.getItem("token"));
  }
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="36tens" element={<Mockup />} />
        <Route path="36tens/verify-email" element={<VerifyAccount />} />
        <Route path="36tens/authentication/*" element={<Authentication />} />
        <Route
          path="36tens/admin/*"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
