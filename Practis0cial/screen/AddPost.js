import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Theme_Color, black, white } from '../utils/Color'
import { Images } from '../utils/Images'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

export default function AddPost() {
    const Inputref=useRef()
    const[caption, setCaption]=useState('')
    const[imgData,setImgData]=useState({
        assets: [
            {
                "fileName": "",
                "height": 0,
                "type": "image/jpeg",
                "uri": "",
                "width": 0
            },
        ],
    })

    const openCamera = async()=>{
       const res = await launchCamera({mediaType:'photo'})
       if(res.didCancel){
       }else{
        setImgData(res)
       }
       console.warn(res)
    }

    const openGallery = async()=>{
        const res =await launchImageLibrary({mediaType:'photo'})
        setImgData(res)
        console.warn(res)
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.captionBox} onPress={()=>{Inputref.current.focus()}} activeOpacity={1}>
         <TextInput style={styles.input} 
                    value={caption}
                    onChangeText={(txt)=>{setCaption(txt)}}
                    ref={Inputref}
                    placeholder='Type Caption here....' 
                    placeholderTextColor={black}/>
        </TouchableOpacity>
          {
            imgData!=null && (<View style={styles.selectedImgView}>
                  <Image source={{uri:imgData.assets[0].uri}} style={styles.selectedImgView}/>

                  <TouchableOpacity style={styles.removeBtn} onPress={()=>{
                    setImgData(null)
                  }}>
                  <Image source={Images.cross} style={styles.icon}/>
                  </TouchableOpacity>
                </View>) 
            }
        <TouchableOpacity style={styles.pickerBtn} onPress={()=>{openCamera()}}>
          <Image source={Images.camera} style={styles.icon}/>
          <Text style={styles.textHeading}>Open Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pickerBtn} onPress={()=>{openGallery()}}>
          <Image source={Images.galeery} style={styles.icon}/>
          <Text style={styles.textHeading}>Open Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn,{backgroundColor:caption==''&& imgData==null ? '#9e9e9e':Theme_Color}]} 
                     onPress={()=>{openGallery()}} disabled={caption==''&& imgData==null ?true:false}>
          <Text style={{color:white,fontSize:18}}>Post</Text>
        </TouchableOpacity>
      <Text>AddPost</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white
    },
    captionBox:{
        alignSelf:'center',
        borderRadius:10,
        borderColor:'#9e9e9e',
        width:'94%',
        height:120,
        marginTop:20,
        borderWidth:1,
        paddingLeft:10
    },
    input:{
        width:'100%',
        color:black
    },
    pickerBtn:{
        width:'90%',
        alignSelf:'center',
        borderBottomColor:'#9e9e9e',
        height:50,
        borderBottomWidth:1,
        alignItems:'center',
        flexDirection:'row',
        marginTop:20
    },
    icon:{
        width:24,
        height:24,
        // tintColor:'#9e9e9e'
    },
    textHeading:{
        fontSize:18,
        marginLeft:15,
        color:'#9e9e9e'
    },
    selectedImgView:{
        width:'90%',
        height:200,
        marginTop:20,
        alignSelf:'center',
        // resizeMode:'contain'
    },
    removeBtn:{
        width:30,
        height:30,
        backgroundColor:white,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:20,
        right:20
    },
    btn:{
        backgroundColor:Theme_Color,
        justifyContent:'center',
        alignItems:'center',
        marginTop:60,
        width:'90%',
        alignSelf:'center',
        height:50,
        borderRadius:10
    }
})