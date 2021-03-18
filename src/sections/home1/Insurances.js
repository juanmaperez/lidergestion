import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "gatsby";

const items = [
  {
    title: "Seguro de coche",
    image: "icon-roadmap",
  },
  {
    title: "Seguro de salud",
    image: "icon-heart-2",
  },
  {
    title: "Seguro de vida",
    image: "icon-leaf-80-2",
  },
  {
    title: "Seguro de hogar",
    image: "icon-home",
  },
  {
    title: "Seguro de viajes",
    image: "icon-airplane-2",
  },
  {
    title: "Seguro de impagos",
    image: "icon-energy",
  },
];

const Insurances = ({ className, ...rest }) => {
  const elSlider = useRef();

  const slickSettings = {
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="mb-8 mb-lg-5">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-9">
                <div
                  className="mb-8 mb-lg-16 mb-md-0 text-center text-md-left"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <span className="bg-dodger-blue-2-op1 circle-84 font-size-9 mb-5 mb-lg-11 mx-auto mx-md-0">
                    <i className="fa fa-heart text-dodger-blue-2"></i>
                  </span>
                  <h2 className="font-size-11 mb-0">
                    Los seguros que aman nuestros clientes.
                  </h2>
                </div>
              </div>
              <div
                className="col-lg-5 col-md-3"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <div className="testimonial-one-button text-center text-md-right mt-3 mt-md-18">
                  <button
                    type="button"
                    className="slick-prev"
                    onClick={() => {
                      elSlider.current.slickPrev();
                    }}
                  >
                    <i className="icon icon-minimal-left"></i>
                  </button>
                  <button
                    type="button"
                    className="slick-next"
                    onClick={() => {
                      elSlider.current.slickNext();
                    }}
                  >
                    <i className="icon icon-minimal-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Section Title --> */}
          {/* <!-- category slider --> */}
          <div className="row">
            <div className="col-12">
              <div className="testimonial-one">
                <Slider
                  ref={elSlider}
                  {...slickSettings}
                  css={`
                    .slick-dots {
                      display: flex !important;
                    }
                  `}
                >
                {items.map(({ link = "/#", title, image }, index) => (
                  <div className="single-category focus-reset" key={index}>
                    <Link
                        href={link}
                        className="single-category mx-9 mx-lg-7 focus-reset slick-slide"
                        tabIndex="-1"
                      >
                        <div className="bg-white shadow-2 pl-10 pr-5 pt-19 pb-6 min-w-255 min-h-222 gr-hover-1 mb-15 mb-lg-25">
                          <div className="mb-1">
                            <span className="font-size-8">
                              <i className={`icon ${image} text-blue font-weight-bold`}></i>
                            </span>
                          </div>
                          <h4 className="font-size-7 font-weight-medium text-dark-cloud mb-1">
                            {title}
                          </h4>
                        </div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* <!-- End category slider --> */}
        </div>
      </div>
    </>
  );
};

export default Insurances;
