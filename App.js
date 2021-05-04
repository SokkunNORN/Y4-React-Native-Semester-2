import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'

class App extends Component {
  render () {
    return (
      <SafeAreaView>
        <View
          style={styles.container}
        >
          <ScrollView horizontal>
            <View style={styles.box}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.text}>3</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flexDirection: 'row',
    backgroundColor: '#ccc'
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  }
})

export default App