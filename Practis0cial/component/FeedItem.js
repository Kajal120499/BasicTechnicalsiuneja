import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../utils/Images'
import { black } from '../utils/Color'

const FeedItem = ({data}) => {
  console.warn(data)
  return (
    <View style={styles.feed}>
          <View style={styles.topView}>
          <View style={styles.topLeft}>
            <Image source={Images.user} style={{width:20,height:20,marginLeft:10}}/>
            <Text style={styles.username}>{data.username}</Text>
          </View>
          <TouchableOpacity>
          <Image source={Images.dot} style={{width:20,height:20,marginRight:10}}/>
          </TouchableOpacity>
          </View>
          <Text style={styles.time}>new Date({data.createdAt})</Text>
          <Text style={styles.caption}>{data.caption}</Text>

    </View>
  )
}

export default FeedItem

const styles = StyleSheet.create({
  feed:{
    width:'90%',
    // height:200,
    paddingBottom:20,
    backgroundColor:'#f2f2f2',
    marginTop:20,
    alignSelf:'center',
    borderRadius:10
  },
  topView:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },
  topLeft:{
    flexDirection:"row",
    // backgroundColor:"red"
  },
  username:{
    fontWeight:"600",
    // marginTop:10,
    fontSize:18,
    color:black,
    marginLeft:10
  },
  time:{
    // fontWeight:"600",
    // marginTop:10,
    fontSize:14,
    color:black,
    marginLeft:20
  },
  caption:{
    width:'90%',
    alignSelf:'center',
    marginTop:10,
    fontSize:16,
    color:black,
  }
})