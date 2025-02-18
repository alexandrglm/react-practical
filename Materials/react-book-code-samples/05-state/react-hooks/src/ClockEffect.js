import { useState, useEffect } from 'react';

function ClockEffect (props) {
	const [seconds, updateClock] = useState (props.start);

	setTimeout (() => updateClock (seconds + 1), 1000);

	useEffect (() => {
		console.log (`Clock started ${props.start}`);
	});

	return seconds;
}

export default ClockEffect;