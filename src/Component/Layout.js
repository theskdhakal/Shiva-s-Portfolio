import React, { Children } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Layout = ({ children }) => {
  return (
    <>
      <input type="checkbox" id="darkmode" className="dark-mode-checkbox" />

      <div className="wrapper">
        <label htmlFor="darkmode">
          <i className="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        <Header />

        {/* dynamic page container  */}
        {children}
        <Footer />
      </div>
    </>
  );
};
