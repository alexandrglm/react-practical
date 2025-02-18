import { useState } from 'react';
import './App.css';

function App() {
	const [state, setState] = useState({
		username: '',
		password: '',
		description: '',
		maritalState: '',
		studies: [],
		sex: ''
	});

	const handleChange = event => {
		let { name, value, checked } = event.target;
		if (name === 'studies') {
			value = updateStudies(state.studies, value, checked)
		}

		setState({
			...state,
			[name]: value
		})
		console.log("changed_: ", name, " with ", value, event.target.checked, state.studies)
	}

	const updateStudies = (initial, value, checked) => {
		const studies = new Set(initial)
		if (checked)
			studies.add(value)
		else
			studies.delete(value)

		return Array.from(studies)
	}

	const handleSubmit = event => {
		event.preventDefault();

		alert("Form submitted")
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Login form</h1>
			</header>
			<div className="App-form">
				<form onSubmit={handleSubmit} name="form">
					<div><label>Username</label></div>
					<div>
						<input type="text" name="username" onChange={handleChange} value={state.username} />
					</div>
					<div><label>Password</label></div>
					<div>
						<input type="password" name="password" onChange={handleChange} value={state.password} />
					</div>
					<div><label>Description</label></div>
					<div>
						<textarea name="description" onChange={handleChange} value={state.description}></textarea>
					</div>
					<div><label>Marital State</label></div>
					<div>
						<select name="maritalState" onChange={handleChange} value={state.maritalState}>
							<option value="1">Single</option>
							<option value="2">Multiple</option>
							<option value="3">Married</option>
						</select>
					</div>
					<div><label>Studies</label></div>
					<div>
						<div><input type="checkbox" name="studies" onChange={handleChange} value="primary" id="s_primary" />
							<label htmlFor="s_primary">Primary</label></div>
						<div><input type="checkbox" name="studies" onChange={handleChange} value="bachelor" id="s_bachelor" />
							<label htmlFor="s_bachelor">Bachelor</label></div>
						<div><input type="checkbox" name="studies" onChange={handleChange} value="master" id="s_master" />
							<label htmlFor="s_master">Master</label></div>
					</div>
					<div><label>Sex</label></div>
					<div>
						<div><input type="radio" name="sex" value="male" id="male" onChange={handleChange} />
							<label htmlFor="male">Male</label></div>
						<div><input type="radio" name="sex" value="female" id="female" onChange={handleChange} />
							<label htmlFor="female">Female</label></div>
					</div>
					<div>
						<input type="submit" value="Login" />
					</div>
				</form>
				<div>{Object.keys(state).map((key) => <div key={key}><b>{key}:</b> {state[key]}</div>)}</div>
			</div>

		</div>
	)
}

export default App;