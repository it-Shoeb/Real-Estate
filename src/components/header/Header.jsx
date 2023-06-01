import React from "react";

import logo from "../../assets/image/homelanderLogo.jpg";

import './header.css'

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="header_container FLEXCENTER PADDING INNERWIDTH">
          <img src={logo} alt="logo" width={"50px"} />

          <div className="header_container-menu FLEXCENTER">
            <a href="/">Residencies</a>
            <a href="/">Our Values</a>
            <a href="/">Contact Us</a>
            <a href="/">Get Started</a>
            <button className="BUTTON">
              <a href="/">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
