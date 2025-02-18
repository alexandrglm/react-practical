import React, { useState, useEffect } from 'react';

function Countdown (props) {
	const [seconds, updateClock] = useState (props.start);

	setTimeout (() => updateClock (seconds - 1), 1000);

	useEffect (() => {
		console.log (`Countdown started at ${props.start}`);

		return () => {
			console.log (`Component Dismounted`);
		};
	});

	return (
		<div>
			<i>Countdown: </i>
			<b>{seconds}</b>
		</div>
	);
}

export default Countdown;