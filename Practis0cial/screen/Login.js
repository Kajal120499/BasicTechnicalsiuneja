import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Images } from '../utils/Images'
import { Theme_Color, white } from '../utils/Color'
import CustomTextInput from '../component/CustomTextInput'
import CustomBtn from '../component/CustomBtn'
import { Base_Url, login_url } from '../utils/String'
import Loader from '../component/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
    const[mail,setMail]=useState('chirag12@gmail.com')
    const[badMail,setBadMail]=useState('')
    const[pass,setPass]=useState('12346')
    const[badPass,setBadPass]=useState('')

    const[loading,setLoading]=useState(false)
    const[logingetData,setDataGetData]=useState([])


    const getData=async()=>{
        try{
            const loginData = JSON.stringify(logingetData);
            console.warn("saved",loginData)
            await AsyncStorage.setItem("data",loginData)
            loginApiCall()
        }
        catch (error) {
            console.error('Error setting array in AsyncStorage:', error);
          }
        
    }

    const validate=()=>{
        let isValid=false;
        if(mail==''){
            setBadMail("Enter Mail")
            isValid=false;
        }else if(mail!='' && !mail.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            setBadMail("Enter Valid Mail")
            isValid=false;
        }else{
            setBadMail('')
            isValid=false;
        }
    }
    const loginApiCall=()=>{
        const body=JSON.stringify({
            "emailId":mail,
            "password":pass
        })
        // console.log(body)
        setLoading(true)
        fetch(Base_Url+login_url,{
           method:'post',
           body,
           headers: {
            'Content-Type': 'application/json',
            },
        },)
        .then(kajal=>kajal.json())
        .then(json=>{
            setLoading(false)
            const Data = json.data
            // console.warn("...:",Data)
            setDataGetData(Data)
            // console.warn("+++:",Data11)
            navigation.navigate("Signup")
        }).catch(err=>{
            console.warn(err)
            setLoading(false)
        })
    }
  return (
    <View style={styles.container}>
     <Image source={Images.logo} style={styles.logo}/>
      <Text style={styles.loginTxt}>Login</Text>

      <CustomTextInput placeholder={'Enter Mail'} 
                       value={mail} 
                       onChangeText={txt=>{setMail(txt)}} 
                       keyboardType
                       isValid={badMail==''?'red':'blue'}/>
                       {
                        badMail != '' &&(<Text style={{color:'red',backgroundColor:"blue",marginLeft:20}}>{badMail}</Text>)
                       }
      <CustomTextInput placeholder={'Enter Password'} value={pass} onChangeText={txt=>{setPass(txt)}} />
      
      <CustomBtn title={'Login'} onClicck={()=>{if(validate){
        getData()
      }}}/>

      <Text style={[styles.SignupTxt,{}]} onPress={()=>{navigation.navigate("Signup")}}>Create New Account ?
           <Text  style={[styles.signuo,{}]}> Signup</Text></Text>
    
    <Loader visible={loading}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white,
        alignItems:"center",
    },
    logo:{
        width:'20%',
        height:'10%',
        resizeMode:"stretch",
        marginTop:100
    },
    loginTxt:{
        fontSize:30,
        color:Theme_Color
    },
    SignupTxt: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        alignSelf: "center",
        marginTop:30
     },
     signuo:{
        color: Theme_Color,
        fontWeight: '500',
        fontSize: 18,
        marginLeft:10
     }
})