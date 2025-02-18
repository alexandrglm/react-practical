import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function ScrollViewSample () {
	const names = ["React", "Vue", "Angular", "Ember", "Flutter"];
	return (
		<ScrollView>
			{names.map ((name, index) => (
				<View key={index} style={styles.element}>
					<Text>{name}</Text>
				</View>
			))
			}
		</ScrollView>
	);
}

const styles = StyleSheet.create ({
	element: {
		height: 40,
		width: 400,
		padding: 4,
		margin: 2,
		borderColor: '#000',
		backgroundColor: 'orange',
		borderWidth: 3
	}
});
