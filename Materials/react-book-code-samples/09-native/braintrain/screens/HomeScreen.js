import { StyleSheet, View } from 'react-native';
import { Stack, Button } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Icon name="head" size={256} color='black' />
        <Stack fill center spacing={4}>
            <Button
                title="Training"
                onPress={() => navigation.navigate('Training')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />
        </Stack>
        <StatusBar style="auto" />
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