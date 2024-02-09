import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { black } from '../utils/Color'
import { Images } from '../utils/Images'

const OptionModal = ({onclick,onCloe,visible}) => {
  return (
    <Modal transparent onRequestClose={()=>{onCloe()}} visible={visible}>
        <View style={{backgroundColor:"rgba(0,0,0,0.4)",flex:1}}>
        <View style={{backgroundColor:"#fff",width:'100%',height:200,paddingBottom:20,bottom:0,position:'absolute',borderTopLeftRadius:20,borderTopRightRadius:20}}>
        <Text style={{color:black,fontSize:18,fontWeight:'500',marginTop:20,marginLeft:20}}>Post Options</Text>
        <View>
         
         <TouchableOpacity style={{width:'90%',alignItems:'center',flexDirection:'row',marginTop:10}} onPress={()=>{onclick(1)}}>
           <Image source={Images.edit} style={{width:20,height:20,marginLeft:20}}/>
           <Text style={{color:black,fontSize:16,marginLeft:10}}>Edit Options</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{width:'90%',alignItems:'center',flexDirection:'row',marginTop:30}} onPress={()=>{onclick(2)}}>
           <Image source={Images.delete} style={{width:20,height:20,marginLeft:20}}/>
           <Text style={{color:black,fontSize:16,marginLeft:10}}>Delete Options</Text>
         </TouchableOpacity>
        </View>
       </View>
        </View>
    </Modal>
  )
}

export default OptionModal

const styles = StyleSheet.create({})