import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { white } from '../utils/Color'
import { Images } from '../utils/Images'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login")
        },3000)
    },[])

    const getData=()=>{
        
    }
  return (
    <View style={styles.container}>
        <Image source={Images.logo} style={styles.logo}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"white",
        justifyContent:'center',
        alignItems:"center"
    },
    logo:{
        width:'40%',
        height:'30%',
        resizeMode:"stretch"
    }
})