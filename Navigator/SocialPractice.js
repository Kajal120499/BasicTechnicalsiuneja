import { StyleSheet, Text, View } from 'react-native'
import React, { createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Practis0cial/screen/Login'
import Splash from '../Practis0cial/screen/Splash'
import Signup from '../Practis0cial/screen/Signup'
import Dashboard from '../Practis0cial/screen/Dashboard'
import AddPost from '../Practis0cial/screen/AddPost'

const SocialPractice = () => {
    const Stack = createNativeStackNavigator()
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={'Splash'} component={Splash}/>
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Signup'} component={Signup}/>
            <Stack.Screen name={'Dashboard'} component={Dashboard}/>
            <Stack.Screen name={'AddPost'} component={AddPost} options={{headerShown:true}}/>

        </Stack.Navigator>
  )
}

export default SocialPractice

const styles = StyleSheet.create({})