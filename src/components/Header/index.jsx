import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <NavLink
          activeStyle={{ color: "white" }}
          to="/"
          exact
          style={{ marginRight: 20, color: "black", textDecoration: "none" }}
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={{ color: "white" }}
          to="/signup"
          exact
          style={{ marginRight: 20, color: "black", textDecoration: "none" }}
        >
          Sign Up
        </NavLink>
        <NavLink
          activeStyle={{ color: "white" }}
          to="/signin"
          exact
          style={{ marginRight: 20, color: "black", textDecoration: "none" }}
        >
          Sign In
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
