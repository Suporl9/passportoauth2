import React from "react";

export const NavBar = () => {
  return (
    <header id="header">
      <div className="container">
        <nav className="nav-main row">
          <ul className="row">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
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
