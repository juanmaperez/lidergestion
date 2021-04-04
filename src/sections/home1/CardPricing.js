import React from "react";
import { Link } from 'gatsby'

const CardPricing = ({ className, title, subtitle, cards, subject, priceannotation }) => {
  return (
    <div className={className}>
      <div>
        <div className="container">
          {/* Section Padding */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-11">
              <div
                className="text-center mb-10 mb-lg-23"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-delay={500}
              >
                <h2 className="font-size-11 mb-7">{ title }</h2>
                <p className="font-size-7 mb-0">
                  { subtitle }
                </p>
              </div>
            </div>
          </div>
          {/* End Section Padding */}
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row justify-content-center">
            {/* Single Table */}
            { cards && cards.map(({ name, highlights, price, description}) => (
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                <div
                  className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  { name && (
                    <h4 className="font-size-7 text-dodger-blue-1">
                      { name }
                    </h4>
                  )}
                  { description && (
                    <p className="font-size-5 mb-7 text-stone">
                      { description }
                    </p>
                  )}
                  { price && (
                    <h2 className="font-size-11 mb-1">
                      { price }€ 
                      { priceannotation && <span className="font-size-5 text-stone">
                        &nbsp;/ { priceannotation }
                      </span>}
                    </h2>
                  )}
                  <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                    { highlights && highlights.map(({title}) => (
                      <li className="mb-7">
                        <i className="fa fa-check mr-4 text-dodger-blue-1" />
                        { title }
                      </li>
                    ))}
                  </ul>
                  <div className="pt-7 pt-lg-10">
                    <Link className="btn btn-blue-3 btn-2 rounded-5" to={`/contacto?subject=${subject}-${name}`}>
                      Pregunta ahora
                    </Link>
                  </div>
                </div>
              </div>
            ))} 
            
            {/* End Single Table */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPricing;
