import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {content, container, child, 
    child1_1, child1_2, child1_3,
    child2_1, child2_2, child2_3,
    child3_1, child3_2, child3_3,
    child4_1, child4_2, child4_3,
  } = styles;
  return (
    <View style={content}>
    <View role="content">
    justify-content: center;
        <div style={container}>
            <div style={{...child, ...child1_1}}>
            Child 1<br />align-self: auto;
            </div>
            <div style={{...child, ...child1_2}}>
            Child 2<br />align-self: auto;
            </div>
            <div style={{...child, ...child1_3}}>
            Child 3<br />align-self: auto;
            </div>
        </div>
        justify-content: center;
        <div style={container}>
          <div style={{...child, ...child2_1}}>
            Child 1<br />align-self: flex-start;
            </div>
            <div style={{...child, ...child2_2}}>
            Child 2<br />align-self: center;
            </div>
            <div style={{...child, ...child2_3}}>
            Child 3<br />align-self: flex-end;
            </div>
        </div>
        justify-content: center;
        <div style={container}>
          <div style={{...child, ...child3_1}}>
            Child 1<br />align-self: flex-end;
            </div>
            <div style={{...child, ...child3_2}}>
            Child 2<br />align-self: baseline;
            </div>
            <div style={{...child, ...child3_3}}>
            Child 3<br />align-self: stretch;
            </div>
        </div>
        justify-content: center;
        <div style={container}>
          <div style={{...child, ...child4_1}}>
            Child 1<br />align-self: flex-end;
            </div>
            <div style={{...child, ...child4_2}}>
            Child 2<br />align-self: center;
            </div>
            <div style={{...child, ...child4_3}}>
            Child 3<br />align-self: stretch;
            </div>
        </div>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: '.5em',
    backgroundColor: '#fff',
  },
  container: {
      display: 'flex',
      backgroundColor: '#ddd',
      marginBottom: '.5em',
      height: '150px',
      justifyContent: 'center'
  },
  child1_1: { alignSelf: 'auto' },
  child1_2: { alignSelf: 'auto' },
  child1_3: { alignSelf: 'auto' },
  child2_1: { alignSelf: 'flex-start' },
  child2_2: { alignSelf: 'center' },
  child2_3: { alignSelf: 'flex-end' },
  child3_1: { alignSelf: 'flex-end' },
  child3_2: { alignSelf: 'baseline' },
  child3_3: { alignSelf: 'stretch' },
  child4_1: { alignSelf: 'flex-end' },
  child4_2: { alignSelf: 'center' },
  child4_3: { alignSelf: 'stretch' },
  child: {
    border: '1px solid gray',
    padding: '1em',
    backgroundColor: 'white',
    marginBottom: '1em'
  },
});
