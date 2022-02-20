import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Settings from "../Pages/Settings";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
