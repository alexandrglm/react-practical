import { useState } from "react";
import { StyleSheet, Button } from "react-native";

export default function ButtonSample () {
	const [count, setCount] = useState(0);

	const buttonPressed = (_) => {
		setCount(count + 1);
	}

	return (
		<Button
			onPress={buttonPressed}
			title={`increment ${count}`}
			styles={styles.fancyButton}
			accessibilityLabel="Info about the button"
		/>
	);
}

const styles = StyleSheet.create ({
	fancyButton: {
		borderStyle: "dashed", borderColor: "gray", borderWidth: 1
	},
});
