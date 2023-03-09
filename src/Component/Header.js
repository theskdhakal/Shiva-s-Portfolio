import React from "react";

export const Header = () => {
  return (
    <nav className="navigation flex">
      <div className="left flex">
        <div className="name">
          <h1>Shiva</h1>
        </div>

        <div class="work">
          <h1>
            {"{"}Web developer{"}"}
          </h1>
        </div>
      </div>

      <div className="right flex">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="list flex">
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#"> Skills</a>
          </li>
          <li>
            <a href="#"> Projects</a>
          </li>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
