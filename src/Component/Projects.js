import React from "react";
import a from "../asset/a.jpeg";
import b from "../asset/b.jpeg";
import c from "../asset/c.jpeg";

export const Projects = () => {
  return (
    <section class="section4 flex">
      <div class="title">
        <h2>My Projects</h2>
      </div>

      <div class="project-list grid">
        <div class="project flex">
          <div class="img">
            <img src={a} alt="" />
          </div>

          <div class="flex">
            <p>Dec. 21, 2022</p>
            <h4>Full stack web Application built using React and firebase</h4>
          </div>
        </div>
        <div class="project flex">
          <div class="img">
            <img src={b} alt="" />
          </div>

          <div class="flex">
            <p>Dec. 21, 2022</p>
            <h4>Full stack web Application built using React and firebase</h4>
          </div>
        </div>
        <div class="project flex">
          <div class="img">
            <img src={c} alt="" />
          </div>

          <div class="flex">
            <p>Dec. 21, 2022</p>
            <h4>Full stack web Application built using React and firebase</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
