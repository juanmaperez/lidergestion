import React, { useState } from "react";
import { Link } from 'gatsby'
import sectionShape from "../../assets/image/svg/footer-shape.svg";

const Pricing = ({ className, ...rest }) => {
  const { title, lists } = rest;
  const [plan, setPlan] = useState(Array.isArray(lists) ? 0 : null);

  return (
    <div className={`position-relative ${className}`} >
      <div className="container">
        {/* Section Title */}
        <div className="mb-13 mb-lg-13">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div
                className="mb-10 mb-lg-0 text-center text-lg-left"
                data-aos="fade-right"
                data-aos-delay={500}
              >
                <h2 className="font-size-10 pr-md-10 pr-xl-0 mb-0">
                  { title }
                </h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6 text-center text-md-right">
              <div
                className="btn-section"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <div className="btn-toggle-square active mx-3 price-deck-trigger rounded-10 bg-golden-yellow">
                  { Array.isArray(lists) && lists.map((list, index) => (
                    <button
                      key={list.title}
                      className={`text-break btn-reset focus-reset ${plan ===
                        index && "active"}`}
                      onClick={() => setPlan(index)}
                    >
                      { list.title }
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Title */}

        {/* Table Main Body */}
        <div className="table-body">
          <div className="row justify-content-center">
            { Array.isArray(lists[plan].offer) && lists[plan].offer.map(({ name, highlights, price }, index) => {
              return (
                <div className="col-lg-12 col-sm-6" key={name}>
                  <div
                    className="border-top pt-10 pb-8"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="mb-5 mb-lg-0">
                          <h3 className="font-size-7">{name}</h3>
                        </div>
                      </div>
                      <div className={ price ? "col-lg-3" : "col-lg-6"}>
                        <div className="">
                          <ul className="list-unstyled font-size-6">
                            { highlights && highlights.map((highlight, index) => (
                              <li
                                className="heading-default-color mb-4"
                                key={name + highlight.title + index}
                              >
                                {highlight.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      { price && (
                        <div className="col-lg-3">
                          <div className="pr-lg-15 pr-xl-10 mb-5 mb-lg-0">
                            <p className="mb-0 font-size-5 pr-xl-22">
                              desde  
                            </p>
                            <h2 className="mb-0 font-size-11 font-weight-medium">
                              { price} €
                            </h2>
                          </div>
                        </div>
                      )}
                      <div className="col-lg-3">
                        <div className="mb-5 mb-lg-0 mt-4 text-left text-lg-right">
                          <Link
                            className="btn btn-outline-gray-1 btn-2 border-width-2 rounded-5 gr-hover-bg-blue-3 heading-default-color"
                            to={`/contacto?subject=${title}-${name}`}
                          >
                            Consúltanos
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Table Main Body */}
      </div>
      <div className="pricing-bottom-shape d-none d-sm-block">
        <img
          src={sectionShape}
          alt=""
          data-aos="fade-left"
          data-aos-delay={500}
        />
      </div>
    </div>
  );
};

export default Pricing;
