import React from "react";

export const Header = () => {
  return (
    <nav class="navigation flex">
      <div class="left flex">
        <div class="name">
          <h1>Shiva</h1>
        </div>

        <div class="work">
          <h1>Web developer</h1>
        </div>
      </div>

      <div class="right flex">
        <input type="checkbox" id="check" />
        <label for="check" class="menu-icon">
          <i class="fa-solid fa-bars"></i>
        </label>
        <ul class="list flex">
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
