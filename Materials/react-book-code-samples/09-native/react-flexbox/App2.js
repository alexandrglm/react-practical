import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {content, container, child, child1_1,
    child1_2, child1_3,
    child2_1, child2_2, child2_3,
    child3_1, child3_2, child3_3,
    child4_1, child4_2, child4_3,
  } = styles;
  return (
    <View style={content}>
    <View role="content">
        <div style={container}>
            <div style={{...child, ...child1_1}}>
            Child 1<br />
                flex-grow: 1;
            </div>
            <div style={{...child, ...child1_2}}>
            Child 2<br />
                flex-grow: 1;
            </div>
            <div style={{...child, ...child1_3}}>
            Child 3<br />
                flex-grow: 2;
            </div>
        </div>

        <div style={container}>
            <div style={{...child, ...child2_1}}>
            Child 1<br />
                flex-grow: 1;
            </div>
            <div style={{...child, ...child2_2}}>
            Child 2<br />
                flex-grow: 3;
            </div>
            <div style={{...child, ...child2_3}}>
            Child 3<br />
                flex-grow: 1;
            </div>
        </div>

        <div style={container}>
            <div style={{...child, ...child3_1}}>
            Child 1<br />
                flex-grow: 1;
            </div>
            <div style={{...child, ...child3_2}}>
            Child 2<br />
                flex-grow: 2;
            </div>
            <div style={{...child, ...child3_3}}>
            Child 3<br />
                flex-grow: 4;
            </div>
        </div>
        <div style={container}>
            <div style={{...child, ...child4_1}}>
            Child 1<br />
                flex-shrink: 1;
            </div>
            <div style={{...child, ...child4_2}}>
            Child 2<br />
                flex-grow: 2;
            </div>
            <div style={{...child, ...child4_3}}>
            Child 3<br />
                flex-shrink: 4;
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
      padding: '.5em',
      marginBottom: '.5em'
  },
  child: {
    border: '1px solid gray',
    padding: '1em',
    backgroundColor: 'white',
    marginBottom: '1em'
  },
  child1_1: { flexGrow: 1 },
  child1_2: { flexGrow: 1 },
  child1_3: { flexGrow: 2 },
  child2_1: { flexGrow: 1 },
  child2_2: { flexGrow: 3 },
  child2_3: { flexGrow: 1 },
  child3_1: { flexGrow: 1 },
  child3_2: { flexGrow: 2 },
  child3_3: { flexGrow: 4 },
  child4_1: { flexShrink: 1 },
  child4_2: { flexGrow: 2 },
  child4_3: { flexShrink: 4 },
});
