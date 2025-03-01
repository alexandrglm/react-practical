import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from '@react-native-community/slider';

export default function SliderSample () {
	const [speed, setSpeed] = useState(50);

	const slideChanged = (value) => {
		setSpeed(Math.round(value))
	}

	return (
		<View>
			<Slider
				minimumValue={0}
				maximumValue={100}
				value={speed}
				style={styles.picker}
				onValueChange={slideChanged}
				onSlidingComplete={slideChanged}>
			</Slider>
			<Text>{speed}</Text>
		</View>
	);
}

const styles = StyleSheet.create ({
	picker: {
		height: 50, width: 100
	},
});