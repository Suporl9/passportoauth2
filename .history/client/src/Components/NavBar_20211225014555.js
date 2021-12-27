import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
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
            <Link>logo</Link>
          </li>
        </ul>
        <ul>
          <li classNameName="nav-contact pill">
            <Link>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
