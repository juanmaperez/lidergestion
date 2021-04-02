import React from "react";
import imgDot from "../../assets/image/home-1/png/dot-bg.png";
import { useMutation } from '@apollo/client';
import { gql } from "graphql-tag"
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email()
    .required("El email es obligatorio")
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

const ContentRight = ({ className, ...rest }) => {
  const [sent, setSent] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [SEND_EMAIL, {loading}] = useMutation(sendEmail)
  
  const { title, short, content, image, form, subject } = rest

  const handleOnSubmit = async ({ email, subject: title }, { resetForm }) => {
		const subject = `Un cliente pregunta por un ${title}`
		const body = `
			<h1>Piden información desde la página o asunto: ${title}</h1>
			<p>Un usuario ha pedido información sobre: <strong>${title}</strong></p>
			<p>Puedes enviarle información a la dirección de email <strong>${email}</strong>.
			<p>Gracias,</p>
		`
		const id = uuidv4()
		const { data } = await SEND_EMAIL({variables: { id, body, subject}})
		if (data.sendEmail && data.sendEmail.sent) {
			setError(null)
			setSent('Gracias por tu mensaje. Nos pondremos pronto en contacto contigo')
			resetForm({
				email: '',
        subject: title,
			})
		} else {
			setError('Hubo un error enviando el formulario. Inténtalo más tarde')
			setSent(null)
		}
	}

  return (
    <>
      <div className={className} >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Image Section */}
            <div className="col-xl-6 col-lg-5 col-md-7 col-xs-10">
              <div
                className="l1-content-image-group-1 mb-10 mb-lg-0"
                data-aos="fade-right"
                data-aos-duration={500}
                data-aos-once="true"
              >
                { image && <img className="mw-100" src={image.sourceUrl} alt="" />}
                <div className="abs-img-1">
                  <img className="w-100" src={imgDot} alt="" />
                </div>
              </div>
            </div>
            {/* Content Section */}
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
              <div
                className="ml-lg-10 ml-xl-12 mt-lg-n20 pr-lg-10 pr-xl-10"
                data-aos="fade-left"
                data-aos-duration={800}
                data-aos-delay={300}
                data-aos-once="true"
              >
                <h6 className="font-size-5 text-light-orange mb-5 mb-lg-9 font-weight-normal">
                  { short }
                </h6>
                <h3 className="font-size-11 mb-5 mb-lg-8 font-weight-medium pr-sm-20 pr-md-16 pr-lg-0">
                  { title }
                </h3>
                <div className="font-size-6 mb-0" dangerouslySetInnerHTML={{__html: content}}>

                </div>
                {/* newsletter */}
                { form && (
                  <div
                    className="mt-8 mt-lg-16"
                    data-aos="fade-left"
                    data-aos-duration={800}
                    data-aos-delay={500}
                    data-aos-once="true"
                  >
                    <div className="shadow-3 bg-white rounded-0">
                    <Formik
                      validateOnChange={false}
                      validateOnBlur={false}
                      initialValues={{
                        email: '',
                        subject: subject, 
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
                          <form onSubmit={handleSubmit}>
                            <div className="subscribe-inline-form">
                              <div className="form-group">
                                <input
                                  id="subject"
                                  type="hidden"
                                  className="form-control"
                                  value={ values.subject }
                                />
                                <label htmlFor="email">
                                  <i className="icon icon-email-84 mb-0 text-bali-gray font-weight-bold" />
                                </label>
                                <input
                                  id="email"
                                  type="email"
                                  values={values.email}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  className="form-control"
                                  placeholder="Deja tú email"
                                />
                              </div>
                              <button type="submit" disabled={loading} className="btn btn-primary">Enviar</button>
                            </div>
                            {(errors.email || error || sent) && (
                              <div className={`${error || errors.email ? 'alert-danger': 'alert-success'} alert p-8`}>
                                { errors.email || error || sent }
                              </div>
                            )}
                          </form>
                        )}
                        
                      </Formik>
                    
                    </div>
                  </div>
                )}
                {/* End newsletter */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentRight;
