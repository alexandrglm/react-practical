import { useState } from "react";
import { StyleSheet, SectionList, Text } from "react-native";

export default function SectionListSample () {
	const {users, setUsers} = useState([{key: "JS"}, {key: "Java"}, {key: "PHP"}]);

	const renderListItem = value => <Text>{value}</Text>;

	return (
		<SectionList
			renderItem={({item, index, section}) => 
				<Text key={index} style={styles.item}>{item}</Text>}
			renderSectionHeader={({section: {title}}) => (
				<Text style={{fontWeight: "bold"}}>{title}</Text>
			)}
			sections={[
				{title: "John", data: ["js", "java", "perl"]},
				{title: "Mike", data: ["rails", "ember"]},
				{title: "Joe", data: ["cobol", "c++"]},
			]}
			keyExtractor={(item, index) => item + index}
		/>
	);
}

const styles = StyleSheet.create ({
	sectionList: {
		fontSize: 10, color: "green"
	},
	item: {
		backgroundColor: 'orange'
	}
});