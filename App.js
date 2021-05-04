import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'

class App extends Component {
  state = {
    count: 0,
    time: 'time'
  }

  onPress = (value) => {
    this.setState({
      count: this.state.count + value
    })
  }

  render () {
    return (
      <View
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPress(1)}
        >
          <Text>Plus 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onPress(-1)}
        >
          <Text>Minus 1</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } time{ this.state.count > 1 && 's' } 
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10
  }
})

export default App