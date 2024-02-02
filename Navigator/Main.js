import { StyleSheet, Text, View } from 'react-native'
import React, { createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PracticeReactNative from './PracticeReactNative'
import SocialPractice from './SocialPractice'

const Main = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={'PracticeReactNative'} component={PracticeReactNative}/>
            <Stack.Screen name={'SocialPractice'} component={SocialPractice}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})