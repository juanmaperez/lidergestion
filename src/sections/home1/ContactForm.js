import React from "react";

const ContactForm = ({ title, subtitle, emails, whatsapps, phones }) => {
  console.log(phones, whatsapps)
  return (
    <div className="min-height-100vh d-flex align-items-center pt-23 pt-md-26 pt-lg-30 pb-8 pb-md-12 pb-lg-23">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div
              className="mb-10 mb-lg-18 text-center"
              data-aos="fade-up"
              data-aos-duration={300}
              data-aos-once="true"
            >
              <h2 className="font-size-11 mb-7">{ title }</h2>
              <p className="font-size-7 mb-0">
                { subtitle }
              </p>
            </div>
          </div>
        </div>
        {/* End Section Title */}
        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-12">
            {/* contact details */}
            <div
              className="top-contact-info bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-once="true"
            >
              <div className="row">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="border-md-right border-cornflower-blue">
                    <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                      Llámanos
                    </h4>
                    { phones && phones.map(({ phonenumber }) => (
                      <a
                        className="d-block font-size-5 font-weight-bold heading-default-color"
                        href="/#"
                      >
                        { phonenumber }
                      </a>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="pl-1 pr-3">
                    <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                      Envía un email
                    </h4>
                    { emails && emails.map(({ address }) => (
                      <a
                        className="d-block font-size-5 font-weight-bold heading-default-color"
                        href="/#"
                      >
                        { address }
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* contact details */}
            <div className="pt-12 pb-10 max-w-536 mx-auto">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-aos="fade-up"
                data-aos-duration={1100}
                data-aos-once="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                {/* Company Name */}
                <div className="form-group mb-7 position-relative">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                    placeholder="Nombre"
                    id="company"
                    required
                  />
                </div>
                {/* Email */}
                <div className="form-group mb-7 position-relative">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </div>
                {/* Company Name */}
                <div className="form-group mb-7 position-relative">
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                    placeholder="Teléfono"
                    id="phone"
                    required
                  />
                </div>
                {/* Company Name */}
                <div className="form-group mb-7 position-relative">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Deja tu consulta"
                    className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 pt-7 font-size-5 border-default-color"
                    defaultValue={""}
                    required
                  />
                </div>
                <div className="button">
                  <button
                    type="submit"
                    href="/#"
                    className="btn btn-blue-3 h-55 w-100 rounded-4"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
