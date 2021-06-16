import React from "react";
import { useMutation } from '@apollo/client';
import { gql } from "graphql-tag"
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .required("Tu nombre es obligatorio"),
  phone: Yup.number('Debe ser un número').min(99999999).required("El teléfono es obligatorio"),
  email: Yup.string().email().required('El email es obligatorio'),
  message: Yup.string().required('Debes dejar alguna consulta')
});

const sendEmail = gql`
	mutation SEND_EMAIL($id: String!, $body: String!, $subject: String! ) {
		sendEmail(
			input: {
				to: "lidergestion10@hotmail.com"
				from: "info@seguroslidergestion.com"
				subject: $subject
				body: $body
				clientMutationId: $id
	}){
		origin
		sent
		message
	}
}`

const ContactForm = ({ className, title, subtitle, emails, contactdetails, phones, subject }) => {
  const [sent, setSent] = React.useState(false)
	const [error, setError] = React.useState(null)
	const [SEND_EMAIL, {loading}] = useMutation(sendEmail)

  const handleOnSubmit = async ({name, phone, message, email, subject: title }, { resetForm }) => {
		const subject = `Un cliente pregunta por un ${title}`
		const body = `
			<h1>Piden información desde la página o asunto: ${title}</h1>
			<p>Un nuevo cliente llamado <strong>${name}</strong> quiere más información sobre: <strong>${title}</strong></p>
			<p>Puedes contactarlo en el número <strong>${phone}</strong> o en el email <strong>${email}</strong>.
      <p>Esta es la consulta del cliente:</p>
      <p><strong>${message}</strong></p>
			<p>Gracias,</p>
		`
		const id = uuidv4()
		const { data } = await SEND_EMAIL({variables: { id, body, subject}})
		if (data.sendEmail && data.sendEmail.sent) {
			setError(null)
			setSent('Gracias por tu mensaje. Nos pondremos pronto en contacto contigo')
			resetForm({
				name: '',
				phone: '',
				email: '',
        subject: title,
        message: ''
			})
		} else {
			setError('Hubo un error enviando el formulario. Inténtalo más tarde')
			setSent(null)
		}
	}

  return (
    <div className={className}>
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
        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-12">

            { contactdetails && (
              <div
                className="top-contact-info bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10"
                data-aos="fade-up"
                data-aos-duration={600}
                data-aos-once="true"
              >
                <div className="row">
                  <div className="col-lg-12 mb-5 mb-lg-4 mt-lg-4 mt-5">
                    <div className="p-1">
                      <a 
                        style={{lineHeight: '1.2em'}}
                        className="d-block font-size-6 font-weight-bold heading-default-color" 
                        href="https://www.google.com/maps/place/CORREDURIA+DE+SEGUROS+LIDERGESTION/@37.3995173,-6.0373372,17z/data=!4m12!1m6!3m5!1s0xd126d1e81c7783d:0x6dc61e8930284ebf!2sCORREDURIA+DE+SEGUROS+LIDERGESTION!8m2!3d37.3995173!4d-6.0351485!3m4!1s0xd126d1e81c7783d:0x6dc61e8930284ebf!8m2!3d37.3995173!4d-6.0351485" 
                        target="_blank" rel="noopener noreferrer">
                        Plaza Santa Ana Nº 11 LOCAL 5                           
                        <br/>41900 Camas. Sevilla
                      </a>
                    </div>
                  </div>
                  { emails && (
                    <div className="col-lg-12 mb-5 mb-lg-4">
                      <div className="p-1">
                        { emails.map(({ address }) => (
                          <a
                            className="d-block font-size-6 font-weight-bold heading-default-color"
                            href={`mailto:${address}`}
                          >
                            { address }
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  { phones && (
                    <div className="col-lg-12 mb-5 mb-lg-4">
                      <div className="p-1">
                        { phones.map(({ phonenumber }, index) => (
                          <>
                          { index > 0 && <span>&nbsp;-&nbsp;</span> }
                          <a
                            style={{lineHeight: '1.2em'}}
                            className="font-size-6 font-weight-bold heading-default-color"
                            href={`tel:${phonenumber}`}
                          >
                            { phonenumber }
                          </a>
                          </>
                        ))}
                        <p className="font-size-4 mt-0">Puedes contactarnos por Whatsapp si lo prefieres</p>
                      </div>
                    </div>
                  )}
                
                </div>
              </div>
            )}

            <div className="pt-12 pb-10 max-w-536 mx-auto">
              <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  subject: subject, 
                  message: ''
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={handleOnSubmit}
              >
                {({
                  values,
                  errors,
                  handleSubmit,
                  handleBlur,
                  handleChange
                }) => (
                  <form
                    name="contact"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                    data-aos-once="true"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Nombre"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                      />
                      { errors.name && <span className="alert alert-danger mt-2 p-4">{errors.name}</span>}
                    </div>
                    {/* Email */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      { errors.email && <span className="alert alert-danger mt-2 p-4">{errors.email}</span>}

                    </div>
                    {/* Company Name */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="number"
                        name="phone"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Teléfono"
                        id="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      { errors.phone && <span className="alert alert-danger mt-2 p-4">{errors.phone}</span>}
                    </div>

                    <div className="form-group mb-7 position-relative">
                      <input
                        type="hidden"
                        name="subject"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Asunto"
                        id="subject"
                        value={values.subject}
                      />
                      
                    </div>
                    {/* Company Name */}
                    <div className="form-group mb-7 position-relative">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Deja tu consulta"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 pt-7 font-size-5 border-default-color"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      { errors.message && <span className="alert alert-danger mt-2 p-4">{errors.message}</span>}
                    </div>
                    <div className="button">
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-blue-3 h-55 w-100 rounded-4"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              {(error || sent) && (
                <div className={`${error ? 'alert-danger': 'alert-success'} alert header__alert mt-2 p-8 max-w-536 mx-auto`}>
                  { error || sent }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
