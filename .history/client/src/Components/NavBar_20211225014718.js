import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header id="header">
      <div className="container">
        <nav className="nav-main row">
          <ul className="row">
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>logo</Link>
            </li>
          </ul>
          <ul>
            <li className="nav-contact pill">
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
