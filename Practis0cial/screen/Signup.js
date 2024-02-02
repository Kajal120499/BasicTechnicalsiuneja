import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../utils/Images'
import { Theme_Color, black, white } from '../utils/Color'
import CustomTextInput from '../component/CustomTextInput'
import CustomBtn from '../component/CustomBtn'
import { Base_Url, Register_url, id, login_url } from '../utils/String'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Signup = ({ navigation }) => {
  const [mail, setMail] = useState('chirag12@gmail.com')
  const [badMail, setBadMail] = useState('')
  const [pass, setPass] = useState('12346')
  const [badPass, setBadPass] = useState('')
  const [name, setName] = useState('Rajni')
  const [ph, setPh] = useState('9990762840')
  const [selectedGender, setselectedGender] = useState(0)
  const[logingetData,setDataGetData]=useState([])


  const validate = () => {
    let isValid = false;
    if (mail == '') {
      setBadMail("Enter Mail")
      isValid = false;
    } else if (mail != '' && !mail.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      setBadMail("Enter Valid Mail")
      isValid = false;
    } else {
      setBadMail('')
      isValid = false;
    }
  }
  
  const getAsyncData=async()=>{
    const getData = await AsyncStorage.getItem("data")
    const jsonConvert =JSON.parse(getData);
    console.warn("Get Data:",(jsonConvert._id))
    setDataGetData(jsonConvert)
    loginApiCall()
}
    
    const loginApiCall=()=>{
    const body = JSON.stringify({
      "username": name,
      "emailId": mail,
      "mobile": ph,
      "gender": selectedGender == 0 ? 'Male' : 'Female',
      "password": pass
    })
    // console.log(body)
    // const url= Base_Url+Register_url+'/'+logingetData._id;
    // console.warn(url)
    fetch(Base_Url + Register_url, {
      method: 'post',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    },)
      .then(kajal => kajal.json()).then(json => {
        //  var datagettt = json ;
        //  console.warn(json)
      }).catch(err => {
        console.warn(err)
      })
  }

  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.logo} />
      <Text style={styles.loginTxt}>Signup</Text>

      <CustomTextInput placeholder={'Enter Name'}
        value={name}
        onChangeText={txt => { setName(txt) }}
        keyboardType
        isValid={badMail == '' ? 'red' : 'blue'} />
      {
        badMail != '' && (<Text style={{ color: 'red', backgroundColor: "blue", marginLeft: 20 }}>{badMail}</Text>)
      }

      <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity style={[styles.genderBtn, { borderColor: selectedGender == 0 ? Theme_Color : black }]} onPress={() => { setselectedGender(0) }}>
            <Image source={Images.male} style={[styles.icon, { tintColor: selectedGender == 0 ? Theme_Color : black }]} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.genderBtn, { borderColor: selectedGender == 1 ? Theme_Color : black }]} onPress={() => { setselectedGender(1) }}>
            <Image source={Images.female} style={[styles.icon, { tintColor: selectedGender == 1 ? Theme_Color : black }]} />
          </TouchableOpacity>
        </View>

      <CustomTextInput placeholder={'Enter Mail'}
        value={mail}
        onChangeText={txt => { setMail(txt) }}
        keyboardType
        isValid={badMail == '' ? 'red' : 'blue'} />
      {
        badMail != '' && (<Text style={{ color: 'red', backgroundColor: "blue", marginLeft: 20 }}>{badMail}</Text>)
      }
      <CustomTextInput placeholder={'Enter Mobile'}
        value={ph}
        onChangeText={txt => { setPh(txt) }}
        keyboardType
        isValid={badMail == '' ? 'red' : 'blue'} />
      {
        badMail != '' && (<Text style={{ color: 'red', backgroundColor: "blue", marginLeft: 20 }}>{badMail}</Text>)
      }
      <CustomTextInput placeholder={'Enter password'}
        value={pass}
        onChangeText={txt => { setPass(txt) }}
        keyboardType
        isValid={badMail == '' ? 'red' : 'blue'} />
      {
        badMail != '' && (<Text style={{ color: 'red', backgroundColor: "blue", marginLeft: 20 }}>{badMail}</Text>)
      }

      <CustomBtn title={'Signup'} onClicck={() => {
        if (validate) {
          getAsyncData()
        }
      }} />

      <Text style={[styles.SignupTxt, {}]} onPress={() => { navigation.navigate("Signup") }}>Alreday have Account ?
        <Text style={[styles.signuo, {}]}> Signup</Text></Text>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
  },
  logo: {
    width: '20%',
    height: '10%',
    resizeMode: "stretch",
    marginTop: 100
  },
  loginTxt: {
    fontSize: 30,
    color: Theme_Color
  },
  SignupTxt: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    alignSelf: "center",
    marginTop: 30
  },
  signuo: {
    color: Theme_Color,
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 10
  },
  genderView:{
    width:'90%',
    flexDirection:'row',
    marginTop:20,
    justifyContent:"space-evenly",
    alignSelf:"center"
   },
   genderBtn:{
    width:'40%',
    height:100,
    borderWidth:1,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
   },
   icon:{
    width:40,
    height:40,
    resizeMode:"contain"
   }
})