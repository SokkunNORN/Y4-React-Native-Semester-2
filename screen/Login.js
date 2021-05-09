import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Text,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback 
        onPress={() => Keyboard.dismiss()}
    >
        {children}
    </TouchableWithoutFeedback>
);

class Login extends Component {
    render () {
        onSignIn = () => {}

        return (
            <DismissKeyboard>
                <SafeAreaView style={styles.container}>
                    <View style={styles.title}>
                        <Text style={styles.text}>X-Box</Text>
                        <Text>So many of my smiles are because of you.</Text>
                    </View>
                    <View>
                        <TextInput placeholder='Username' style={styles.input}></TextInput>
                        <TextInput placeholder='Password' secureTextEntry style={styles.input}></TextInput>
                        <TouchableOpacity style={styles.button} onPress={() => onSignIn}>
                            <Text style={styles.textBtn}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  input: {
    borderColor: '#263238',
    borderBottomWidth: .5,
    height: 44,
    marginBottom: 16,
    marginLeft: 32,
    marginRight: 32
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#FF1744',
    marginLeft: 32,
    marginRight: 32,
    marginTop: 24
  },
  textBtn: {
    color: '#fff',
    fontSize: 18
  },
  title: {
    alignItems: 'center',
    marginBottom: 32
  },
  text: {
    fontSize: 24,
    marginBottom: 8
  }
})

export default Login