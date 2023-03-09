import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navigation flex">
      <div className="left flex">
        <div className="name">
          <h1>Shiva</h1>
        </div>

        <div className="work">
          <h1>Web developer</h1>
        </div>
      </div>

      <div className="right flex">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="list flex">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/skills"> Skills</Link>
          </li>
          <li>
            <Link to="/projects"> Projects</Link>
          </li>
          <li>
            <Link to="/about-me"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
