import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { white } from '../utils/Color'
import { Images } from '../utils/Images'

const AddPost = () => {
  const ref=useRef()
  return (
    <View style={styles.conatiner}>
          <TouchableOpacity style={styles.captioNBox}>
            <TextInput ref={ref} placeholder='Type Caption...' style={styles.input}/>
           </TouchableOpacity>

           <TouchableOpacity>
            <Image source={Images.camera} style={{width:20,height:20}}/>
           </TouchableOpacity>
           <TouchableOpacity>
            <Image source={Images.galeery} style={{width:20,height:20}}/>
           </TouchableOpacity>
      <Text>AddPost</Text>
    </View>
  )
}

export default AddPost

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:white
},
captioNBox:{
  width:'90%',
  height:130,
  borderWidth:1,
  alignSelf:'center',
  marginTop:20,
  borderRadius:20,
  borderColor:'#9e9e9e'
},
input:{
  width:'90%'
}
})