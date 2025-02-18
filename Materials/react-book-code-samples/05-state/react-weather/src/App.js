import { useState } from 'react';
import './App.css';
import Forecast from './Forecast';

function App() {
	const [latitude, setLatitude] = useState(40.71);
	const [longitude, setLongitude] = useState(74.01);
	const [results, setResults] = useState([])
  
	const handleLatitude = event => {
		setLatitude(event.target.value);
	}

	const handleLongitude = event => {
		setLongitude(event.target.value);
	}
  
	const addResult = event => {
	console.log(event, results)
	  setResults([...results, {latitude, longitude}])
	}

	const removeForecast = (index) => {
		setResults(results.filter((_, i) => i !== index))
	}
  
	return (
	  <div className="App">
		<header className="App-header">
		  <h1 className="App-title">Weather APP</h1>
		</header>
		<div className="App-form">
		  <div><label>Latitude</label>
			<input type="text" name="latitude" onChange={handleLatitude} value={latitude}/>
		  </div>
		  <div><label>Longitude</label>
			<input type="text" name="longitude" onChange={handleLongitude} value={longitude}/>
		  </div>
			<button onClick={addResult}>Get Weather</button>
		  </div>
		  <div>
			{
				results.map( (result, i) => {
					return (<Forecast 
						key={`${result.latitude}-${result.longitude}`}
						removeCallback={() => removeForecast(i)}
						{...result }/>)
				})
			}
		  </div>

	  </div>
	)
}

export default App;
