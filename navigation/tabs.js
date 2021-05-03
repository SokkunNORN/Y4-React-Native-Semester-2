import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native'
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs'

import { Home, Account } from '../screens'
import { COLORS, SIZES, icons } from '../const'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.bottomTabBar
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <View>
                            <Image
                                source={icons.home}
                                resizeMode='contain'
                                style={{
                                    ...styles.icon,
                                    tintColor: focused ? COLORS.white : '#748C94'
                                }}
                            />
                        </View>
                    }
                }}
            />
            <Tab.Screen 
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({focused}) => {
                        <View>
                            <Image
                                source={icons.account}
                                resizeMode='contain'
                                style={{
                                    ...styles.icon,
                                    tintColor: focused ? COLORS.white : '#748C94'
                                }}
                            />
                        </View>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomTabBar: {
        position: 'absolute',
        bottom: SIZES.space(20),
        left: SIZES.space(),
        right: SIZES.space(),
        elevation: 0,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius(),
        height: SIZES.space(70),
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: SIZES.space(10)
        },
        shadowOpacity: SIZES.space(.25),
        shadowRadius: SIZES.space(3.5),
        elevation: SIZES.space(5)
    },
    icon: {
        width: 25,
        height: 25
    }
  })

export default Tabs