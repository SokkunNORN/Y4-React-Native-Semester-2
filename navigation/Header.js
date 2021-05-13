import React, { Component } from 'react'
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native'

import Animated from 'react-native-reanimated'

import { COLORS } from '../const'

const { Value } = Animated

class Header extends Component {

    constructor (props) {
        super(props)

        this._scroll_y = new Value(0)
    }

    render () {

        const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, 50)

        const _header_height = Animated.interpolate( _diff_clamp_scroll_y, {
            inputRange: [0, 50],
            outputRange: [50, 0],
            extrapolate: 'clamp'
        })
        const _header_translate_y = Animated.interpolate( _diff_clamp_scroll_y, {
            inputRange: [0, 50],
            outputRange: [0, -50],
            extrapolate: 'clamp'
        })
        const _header_opacity = Animated.interpolate( _diff_clamp_scroll_y, {
            inputRange: [0, 50],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })

        return (
            <SafeAreaView style={styles.safe_area_view}>
                <Animated.View 
                    style={[
                        styles.header,
                        {
                            height: _header_height,
                            transform: [{translateY: _header_translate_y}],
                            opacity: _header_opacity
                        }
                    ]}
                >
                    <View>
                        <Text style={styles.title}>CAM Hotel</Text>
                    </View>
                    <View style={styles.fake_icon_box}>
    
                    </View>
                </Animated.View>
    
                <Animated.ScrollView
                    style={styles.scroll_view}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={5}
                    onScroll={Animated.event([
                        {
                            nativeEvent: { contentOffset: { y: this._scroll_y }}
                        }
                    ])}
                >
                    { this.props.children }
                </Animated.ScrollView>
            </SafeAreaView>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    img_logo: {
        width: 152,
        height: 32
    },
    fake_icon_box: {
        backgroundColor: '#e4e6eb',
        width: 40,
        height: 40,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scroll_view: {
        flex: 1
    },
    title: {
        fontSize: 26,
        color: COLORS.primary,
        fontWeight: '500'
    }
})