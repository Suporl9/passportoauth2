import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav">
      {/* <input type="checkbox" id="nav-check" /> */}
      <div className="nav-header">
        <div className="nav-title">OAUTH2WithPASSPORT</div>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
