import { useState } from "react";
import { StyleSheet, Switch, View, Text } from "react-native";

export default function SwitchSample () {
	const [enabled, setEnabled] = useState(false);
	const [show, setShow] = useState('OFF');

	const switchChanged = (value) => {
		setEnabled(value);
		setShow(value ? 'ON' : 'OFF')
	}

	return (
		<View style={styles.container}>
			<Switch
				value={enabled}
				style={styles.switch}
				trackColor={enabled ? styles.ok : styles.nope}
				onValueChange={switchChanged}>
			</Switch>
			<Text>State: {show}</Text>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	switch: {
		marginTop: 2
	},
	ok: {
		color: "green"
	},
	nope: {
		color: "red"
	}
});