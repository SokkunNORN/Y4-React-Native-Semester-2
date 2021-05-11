import React, { Component } from 'react'
import {
    View,
    SafeAreaView,
    StyleSheet,
    Image
} from 'react-native'

import Animated, { Easing } from 'react-native-reanimated'

const { Value, timing } = Animated

class Home extends Component {

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
                    <Image
                        source={require('../assets/icons/Facebook-Logo.png')}
                        style={styles.img_logo}
                    />
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
                    <View style={styles.fake_post}></View>
                    <View style={styles.fake_post}></View>
                    <View style={styles.fake_post}></View>
                    <View style={styles.fake_post}></View>
                </Animated.ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home

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
    fake_post: {
        height: 250,
        marginHorizontal: 16,
        marginTop: 17,
        borderRadius: 8,
        backgroundColor: '#ccc'
    }
})