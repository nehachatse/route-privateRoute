import React from "react";
import { Navigate } from "react-router-dom";
import DashboardComp from "../Components/DashboardComp";
import { AuthContext } from "../Context/AuthContext";

export default function Dashboard() {
  const { isAuth } = React.useContext(AuthContext);

  return isAuth ? <DashboardComp /> : <Navigate to="/login" />;
}
