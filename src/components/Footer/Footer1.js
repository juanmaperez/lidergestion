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
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          Plaza Santa Ana <br/>
                          Nº 11 LOCAL 5 <br/> 
                          41900 Camas.Sevilla
                        </Link>
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
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          95 598 19 49                          
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          625 036 750
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          655 927 366
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="/#"
                          className="font-size-5 text-stone gr-hover-text-primary"
                        >
                          lidergestion10@hotmail.com
                        </Link>
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
