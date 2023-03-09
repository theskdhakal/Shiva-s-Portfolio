import React from "react";
import me from "../asset/me.png";
import { Layout } from "./Layout";

export const About = () => {
  return (
    <Layout>
      <section className="section5 flex">
        <h1>About me</h1>

        <div className="about-container grid">
          <div className="img flex">
            <div className="bg"></div>
            <img src={me} alt="" />
          </div>

          <div className="side flex">
            <h2>Shiva</h2>
            <div className="about">
              <p>
                I grew up in Nepal and currenlt living in sydney , Australia.
              </p>
              <h5>Sydney, Australia</h5>
              <a href="">Connect with me</a>
            </div>

            <div className="interest flex">
              <h4 className="title">Interest</h4>
              <div className="flex">
                <p>coding</p>
                <p>Travelling</p>
                <p>Movies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
