import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native'
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
                <TextInput 
                    style={styles.TextInput}
                    placeholder='Password'
                    placeholderTestColor='#47494a'
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
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
        width: 200,
        height: 200,
        alignItems: 'center',
    },

    inputView: {
        backgroundColor: '#c0f8ff',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        alignItems: 'center',
    },

    loginBtn: {
        width: '50%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#00e3ff',
    },
})


