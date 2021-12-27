import React from "react";
import { Link, History } from "react-router-dom";
import axios from "axios";
export const NavBar = () => {
  const history = useHistory();
  const logOutBtn = async () => {
    axios.get("/auth/logout").then((resp) => {
      history.push("/");
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
        <button className="logOutBtn">LogOut</button>
      </div>
    </div>
  );
};
