import React from 'react'
import Select from "../../components/Select";
import { useMutation } from '@apollo/client';
import { gql } from "graphql-tag"
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from 'uuid';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .required("Tu nombre es obligatorio"),
  phone: Yup.number('Debe ser un número').min(99999999)
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

const defaultOptions = [
  { value: "Seguro de coche", label: "Seguro de coche" },
  { value: "Seguro de salud", label: "Seguro de salud" },
  { value: "Seguro de vida", label: "Seguro de vida" },
  { value: "Seguro de hogar", label: "Seguro de hogar" },
  { value: "Seguro de viajes", label: "Seguro de viajes" },
  { value: "Seguro de impago", label: "Seguro de impago" },
	{ value: "Otros", label: "Otros" },
];

	

export function HeroForm () {
	const [sent, setSent] = React.useState(false)
	const [error, setError] = React.useState(null)
	const [SEND_EMAIL, {loading}] = useMutation(sendEmail)

	const handleOnSubmit = async ({name, phone, insurance}, { resetForm }) => {
		const subject = `Un cliente pregunta por un ${insurance.value}`
		const body = `
			<h1>Piden información sobre: ${insurance.value}</h1>
			<p>Un nuevo cliente llamado <strong>${name}</strong> quiere más información sobre: <strong>${insurance.value}</strong></p>
			<p>Puedes contactarlo en el número <strong>${phone}</strong>.
			<p>Gracias,</p>
		`
		const id = uuidv4()
		const { data } = await SEND_EMAIL({variables: { id, body, subject}})
		if (data.sendEmail && data.sendEmail.sent) {
			setError(null)
			setSent('Gracias por contactarnos. Nos pondremos pronto en contacto contigo')
			resetForm({
				name: '',
				phone: '',
				insurance: ''
			})
		} else {
			setError('Hubo un error enviando el formulario. Inténtalo más tarde')
			setSent(null)
		}
	}


	return (
		<Formik
		  validateOnChange={false}
			validateOnBlur={false}
			initialValues={{
				name: '',
				phone: '',
				insurance: ''
			}}
			validationSchema={DisplayingErrorMessagesSchema}
			onSubmit={handleOnSubmit}
		>
			{({
			  values,
				errors,
				handleSubmit,
				handleChange,
				handleBlur,
				setFieldValue,
				setFieldTouched,
			}) => (
				<form
					action="/"
					className="search-form-one"
					data-aos="fade-up"
					data-aos-duration="800"
					onSubmit={handleSubmit}
				>
					<div className="filter-search-form-2 bg-white rounded-0 shadow-7 d-lg-flex justify-content-between align-items-center pl-lg-6">
						<div className="filter-inputs d-xs-flex w-100">
							<div className="form-group mb-0 focus-reset w-100 w-lg-50 text-bali-gray position-relative d-flex align-items-center">
								<input
									name="name"
									className="form-control focus-reset pl-13 pr-10 pr-lg-0 border-0 w-100 font-size-5 text-bali-gray py-10 py-xs-5 py-lg-13 py-lg-0"
									value={values.name}
									required
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Nombre"
								/>
								<span className="form-icon font-size-5 absolute-top-left">
									<i className="icon icon-single-02-2 text-bali-gray font-weight-bold"></i>
								</span>
							</div>
							<div className="form-group mb-0 focus-reset w-100 w-lg-50 text-bali-gray position-relative d-flex align-items-center">
								<input
									value={values.phone}
									name="phone"
									className="form-control focus-reset pl-13 pr-10 pr-lg-0 border-0 w-100 font-size-5 text-bali-gray py-10 py-xs-5 py-lg-13 py-lg-0"
									type="number"
									id="phone"
									required
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Teléfono"
								/>
								<span className="form-icon font-size-5 absolute-top-left">
									<i className="icon icon-phone-2 text-bali-gray font-weight-bold"></i>
								</span>
							</div>
							{/* <!-- .select-city starts --> */}
							<div className="form-group border-top-dotted mb-0 w-100 w-lg-50 position-relative pt-5 pb-6 pt-lg-9 pb-lg-10 py-lg-0 d-flex align-items-center">
								<Select
									value={values.insurance}
									name="insurance"
									options={defaultOptions}
									className="h-100 arrow-3 focus-reset w-100 text-dark-cloud hero-search-select font-size-5 pl-7"
									border={false}
									onChange={setFieldValue}
        					onBlur={setFieldTouched}
									css={`
										border-left: 2px dotted #e2e4e8;
									`}
								/>
							</div>
							{/* <!-- ./select-city ends --> */}
						</div>
						<div className="button-block">
							<button className="btn btn-primary line-height-reset btn-hero-btn rounded-0 w-100 w-lg-inherit font-weight-medium" disabled={loading}>
								Pide información
							</button>
						</div>
					</div>
					{(errors['name'] || errors['phone'] || error || sent) && (
						<div className={`${error ? 'alert-danger': 'alert-success'} alert header__alert mt-2 p-8`}>
							{ errors['name'] || errors['phone'] || error || sent }
						</div>
					)}
				</form>
			)}
		</Formik>

	)
} 