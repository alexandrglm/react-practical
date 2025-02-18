import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {content, container, child, 
    container1, container2, container3, container4, container5
  } = styles;
  return (
    <View style={content}>
    <View role="content">
    align-items: flex-start;
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
        align-items: flex-end;
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
        align-items: flex-center;
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
        align-items: stretch;
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
        align-items: baseline;
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
      height: '80px',
      marginBottom: '.5em',
      height: '110px'
  },
  container1: {
    alignItems: 'flex-start',
  },
  container2: {
    alignItems: 'flex-end'
  },
  container3: {
    alignItems: 'center'
  },
  container4: {
    alignItems: 'stretch'
  },
  container5: {
    alignItems: 'baseline'
  },
  child: {
    border: '1px solid gray',
    padding: '1em',
    backgroundColor: 'white',
    marginBottom: '1em'
  },
});
