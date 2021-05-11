import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import { Account } from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();
class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    )
  }
}

export default App