import React from "react";

import imgDot from "../../assets/image/home-1/png/dot-bg.png";

const ContentRight = ({ className, ...rest }) => {
  console.log(rest)
  const { title, short, content, image, form } = rest
  return (
    <>
      <div className={className} >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Image Section */}
            <div className="col-xl-6 col-lg-5 col-md-7 col-xs-10">
              <div
                className="l1-content-image-group-1 mb-10 mb-lg-0"
                data-aos="fade-right"
                data-aos-duration={500}
                data-aos-once="true"
              >
                { image && <img className="mw-100" src={image.sourceUrl} alt="" />}
                <div className="abs-img-1">
                  <img className="w-100" src={imgDot} alt="" />
                </div>
              </div>
            </div>
            {/* Content Section */}
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
              <div
                className="ml-lg-10 ml-xl-12 mt-lg-n20 pr-lg-10 pr-xl-10"
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={300}
                data-aos-once="true"
              >
                <h6 className="font-size-5 text-light-orange mb-5 mb-lg-9 font-weight-normal">
                  { short }
                </h6>
                <h3 className="font-size-11 mb-5 mb-lg-8 font-weight-medium pr-sm-20 pr-md-16 pr-lg-0">
                  { title }
                </h3>
                <div className="font-size-6 mb-0" dangerouslySetInnerHTML={{__html: content}}>

                </div>
                {/* newsletter */}
                { form && (
                  <div
                    className="mt-8 mt-lg-16"
                    data-aos="fade-left"
                    data-aos-duration={800}
                    data-aos-delay={500}
                    data-aos-once="true"
                  >
                    <div className="shadow-3 bg-white rounded-0">
                      <form action="/">
                        <div className="subscribe-inline-form">
                          <div className="form-group">
                            <input
                              id="subject"
                              type="number"
                              className="form-control d-none"
                              value={ title }
                            />
                            <label htmlFor="phone">
                              <i className="icon icon-phone-2 mb-0 text-bali-gray font-weight-bold" />
                            </label>
                            <input
                              id="phone"
                              type="number"
                              className="form-control"
                              placeholder="Deja tú teléfono"
                            />
                          </div>
                          <button className="btn btn-primary">Te llamamos</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {/* End newsletter */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentRight;
