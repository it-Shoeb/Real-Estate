import React from "react";

import "./hero-section.css";

import hero from "../../assets/image/hero-section-tower.jpg";

export default function heroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero_container FLEXCENTER PADDING INNERWIDTH">
          {/* left hand side section */}
          <div className="hero_container-lhs FLEXCOLSTART">
            <div className="hero_container-lhs_title">
              <div className="hero_container-lhs_title-orangeCircle"></div>

              <h1>
                Lorem <br /> ipsum dolor <br /> sit amet.
              </h1>
            </div>

            <div className="hero_container-lhs-desc FLEXCOLSTART">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, perspiciatis!
              </span>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Soluta, perspiciatis!
              </span>
            </div>

            <div className="hero-container-lhs-searchBar FLEXCENTER">
              {/* <span></span> */}
              <input type="text" placeholder="Search Your Best Place" />
              <button className="BUTTON">Search</button>
            </div>

            <div className="stats FLEXCENTER">
              <div className="stat FLEXCOLCENTER">
                <span>
                  <span>9900</span>
                  <span>+</span>
                </span>
                <span className='SECONDARY_TEXT'>Premium Product</span>
              </div>
              <div className="stat FLEXCOLCENTER">
                <span>
                  <span>2000</span>
                  <span>+</span>
                </span>
                <span className='SECONDARY_TEXT'>Happy Customer</span>
              </div>
              <div className="stat FLEXCOLCENTER">
                <span>
                  <span>28</span>
                  <span>+</span>
                </span>
                <span className='SECONDARY_TEXT'>Award Winning</span>
              </div>
            </div>
          </div>

          {/* right hand side section */}
          <div className="hero_container-rhs FLEXCENTER">
            <div className="hero_container-rhs_image-container">
              <img
                src={hero}
                alt="a image of a building"
                className="hero_container-rhs_image-container_img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
