import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewSample () {
	return (
		<View style={styles.container}>
			<WebView originWhitelist={['*']}
					source={{html: '<h3>Super Title</h3>'}}/>
		</View>
	);
}

const styles = StyleSheet.create ({
	container: {
		width: 1000,
		height: 400
	}
});

 WebViewSample;