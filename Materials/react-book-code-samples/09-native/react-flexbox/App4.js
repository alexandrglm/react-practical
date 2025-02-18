import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {content, container, child, 
    container1, container2, container3, container4, container5
  } = styles;
  return (
    <View style={content}>
    <View role="content">
      justify-content: flex-start;
        <div style={{...container, ...container1}}>
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
        justify-content: flex-end;
        <div style={{...container, ...container2}}>
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
        justify-content: center;
        <div style={{...container, ...container3}}>
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
        justify-content: flex-between;
        <div style={{...container, ...container4}}>
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
        justify-content: flex-around;
        <div style={{...container, ...container5}}>
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
  container1: {
    justifyContent: 'flex-start'
  },
  container2: {
    justifyContent: 'flex-end'
  },
  container3: {
    justifyContent: 'center'
  },
  container4: {
    justifyContent: 'space-between'
  },
  container5: {
    justifyContent: 'space-around'
  }, /* space-evenly */
  child: {
    border: '1px solid gray',
    padding: '1em',
    backgroundColor: 'white',
    marginBottom: '1em'
  },
});
