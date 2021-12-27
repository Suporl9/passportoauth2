import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header id="header">
      <div className="container">
        <nav className="nav-main row">
          <ul className="row">
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">logo</a>
            </li>
          </ul>
          <ul>
            <li classNameName="nav-contact pill">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
