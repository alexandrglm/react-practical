import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {container, container1, container2, child, child1_1,
    child1_2, child1_3,
    child2_1, child2_2, child2_3,
    child3_1, child3_2, child3_3
  } = styles;
  return (
    <View style={container}>
    <View role="content">
        <div style={container1}>
            <div style={{...child, ...child1_1}}>
                Child 1<br/>order: 1
            </div>
            <div style={{...child, ...child1_2}}>
                Child 2<br/>order: 2
            </div>
            <div style={{...child, ...child1_3}}>
                Child 3<br/>order: 3
            </div>
        </div>

        <div style={container2}>
            <div style={{...child, ...child2_1}}>
                Child 1<br/>order: 3
            </div>
            <div style={{...child, ...child2_2}}>
                Child 2<br/>order: 1
            </div>
            <div style={{...child, ...child2_3}}>
                Child 3<br/>order: 2
            </div>
        </div>

        <div style={container1}>
            <div style={{...child, ...child3_1}}>
                Child 1<br/>order: 2
            </div>
            <div style={{...child, ...child3_2}}>
                Child 2<br/>order: 1
            </div>
            <div style={{...child, ...child3_3}}>
                Child 3<br/>order: 3
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
      display : 'flex',
      backgroundColor: '#ddd',
      padding: '.5em',
      marginBottom: '.5em'
  },
  child: {
    border: '1px solid gray',
    padding: '1em',
    backgroundColor: 'white',
    marginBottom: '1em'
  },
  child1_1: { order: 1 },
  child1_2: { order: 2 },
  child1_3: { order: 3 },
  child2_1: { order: 3 },
  child2_2: { order: 1 },
  child2_3: { order: 2 },
  child3_1: { order: 2 },
  child3_2: { order: 1 },
  child3_3: { order: 3 },
});
