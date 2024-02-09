import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Theme_Color, black, white } from '../utils/Color'
import { Images } from '../utils/Images'
import Home from '../tab/Home'
import AddPost from '../tab/AddPost'
import User from '../tab/User'

const Dashboard = ({navigation}) => {
    const [selectedTab,setselectedTab]=useState(0)

  return (
    <View style={styles.conatiner}>
      <Text style={styles.heading}>social</Text>
      {selectedTab==0?<Home/>:selectedTab==1?<User/>:null}
      <View style={styles.bottomNav}>
       <TouchableOpacity onPress={()=>{setselectedTab(0)}}>
        <Image source={Images.home} style={[styles.icon,{tintColor:selectedTab==0?'green':'black'}]}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{navigation.navigate("AddPost")}}>
       <Image source={Images.add} style={[styles.icon,{tintColor:selectedTab==1?'green':'black'}]}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{setselectedTab(1)}}>
       <Image source={Images.user} style={[styles.icon,{tintColor:selectedTab==2?'green':'black'}]}/>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:white
    },
    heading:{
        fontSize:30,
        marginLeft:20,
        color:Theme_Color,
        fontWeight:"900"
    },
    bottomNav:{
        position:'absolute',
        bottom:0,
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor:white,
        elevation:10,
        width:'100%',
        height:70,
        alignItems:'center'
    },
    icon:{
        width:26,
        height:26
    }
})