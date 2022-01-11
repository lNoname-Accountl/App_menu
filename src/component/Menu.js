import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Menu() {
    return (
        <View style={styles.container}>
            <Text> Menu Appication </Text>
            <StatusBar style="auto"/>
        </View>
    )
}