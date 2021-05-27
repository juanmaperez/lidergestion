import React from "react";

import imgA from "../../assets/image/home-1/png/arrow-down-big.png";
import { HeroForm } from './HeroForm'



const Hero = ({ className, ...rest }) => {
  const { title, subtitle, textColor, backgroundImage, form } = rest

  console.log(backgroundImage)

  return (
    <div className={className}>
      <div className="pt-15 pt-lg-20">
        <div
          className={`bg-img-1 bg-images pt-18 pt-lg-25 pt-xl-33 mx-lg-13 mx-xl-15 bg-gradient-2 ${form ? 'reduced' : ''}`}
          style={{ background: backgroundImage ? `url(${backgroundImage.sourceUrl})` : '#000', backgroundPosition: 'bottom center', backgroundSize: 'cover'}}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="dark-mode-texts">
                  <h1 className="font-size-12 mb-8" style={{ color:`${textColor}` }}>
                    { title }
                  </h1>
                  <p className="font-size-7 mb-0" style={{ color: textColor }}>
                    { subtitle }
                  </p>
                  <span className="pt-11" to="/">
                    { textColor === "#ffffff" && <img src={imgA} alt="arrow" />}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 p-0">
                <div className="mt-13 mt-lg-18 mt-xl-23 w-100 shadow-1">
                  { form && <HeroForm />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
