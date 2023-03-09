import React from "react";
import me from "../asset/me.png";
import resume from "../asset/resume.docx";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
      {" "}
      <div className="section1 grid">
        <div className="pic flex">
          <img src={me} alt="" />
        </div>

        <div className="content flex">
          <div className="flex">
            <h2 className="first">Shiva</h2>
            <p className="tag">Web developer</p>
          </div>

          <button>
            <a href={resume} download={true}>
              Download CV{" "}
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </a>
          </button>
        </div>
      </div>
      <section className="section2 flex">
        <div className="container flex">
          <div className="info-list flex">
            <div className="info-content flex">
              <div className="icon-container flex">
                <i className="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
            <div className="info-divider"></div>

            <div className="info-content flex">
              <div className="icon-container flex">
                <i className="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
            <div className="info-divider"></div>

            <div className="info-content flex">
              <div className="icon-container flex">
                <i className="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
            <div className="info-divider"></div>

            <div className="info-content flex">
              <div className="icon-container flex">
                <i className="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
