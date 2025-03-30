import { Routes, Route, Navigate } from "react-router";
import { Dashboard } from "../Dashboard/Dashboard";
import { LoginTabs } from "../Login/Login";

export function JsxRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginTabs />} />
        <Route path="/signup" element={<LoginTabs />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}
