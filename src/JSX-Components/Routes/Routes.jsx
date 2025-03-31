import { Routes, Route, Navigate, useNavigate } from "react-router";
import { Dashboard } from "../Dashboard/Dashboard";
import { LoginTabs } from "../Login/Login";
import { useEffect } from "react";
import { Home } from "../Home/Home";
import { GeneralKnowledge } from "../Categories/General-Knowledge";

export function JsxRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginTabs />} />
        <Route path="/signup" element={<LoginTabs />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    token === "Quiz-App-Logged" && navigate("/");
  }, [token, navigate]);

  return token === "Quiz-App-Logged" ? (
    <div>{children}</div>
  ) : (
    <Navigate replace to="/login" />
  );
}
