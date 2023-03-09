import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container flex">
        <div className="top flex">
          <div className="links">
            <h2>LINKS</h2>
            <ul className="one">
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="external">
            <h2>EXTERNAL LINKS</h2>
            <ul>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        <div className="bottom flex">&Copy 2022! All rights reserved!</div>
      </div>
    </footer>
  );
};
