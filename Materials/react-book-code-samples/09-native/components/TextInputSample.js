import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function TextInputSample () {
	const [text, setText] = useState('Default text')

	const textChanged = (value) => {
		setText(value)
	}

	return (
		<TextInput style={styles.textInput}
								onChangeText={textChanged}
								value={text}
		/>
	);
}

const styles = StyleSheet.create ({
	textInput: {
		padding: 1, borderColor: "gray", borderWidth: 1
	},
});