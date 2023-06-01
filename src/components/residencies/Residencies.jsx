import React from "react";

import "./residencies.css";

import data from "../../utils/slider";

import image from  '../../assets/image/swiper/swiper7.jpg'

export default function Residencies() {
    const swiper = document.getElementById('swiper')
    
    const prevScroll = () => {
        console.log('prevScroll')
    }
    const nextScroll = () => {
        console.log('nextScroll')
    }    
  return (
    <>
      <section className="residencies">
        <div className="residencies_container INNERWIDTH PADDING">
          <div className="residencies_container-head FLEXCOLSTART">
            <span className="ORANGETEXT">Best Choice</span>
            <span className="PRIMARYTEXT">Popular Residencies</span>

            <div className="residncies_container-swiper_buttons FLEXCENTER">
                <button onClick={prevScroll()} className="buttons-lhsb">&lt;</button>
                <button onClick={nextScroll()} className="buttons-rhsb">&gt;</button>
            </div>
          </div>





          {/* carosel */}

          <div id='swiper' className="residencies_container-swiper">


            {data.map((item, i) => {
              const { name, proce, dettail } = item;
              return (
                <div key={i} className="resicencies_container-swiper_card FLEXCOLSTART">
                  <img src={image} alt={name} />

                  <span className="card_price SECONDARYTEXT">
                        <span>$</span>
                        <span>{proce}</span>
                  </span>
                
                <span className="PRIMARYTEXT">
                    {name}
                </span>

                <span className="SECONDARYTEXT">
                    {dettail}
                </span>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
