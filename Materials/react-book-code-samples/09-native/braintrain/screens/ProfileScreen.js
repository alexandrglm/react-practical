import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { BrainTrainContext } from '../lib/context';
import { readData } from '../lib/storage';

export default function Profile() {
  const { profile, setProfileName } = useContext(BrainTrainContext);
  const [name, setName] = useState(profile.name)
  const [results, setResults] = useState([]);

  useEffect(() => {
    readData('user_results').then(data => {
      setResults(data);
    })
  }, [])

  const handleChange = (e) => {
    console.log("A ver;", e.target.value, profile.name, setProfileName)
    setName(e.target.value)
  }

	const resultAverage = () => {
		return Math.round(results.reduce((acc, result) => { 
			return result.result + acc;
			}, 0) / results.length)
	}

	const correctAverage = () => {
		return Math.round(results.reduce((acc, result) => {
			return result.correct + acc;
			}, 0) / results.length)
	}

  const handleSave = () => {
    console.log("Saved", name)
    setProfileName(name)
  }
    return (
      <View style={styles.container}>
        <Text>Brain Train - Profile</Text>
        <View>
          <Text>Total exercises: {results.length}</Text>
          <Text>Result average: {resultAverage()}%</Text>
          <Text>Correct average: {correctAverage()}</Text>
        </View>
        <Stack spacing={2} style={{ margin: 16 }}>
          <TextInput
            label="name"
            onChange={handleChange}
            value={name}
            leading={props => <Icon name="account" {...props} />}
          />
          <Button
            title="Save profile"
            onPress={() => handleSave()}
          />
        </Stack>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });