import { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function ActivityIndicatorSample () {
	const [loading, setLoading] = useState(true);

	useEffect (() => {
		setTimeout (() => setLoading (false), 6000);
	});

	return (
		<ActivityIndicator
			animating={loading}
			color='#0f0'
			size="large"
			style={styles.activityIndicator}/>
	);
}

const styles = StyleSheet.create ({
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80
	}
})
