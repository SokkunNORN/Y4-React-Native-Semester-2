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
        <Stack.Navigator
          initialRouteName={"Home"}
        >
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{ title: 'CAM Hotel' }}
          />
          <Stack.Screen 
            name="Account" 
            component={Account} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App