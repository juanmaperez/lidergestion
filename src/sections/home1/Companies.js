import React from "react";

const SingleBrand = ({image, name}) => {
  return (
    <>
      {/* Single Brand */}
      <div className="single-brand-logo mx-5 my-6">
        <img src={image} alt={name} data-aos="fade-in" data-aos-once="true" />
      </div>
      {/* Single Brand */}
    </>
  );
}

const Company = ({ className, ...rest }) => {
  const { title, company: companies } = rest
  
  return (
    <>
      {/* Company Section */}
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-lg-8 text-center text-lg-center">
                <h5 className="font-size-6 font-weight-normal text-bali-gray">
                 { title }
                </h5>
              </div>
            </div>
          </div>
          {/* Brand Logos */}
          <div className="brand-logo-small d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap">
            { companies.map(({ name, logo}) => (
              <SingleBrand image={logo ? logo.sourceUrl :  null} name={name} key={name} />
            ))}
          </div>
        </div>
      </div>
      {/* End Company Section */}
    </>
  );
};

export default Company;
