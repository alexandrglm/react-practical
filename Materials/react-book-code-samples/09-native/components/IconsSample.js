import { StyleSheet, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function IconSample () {
	return (
		<View>
			<Ionicon name='logo-octocat'/>
			<Ionicon name='logo-octocat' size={40}/>
			<MaterialIcon name='delete' size={60} color='red'/>
			<MaterialIcon name='add' size={100} color='orange'/>
		</View>
	);
}

const styles = StyleSheet.create ({
	icon: {
		color: "red",
		width: 400,
	}
});
