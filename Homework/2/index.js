import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Text
} from 'react-native'
import { SIZES, COLORS } from '../../assets/theme/index'

const ReactHook = () => {

    const [name, setName] = useState('')

    const onInputChange = value => {
        setName(value)
    }

    const onAlert = () => {
        name && alert('Welcome box, ' + name)
    }

    return (
        <>
            <SafeAreaView>
                <View>
                    <TextInput
                        placeholder='Name please...'
                        style={[
                            styles.text_field
                        ]}
                        onChangeText={onInputChange}
                    />
                    <TouchableOpacity style={styles.button} onPress={onAlert}>
                        <Text style={styles.textBtn}>Alert</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ReactHook

const styles = StyleSheet.create({
    text_field: {
        borderColor: '#000',
        borderWidth: .3,
        margin: SIZES.base(),
        height: SIZES.height,
        borderRadius: SIZES.radius,
        padding: SIZES.base(1)
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SIZES.base(),
        marginRight: SIZES.base(),
        height: SIZES.height,
        backgroundColor: COLORS.base
    },
    textBtn: {
        color: COLORS.while,
        fontSize: 16
    }
})