import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import dash from "../img/dash.jpg";
import setting from "../img/setting.jpg";

const H3 = styled.h2`
  margin-top: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: purple;
`;
export default function DashboardComp() {
  return (
    <div>
      <Navbar />
      <H3>
        It's a dashboard page!!!
        <span>
          <Link to="/dashboard/setting">
            {" "}
            <img
              src={setting}
              alt="setting"
              width="5%"
              style={{ marginLeft: "3rem" }}
            />
          </Link>
        </span>
      </H3>
      <img src={dash} alt="welcome" width="100%" />
      <Link to="/dashboard/settings">
        <button>Settings</button>
      </Link>
      <Outlet />
    </div>
  );
}
