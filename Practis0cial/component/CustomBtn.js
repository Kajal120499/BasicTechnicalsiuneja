import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Theme_Color1, white } from '../utils/Color'

const CustomBtn = ({title,onClicck}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={()=>onClicck()}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn:{
        width:'90%',
        height:50,
        backgroundColor:Theme_Color1,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
        borderRadius:10
    },
    title:{
        color:white,
        fontSize:22
    }
})