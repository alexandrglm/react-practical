import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";

const width = Dimensions.get ('window').width;

export default function FlatListSample () {
	const elements = [{key: "JS"}, {key: "Java"}, {key: "PHP"}];

	const renderListItem = ({item}) => {
		return <View style={styles.item}>
			<Text>{item.key}</Text>
		</View>
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={elements}
				showsVerticalScrollIndicator={true}
				renderItem={renderListItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	item: {
		justifyContent: 'center',
		paddingTop: 30,
		margin: 1,
		borderRadius: 2,
		backgroundColor: 'olive',
		width: width * .39
	}
});