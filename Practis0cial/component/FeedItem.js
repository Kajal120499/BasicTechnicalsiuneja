import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../utils/Images'
import { black } from '../utils/Color'

const FeedItem = ({data,list,index,onClickOption}) => {
  // console.warn(data)
  return (
    <View style={[styles.feed,{marginBottom:list.length-1==index?100:0}]}>
          <View style={styles.topView}>
          <View style={styles.topLeft}>
            <Image source={Images.user} style={{width:20,height:20,marginLeft:10}}/>
            <Text style={styles.username}>{data.username}</Text>
          </View>
          <TouchableOpacity onPress={()=>{onClickOption()}}>
          <Image source={Images.dot} style={{width:20,height:20,marginRight:10}}/>
          </TouchableOpacity>
          </View>
          <Text style={styles.time}>new Date({data.createdAt})</Text>
          <Text style={styles.caption}>{data.caption}</Text>
          {
            data.imageUrl != '' && (
              <Image source={{uri:data.imageUrl}} style={{width:'90%',height:200,alignSelf:'center',marginTop:20,borderRadius:10}}/>
            )
          }

          <View style={styles.bottomView}>
            <TouchableOpacity style={{}}>
            <Image source={Images.like} style={{width:24,height:24,marginLeft:10}}/>
            </TouchableOpacity>
          <Image source={Images.comment} style={{width:24,height:24,marginLeft:20}}/>
          </View>

          <Text style={styles.like}>{data.likes.length +' '+'likes'}</Text>
          <Text style={styles.comments}>{data.comments.length +' '+'View all comment'}</Text>

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
  like:{
    fontWeight:"600",
    marginTop:5,
    fontSize:14,
    color:black,
    marginLeft:20
  },
  comments:{
    // fontWeight:"600",
    marginTop:5,
    fontSize:14,
    color:'gray',
    marginLeft:20
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
  },
  bottomView:{
    width:'90%',
    alignItems:'center',
    flexDirection:'row',
    marginLeft:10,
    // backgroundColor:'red',
    marginTop:20
  }
})