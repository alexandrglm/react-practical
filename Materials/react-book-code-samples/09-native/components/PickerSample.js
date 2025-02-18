import { useState } from "react";
import { StyleSheet, Picker, View, Text } from "react-native";

export default function PickerSample () {
	const [framework, setFramework] = useState('React');

	const selectionChanged = (value) => {
		setFramework(value);
	}

	return (
		<View>
			<Picker
				selectedValue={framework}
				style={styles.picker}
				onValueChange={selectionChanged}>
				<Picker.Item label="React" value="react"/>
				<Picker.Item label="Vue" value="vue"/>
				<Picker.Item label="Angular" value="angular"/>
			</Picker>
			<Text>Selected: {framework}</Text>
		</View>
	);
}

const styles = StyleSheet.create ({
	picker: {
		height: 50, width: 200
	},
});