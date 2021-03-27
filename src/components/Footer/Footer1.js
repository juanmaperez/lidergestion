import React from "react";
import { Link } from "gatsby";

import imgLB from "../../assets/image/logo_lidergestion-200.svg";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div className={`pb-13 pb-lg-10 ${className}`} {...rest}>
        <div className="container">
          <hr className="border-top border-default-color-2 m-0 p-0" />
          <div
            className="row pt-12 pt-lg-20 justify-content-center"
          >
            <div className="col-lg-3 col-md-5 col-md-3">
              <div className="pr-xl-20 mb-11 mb-lg-0">
                <div className="brand-logo mb-7 mb-lg-8">
                  <Link to="/#">
                    <img
                      className="mx-auto mx-0 light-version-logo default-logo"
                      src={imgLB}
                      alt=""
                    />
                    <img
                      className="dark-version-logo mx-auto mx-0"
                      src={imgLB}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 offset-lg-1">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-5">
                      Dónde encontrarnos
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-7">
                        <a
                          target="blank"
                          href="https://www.google.com/maps/place/CORREDURIA+DE+SEGUROS+LIDERGESTION/@37.3995173,-6.0373372,17z/data=!4m12!1m6!3m5!1s0xd126d1e81c7783d:0x6dc61e8930284ebf!2sCORREDURIA+DE+SEGUROS+LIDERGESTION!8m2!3d37.3995173!4d-6.0351485!3m4!1s0xd126d1e81c7783d:0x6dc61e8930284ebf!8m2!3d37.3995173!4d-6.0351485"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          Plaza Santa Ana <br/>
                          Nº 11 LOCAL 5 <br/> 
                          41900 Camas.Sevilla
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-5">
                      Cómo contactar
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a
                          href="tel:955981949"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          95 598 19 49                          
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="tel:625036750"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          625 036 750
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="tel:655927366"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          655 927 366
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="mailto:lidergestion10@hotmail.com"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          lidergestion10@hotmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-medium mb-5">
                      Páginas de interés
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          Contacto
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          Asistencia en carretera
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          Preguntas frequentes
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
