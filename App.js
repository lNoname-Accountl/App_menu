import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/Routes'

class manuApp extends Component {
    render() {
        return (
            <Routes/>
        )
    }
}

export default manuApp
AppRegistry.registerComponent('manuApp', () => manuApp)