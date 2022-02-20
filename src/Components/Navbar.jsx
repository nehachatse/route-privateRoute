import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { NavbarWrapper, Button } from "./Navbar.styled";

export default function Navbar() {
  const { isAuth, handleAuth } = useContext(AuthContext);

  const handleLogin = () => {
    if (isAuth) handleAuth();
  };
  return (
    <NavbarWrapper>
      <Link to="/login">
        {" "}
        <Button>{isAuth ? "LOGOUT" : "LOGIN"}</Button>
      </Link>
    </NavbarWrapper>
  );
}
