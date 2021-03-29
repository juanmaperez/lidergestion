import React from "react";
import { Link } from 'gatsby'

const Faq = ({className, ...rest}) => {
  const { title, subtitle, icon, ordered, faqsitems} = rest
  return (
    <div className={className}>
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="text-center mb-13 mb-lg-19">
              { title && <h2 className="font-size-11 mb-7">{ title }</h2>}
              { subtitle && (
                <p className="font-size-7 mb-0">
                  { subtitle }
                </p>
              )}
            </div>
          </div>
        </div>
        {/* End Section Title */}
        {/* Faqs */}
        {/* Faqs */}
        <div className="row justify-content-center">
          {/* Single Faq */}
          <div className="offset-lg-1 col-lg-10 col-md-10 offset-md-0">
            <div className="row">
              { faqsitems && faqsitems.map((({ question, answer }, index) => (
                <div key={ question } className="col-lg-6 col-md-10">
                  <div
                    className="d-flex mb-10 mb-lg-17"
                    data-aos="fade-up"
                    data-aos-duration={300}
                  >
                    <div className="mr-6">
                      <div className="bg-light-orange circle-28 text-white mt-1">
                        { icon 
                          ? <img width="20" src={icon.sourceUrl} alt="icon" />
                          : ordered 
                          ? <span className="font-size-9">{index + 1}</span>
                          : <i className="fa fa-question" /> 
                        }
                      </div>
                    </div>
                    <div className="">
                      <h4 className="font-size-7 mb-7">
                        { question }
                      </h4>
                      <div className="font-size-5 pr-md-10 pr-lg-0 mb-0" dangerouslySetInnerHTML={{__html: answer}}></div>
                    </div>
                  </div>
                </div>
              )))}
            </div>
          </div>
        
         
        </div>
        {/* Button  */}
        <div
          className="text-center pt-lg-3 pb-lg-3"
          data-aos="fade-up"
          data-aos-duration={500}
        >
          <p className="font-size-6 mb-0">
            Si todavía tienes alguna duda,
            <Link className="text-blue-3 btn-link-with-underline ml-5" to="/contacto">
              contacta con nosotros
            </Link>
          </p>
        </div>
        {/* Button End */}
      </div>
    </div>
  );
};

export default Faq;
