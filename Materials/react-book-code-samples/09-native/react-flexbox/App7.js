import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {content, container, child, 
    container1, container2, container3, container4, container5, container6
  } = styles;
  return (
    <View style={content}>
    align-content: flex-start;
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
            <div style={child}>
                Child 4
            </div>
            <div style={child}>
                Child 5
            </div>
            <div style={child}>
                Child 6
            </div>
        </div>
        align-content: flex-end;
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
            <div style={child}>
                Child 4
            </div>
            <div style={child}>
                Child 5
            </div>
            <div style={child}>
                Child 6
            </div>
        </div>
        align-content: center;
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
            <div style={child}>
                Child 4
            </div>
            <div style={child}>
                Child 5
            </div>
            <div style={child}>
                Child 6
            </div>
        </div>
        align-content: space-between;
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
            <div style={child}>
                Child 4
            </div>
            <div style={child}>
                Child 5
            </div>
            <div style={child}>
                Child 6
            </div>
        </div>
        align-content: space-around;
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
            <div style={child}>
                Child 4
            </div>
            <div style={child}>
                Child 5
            </div>
            <div style={child}>
                Child 6
            </div>
        </div>
        align-content: stretch
        <div style={{...container, ...container6}}>
          <div style={child}>
                Child 1
            </div>
            <div style={child}>
                Child 2
            </div>
            <div style={child}>
                Child 3
            </div>
            <div style={child}>
                Child 4
            </div>
            <div style={child}>
                Child 5
            </div>
            <div style={child}>
                Child 6
            </div>
        </div>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: '.5em',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  container: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: '#ddd',
      padding: '.5em',
      marginBottom: '.5em',
      width: '400px',
      height: '200px'
  },
  container1: {
    alignContent: 'flex-start'
  },
  container2: {
    alignContent: 'flex-end'
  },
  container3: {
    alignContent: 'center'
  },
  container4: {
    alignContent: 'space-between'
  },
  container5: {
    alignContent: 'space-around'
  },
  container6: {
    alignContent: 'stretch'
  }, 
  child: { 
    border: '1px solid gray',
    padding: '1em',
    backgroundColor: 'white',
    marginBottom: '1em'
  },
});
