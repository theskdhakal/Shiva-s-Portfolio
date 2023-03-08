import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div class="footer-container flex">
        <div class="top flex">
          <div class="links">
            <h2>LINKS</h2>
            <ul class="one">
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div class="external">
            <h2>EXTERNAL LINKS</h2>
            <ul>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        <div class="bottom flex">&Copy 2022! All rights reserved!</div>
      </div>
    </footer>
  );
};
