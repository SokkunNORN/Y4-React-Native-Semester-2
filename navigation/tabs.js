import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import {
    createBottomTabNavigator,
    BottomTabBar
} from '@react-navigation/bottom-tabs'

import { Home, Account } from '../screens'
import { COLORS } from '../const'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={Home}
            />
            <Tab.Screen 
                name="Account"
                component={Account}
            />
        </Tab.Navigator>
    )
}

export default Tabs