import Clock from "./Clock";
import './App.css';
import ClockEffect from './ClockEffect';
import Countdown from './Countdown';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				React Hooks Sample
				<Clock start={0}/>
				<ClockEffect start={42}/>
				<Countdown start={10}/>
			</header>
		</div>
  );
}

export default App;
