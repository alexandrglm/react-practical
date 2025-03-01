import { useState } from 'react';

function Clock () {
	const [seconds, updateClock] = useState (0);
	const formatClock = s => `${Math.floor (s / 60)}:${s % 60}`;

	setTimeout (() => updateClock (seconds + 1), 1000);

	return (
		<div>
			<i>Time: </i>
			<b>{formatClock (seconds)}</b>
		</div>
	);
}

export default Clock;