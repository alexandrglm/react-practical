import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ViewSample () {
	const names = ["React", "Vue", "Angular", "Ember", "Flutter"];
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<View>
				<Text style={styles.subtitle}>This is another Text</Text>
				<Text style={styles.paragraph}>This is a subtext</Text>
			</View>
			<View>
				<MaterialIcons
					name='directions-run'
					color={'black'}
					size={42}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	subtitle: {
		fontSize: '2em',
	},
	paragraph: {
		fontSize: '0.9em',
		fontVariant: 'italic',
	},
});
