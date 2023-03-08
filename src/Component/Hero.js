import React from "react";
import me from "../asset/me.png";
import resume from "../asset/resume.docx";

export const Hero = () => {
  return (
    <>
      {" "}
      <div class="section1 grid">
        <div class="pic flex">
          <img src={me} alt="" />
        </div>

        <div class="content flex">
          <div class="flex">
            <h2 class="first">Shiva</h2>
            <p class="tag">Web developer</p>
          </div>

          <button>
            <a href={resume} download={true}>
              Download CV{" "}
              <span>
                <i class="fa-solid fa-angle-down"></i>
              </span>
            </a>
          </button>
        </div>
      </div>
      <section class="section2 flex">
        <div class="container flex">
          <div class="info-list flex">
            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
            <div class="info-divider"></div>

            <div class="info-content flex">
              <div class="icon-container flex">
                <i class="fa-solid fa-award"></i>
              </div>
              <span>
                <h5>IT</h5>
                <p>Graduate</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
