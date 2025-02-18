import { Formik, Field, Form, ErrorMessage } from 'formik';

function ValidationForm () {
	const validateForm = (values) => {
		let errors = {};

		if (!values.name) {
			errors.name = 'This field is required';
		}

		if (!/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test (values.email)) {
			errors.email = 'Invalid email address';
		}

		if (!/^[a-z]{3,}$/i.test (values.message)) {
			errors.message = 'Must contain al least 3 chars.';
		}
		return errors;
	};

	return <div>
		<h1>Contact</h1>
		<Formik
			initialValues={{name: '', email: '', message: ''}}
			onSubmit={values => {
				alert ("Values: " + JSON.stringify (values));
			}}
			validate={validateForm}
		>
		{({isSubmitting}) => (
			<Form>
				<div>
					<label htmlFor="name">Name</label>
					<Field name="name" placeholder="Your name here..."/>
					<ErrorMessage name="name"/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<Field name="email" placeholder="Your email here..."/>
					<ErrorMessage name="email"/>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<Field name="message" component="textarea" rows="4"/>
					<ErrorMessage name="message"/>
				</div>
				<div>
					<button type="submit" disabled={isSubmitting}>Save</button>
				</div>
			</Form>
		)}
		</Formik>
	</div>;
}

export default ValidationForm;