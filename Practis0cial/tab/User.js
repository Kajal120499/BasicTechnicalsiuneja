import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect , useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Base_Url, user_by_id } from '../utils/String'
import { Images } from '../utils/Images'
import { Theme_Color1, black, white } from '../utils/Color'

const User = () => {
  const[logingetData,setDataGetData]=useState([])
  const[userData,setUserData]=useState(null)

  useEffect(()=>{
    // getAsyncData()
    profileApiCall()
  },[])

  const getAsyncData=async()=>{
       const getData=await AsyncStorage.getItem("data")
       const jsonConvert= JSON.parse(getData)
      //  console.warn(jsonConvert)
       setDataGetData(jsonConvert)
      //  profileApiCall()
  }

  const profileApiCall=()=>{
    // const url=Base_Url+user_by_id+'/'+logingetData._id
    // console.warn(url)
    fetch(Base_Url+user_by_id+'/'+logingetData._id)
    .then(res=>res.json())
    .then(json=>{
      // console.warn(json.data)
      setUserData(json.data)
      getAsyncData()
    })
  }
  return (
    <View style={styles.conatiner}>
      <View style={styles.profileView}>
     <Image source={Images.user} style={styles.profile}/>
     </View>
      <Text style={styles.name}>{userData?userData.username:''}</Text>
      <Text style={styles.name}>{userData?userData.emailId:''}</Text>
      <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnTxt}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.CountView}>
        <View style={{alignItems:'center'}}>
        <Text style={styles.name}>{userData?userData.followers.length:0}</Text>
        <Text style={styles.name}>{`Followers`}</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={styles.name}>{userData?userData.following.length:0}</Text>
        <Text style={styles.name}>{`Following`}</Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={styles.name}>{0}</Text>
        <Text style={styles.name}>{`Posts`}</Text>
        </View>
      </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    backgroundColor:white
},
profileView:{
  marginTop:20,
  width:120,
  height:120,
  backgroundColor:Theme_Color1,
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  borderRadius:60
},
profile:{
  width:50,
  height:50,
  tintColor:white
},
name:{
  color:black,
  fontSize:16,
  alignSelf:'center',
  fontWeight:'600',
  marginTop:10
},
btn:{
  width:'40%',
  height:40,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderRadius:8,
  alignSelf:'center',
  marginTop:20
},
btnTxt:{
  color:Theme_Color1,
  fontSize:16,
  fontWeight:'600',
},
CountView:{
  marginTop:20,
  width:'100%',
  height:120,
  // backgroundColor:Theme_Color1,
  justifyContent:'space-evenly',
  flexDirection:'row',
  alignItems:'center',
}
})