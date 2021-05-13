import React, { Component } from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import Header from '../navigation/Header'

class Home extends Component {
    render () {
        return (
            <Header>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
            </Header>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    fake_post: {
        height: 250,
        marginHorizontal: 16,
        marginTop: 17,
        borderRadius: 8,
        backgroundColor: '#ccc'
    }
})