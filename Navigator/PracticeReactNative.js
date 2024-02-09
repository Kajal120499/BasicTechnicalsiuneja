import { StyleSheet, Text, View } from 'react-native'
import React, { createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FileOne from '../src/FileOne'
import Demo from '../src/Demo'
import SecondFile from '../src/SecondFile'

const PracticeReactNative = () => {
    const Stack = createNativeStackNavigator()
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={'SecondFile'} component={SecondFile}/>
            <Stack.Screen name={'FileOne'} component={FileOne}/>
        </Stack.Navigator>
  )
}

export default PracticeReactNative

const styles = StyleSheet.create({})