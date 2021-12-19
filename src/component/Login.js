import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, touchableOpacity, } from 'react-native'
import { Action, Actions } from 'react-native-router-flux'
import { useNavigation } from "@react-navigation/native"
 
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style = {styles.image} source = {require("../assets/Logo.png")}/>
                
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.TextInput}
                    placeholder='Username'
                    placeholderTestColor='#47494a'
                    onChangeText={(username) => setUsername(username)}
                />
            </View>

            <View style={styles.inputView}>
                <TestInput 
                    style={styles.TextInput}
                    placeholder='Password'
                    placeholderTestColor='#47494a'
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <touchableOpacity style={styles.loginBtn} onPress={goToMenu}>
                <Text style={styles.loginText}>LOGIN</Text>
            </touchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',      
    },
    image: {
        marginBottom: 40
    },

    inputView: {
        backgroundColor: '#c0f8ff',
        borderRadius: 30,
        width: '70%',
        height: 45,
        matginBottom: 20,
        alignItems: 'center',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        matginLeft: 20,
    },

    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#00e3ff',
    },
})


