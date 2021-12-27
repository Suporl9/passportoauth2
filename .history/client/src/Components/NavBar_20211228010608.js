import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
export const NavBar = () => {
  const logOutBtn = async () => {
    axios.get("/auth/logout").then((resp) => {
      if (resp.data) {
        window.location.href = "/";
      }
    });
  };
  return (
    <div className="nav">
      {/* <input type="checkbox" id="nav-check" /> */}
      <div className="nav-header">
        <div className="nav-title">OAUTH2WithPASSPORT</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button className="logOutBtn" onClick={logOutBtn}>
          LogOut
        </button>
      </div>
    </div>
  );
};
