import React, {useEffect, useState} from "react";
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from "react-native"; 

export default function TextViewSample () {
	const [fontLoaded, setFontLoaded] = useState(false);

	const [fontsLoaded] = useFonts({
		'samplefont': require('./samplefont.ttf'),
	  });

	useEffect ( () => {
		setFontLoaded(true)
	}, [fontsLoaded])

	const message = "This is important text";

		return (
			fontLoaded ? (
        <View>
          <Text style={{fontFamily: 'samplefont', fontSize: 16}}>Text components</Text>
          <Text>Text can have nested text like this
            <Text>{message}</Text>
            And its awesome.
          </Text>
        </View>
			) : null);
}

const styles = StyleSheet.create ({
	title: {
		fontSize: 14
	},
});

