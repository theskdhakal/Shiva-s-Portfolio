import React from "react";
import me from "../asset/me.png";

export const About = () => {
  return (
    <section class="section5 flex">
      <h1>About me</h1>

      <div class="about-container grid">
        <div class="img flex">
          <div class="bg"></div>
          <img src={me} alt="" />
        </div>

        <div class="side flex">
          <h2>Shiva</h2>
          <div class="about">
            <p>I grew up in Nepal and currenlt living in sydney , Australia.</p>
            <h5>Sydney, Australia</h5>
            <a href="">Connect with me</a>
          </div>

          <div class="interest flex">
            <h4 class="title">Interest</h4>
            <div class="flex">
              <p>coding</p>
              <p>Travelling</p>
              <p>Movies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
