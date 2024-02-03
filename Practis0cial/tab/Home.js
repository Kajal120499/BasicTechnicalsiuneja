import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Base_Url, Feeds } from '../utils/String'
import { white } from '../utils/Color'
import { useIsFocused } from '@react-navigation/native'
import FeedItem from '../component/FeedItem'

const Home = () => {
  const [feed,setFeed]=useState([])
  const isFocused=useIsFocused()
  useEffect(()=>{
    getData()
  },[isFocused])
  const getData=()=>{
    fetch(Base_Url+Feeds).then(res=>res.json())
    .then(json=>{
      // console.warn(json.data)
      setFeed(json.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <View style={styles.conatiner}>
      <FlatList data={feed}style={{marginBottom:100}} renderItem={({item})=>{
           return(
             <FeedItem data={item} />
           )
      }}/>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:white
},
})