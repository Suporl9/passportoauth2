import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav">
      {/* <input type="checkbox" id="nav-check" /> */}
      <div className="nav-header">
        <div className="nav-title">JoGeek</div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="//github.io/jo_geek" target="_blank">
          Github
        </Link>
        <Link to="http://stackoverflow.com/users/4084003/" target="_blank">
          Stackoverflow
        </Link>
      </div>
    </div>
  );
};
