import { Formik, Field, Form } from 'formik';

function SimpleForm () {
	return <div>
		<h1>Login</h1>
		<Formik
			initialValues={{login: '', pasword: ''}}
			onSubmit={values => {
				alert ("Values: " + JSON.stringify (values));
			}}
		>
		{() => (
			<Form>
				<div>
					<label htmlFor="login">Login</label>
					<Field name="login" placeholder="login here..."/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<Field name="password" type="password" placeholder="Password"/>
				</div>
				<div>
					<button type="submit">Sign In</button>
				</div>
			</Form>
		)}
		</Formik>
	</div>;
}

export default SimpleForm;