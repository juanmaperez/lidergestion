import React from "react";
import Slider from "react-slick";

import imgCR from "../../assets/image/home-6/png/l6-cutomer-review-shape.png";
import imgRS from "../../assets/image/home-6/png/l6-review-star.png";

const Testimonial = ({ className, ...rest }) => {
  const { title, subtitle, testimonial: testimonials } = rest
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="l6-shape-2 absolute-top-right mt-28 mr-n15">
          <img src={imgCR} alt="reviews" />
        </div>
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="text-center mb-13 mb-lg-21">
                <h2 className="font-size-11 mb-7">{ title }</h2>
                <p className="font-size-7 mb-0 px-xl-10">
                  { subtitle }
                </p>
              </div>
            </div>
          </div>
          {/* End Section Title */}
          <div className="row">
            <div className="col-12">
              <Slider
                {...slickSettings}
                css={`
                  .slick-slide {
                    margin: 0 1rem;
                  }
                  .slick-dots {
                    display: flex !important;
                  }
                `}
                className="l6-testimonial"
              >
                {/* Single Testimonial */}

                { testimonials.map(({ name, rating, text, avatar, insurance}) => (
                  <div key="text" className="single-testimoial bg-white border border-default-color-5 rounded-10 pt-5 pb-4 pt-sm-11 pt-md-11 pb-sm-10 pb-md-10 pl-5 pl-sm-11 pl-md-11 pr-6 pr-md-12 mx-md-0 focus-reset">
                    <div className="mb-10">
                      <img src={imgRS} alt={rating} />
                    </div>
                    <p className="font-size-8 mb-13 pr-sm-5 pr-md-0 pr-xl-4 text-dark-cloud">
                      { text }
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="mr-6">
                        <img src={avatar.sourceUrl} alt={name} />
                      </div>
                      <div className="info">
                        <h5 className="font-size-7 text-dark-cloud mb-0">
                          { name }
                        </h5>
                        <div className="font-size-5 text-stone mb-0">
                          { insurance }
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
