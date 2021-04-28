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

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
      time: (this.state.count + 1) > 1 ? 'times' : 'time'
    })
  }

  render () {
    return (
      <View
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text>Click Me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } { this.state.time }
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