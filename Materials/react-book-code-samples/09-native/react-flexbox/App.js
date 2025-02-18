import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {container, container1, container2, child} = styles;
  return (
    <View style={container}>
    <View role="content">
        <div style={container1}>
        <div style={child}>
                Child 1
            </div>
            <div style={child}>
                Child 2
            </div>
            <div style={child}>
                Child 3
            </div>
        </div>

        <div style={container2}>
            <div style={child}>
                Child 1
            </div>
            <div style={child}>
                Child 2
            </div>
            <div style={child}>
                Child 3
            </div>
        </div>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '.5em',
  },
  container1: {
      display: 'flex',
      backgroundColor: '#ddd',
      padding: '.5em',
      marginBottom: '.5em'
  },
  container2: {
      display : 'inline-flex',
      backgroundColor: '#ddd',
      padding: '.5em',
      marginBottom: '.5em'
  },
  child: {
    border: '1px solid gray',
    padding: '1em',
    backgroundColor: 'white',
    marginBottom: '1em'
  }
});

