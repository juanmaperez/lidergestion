import React from "react";

import imgA1 from "../../assets/image/home-2/png/arrow-1.png";
import imgA2 from "../../assets/image/home-2/png/arrow-2.png";

const Progress = ({ className, ...rest }) => {
  const { title, steps } = rest
  return (
    <>
      <div className={className} >
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="text-center pt-13 pt-lg-23 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className="font-size-11 mb-0">
                  { title }
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Section Title --> */}
          {/* <!-- Progress Items --> */}
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xs-8">
              <div className="timeline-area d-sm-flex just justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
                {/* <!-- Image Group --> */}
                <div className="image-group-3">
                  <div
                    className="arrow-shape-1 d-none d-lg-block absolute-top-left"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <img src={imgA1} alt="" />
                  </div>
                  <div
                    className="arrow-shape-2 d-none d-lg-block absolute-top-right"
                    data-aos="zoom-in"
                    data-aos-delay="1100"
                    data-aos-once="true"
                  >
                    <img src={imgA2} alt="" />
                  </div>
                </div>
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  { steps[0].icon && (
                    <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 mx-auto mx-md-0">
                      <img width="36" src={steps[0].icon.sourceUrl} alt={steps[0].title} />
                    </div>
                  )}
                  <div className="">
                    <h3 className="font-size-8 mb-6">{steps[0].title}</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      { steps[0].description}
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-once="true"
                >
                  { steps[1].icon && (
                    <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 mx-auto mx-md-0">
                      <img width="36" src={steps[1].icon.sourceUrl} alt={steps[1].title} />
                    </div>
                  )}
                  <div className="">
                    <h3 className="font-size-8 mb-6">{steps[1].title}</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      { steps[1].description}
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  data-aos-once="true"
                >
                  { steps[2].icon && (
                    <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10  mx-auto mx-md-0">
                      <img width="36" src={steps[2].icon.sourceUrl} alt={steps[2].title} />
                    </div>
                  )}
                  <div className="">
                    <h3 className="font-size-8 mb-6">{steps[2].title}</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      { steps[2].description}
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Progress Items --> */}
        </div>
      </div>
    </>
  );
};

export default Progress;
