import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Theme_Color1, black, white } from '../utils/Color'

const CustomTextInput = ({title,placeholder,value,onChangeText,icon,keyboardType,isValid}) => {
  return (
    <View style={[styles.input,{borderColor:isValid?'#9e9e9e':'red'}]}>
        {
            icon && (
                <Image source={icon} style={styles.icon}/>
            )
        }
        <TextInput placeholder={placeholder} 
                   placeholderTextColor={'lightgray'}
                   value={value}
                   style={{color:black}}
                   onChangeText={txt=>onChangeText(txt)}
                   keyboardType={keyboardType ? 'default'  : 'numeric'}/>
      <Text>{title}</Text>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input:{
        width:'90%',
        height:50,
        flexDirection:'row',
        alignSelf:'center',
        // alignItems:"center",
        backgroundColor:white,
        marginTop:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:Theme_Color1,
        paddingLeft:10,
    },
    icon:{
        width:20,
        height:20,

    }
})