import React from "react";

import imgP from "../../assets/image/home-2/png/patterns-dot-green.png";
import imgH from "../../assets/image/home-2/png/right-circlehalf-shape.png";

const Content2 = ({ className, ...rest }) => {
  const { title, image, highlight: highlights } = rest

  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left */}
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-xs-8 order-2 order-md-1"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <h2 className="font-size-11">{ title }</h2>
              { highlights && (
                <ul className="list-unstyled mt-9 mt-lg-14">
                  { highlights.map(({ icon, title, description }) => {
                    return (
                      <li className="media align-items-center mb-12" key={title}>
                        { icon && (
                          <div className="border square-83 rounded-10 mr-9">
                            <img width="36" src={icon.sourceUrl} alt={title} />
                          </div>
                        )}
                        <div className="content">
                          <h5>{title}</h5>
                          <p className="font-size-5 line-height-28 mb-0">
                            { description }
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {/* Left End */}
            {/* Right */}
            <div
              className="col-xl-6 offset-xl-2 col-lg-7 col-md-6 col-xs-8 order-1 order-md-2"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <div className="l2-content-image-group-2 mb-10 mb-md-0 rounded-10">
                <div className="img-1 position-relative text-right rounded-10">
                  { image && <img className="mw-100 w-lg-auto" src={image.sourceUrl} alt={title} />}
                  <div className="img-2">
                    <img className="w-100" src={imgP} alt="" />
                  </div>
                  <div className="img-3">
                    <img className="w-100 opacity-7" src={imgH} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content2;
