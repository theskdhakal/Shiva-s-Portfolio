import React from "react";
import a from "../asset/a.jpeg";
import b from "../asset/b.jpeg";
import c from "../asset/c.jpeg";

export const Projects = () => {
  return (
    <section className="section4 flex">
      <div className="title">
        <h2>My Projects</h2>
      </div>

      <div className="project-list grid">
        <div className="project flex">
          <div className="img">
            <img src={a} alt="" />
          </div>

          <div className="flex">
            <p>Dec. 21, 2022</p>
            <h4>Full stack web Application built using React and firebase</h4>
          </div>
        </div>
        <div className="project flex">
          <div className="img">
            <img src={b} alt="" />
          </div>

          <div className="flex">
            <p>Dec. 21, 2022</p>
            <h4>Full stack web Application built using React and firebase</h4>
          </div>
        </div>
        <div className="project flex">
          <div className="img">
            <img src={c} alt="" />
          </div>

          <div className="flex">
            <p>Dec. 21, 2022</p>
            <h4>Full stack web Application built using React and firebase</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
