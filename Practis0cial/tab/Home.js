import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Base_Url, Feeds, delete_post, update_post } from '../utils/String'
import { white } from '../utils/Color'
import { useIsFocused } from '@react-navigation/native'
import FeedItem from '../component/FeedItem'
import OptionModal from '../component/OptionModal'
import UpdateModal from '../component/UpdateModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../component/Loader'

const Home = () => {
  const [feed, setFeed] = useState([])
  const [openOption, setopenOption] = useState(false)
  const [updateOption, setUpdateOption] = useState(false)
  const [caption, setCaption] = useState('')
  const[logingetData,setDataGetData]=useState(null)
  const [loading,setLoading]=useState(false)
  const isFocused = useIsFocused()
  useEffect(() => {
    getData()
  }, [isFocused])

  const getAsyncData = async () => {
    const getData = await AsyncStorage.getItem("data")
    const jsonConvert = JSON.parse(getData)
    //  console.warn(jsonConvert)
    setDataGetData(jsonConvert)
  }

  const getData = () => {
    fetch(Base_Url + Feeds)
      .then(res => res.json())
      .then(json => {
        // console.warn(json.data)
        json.data.reverse()
        setFeed(json.data)
        getAsyncData()
      }).catch(err => {
        console.log(err)
      })
  }

  const deleteData = () => {
    // const url = Base_Url + delete_post + '/'+ logingetData._id
    // console.warn(url)
    setLoading(true)
    fetch(Base_Url+delete_post+'/'+logingetData._id,{
      method:'delete'
    })
    .then(res=>res.json())
    .then(json=>{
      // console.warn("DEl:",json)
      setLoading(false)
      setDataGetData(json)
      getData()
    }).catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }

  const updateData = (caption) => {
    const data=JSON.stringify({
        "userId": logingetData._id,
         "caption": caption,
         
         "username":logingetData.username
    })
    // console.warn("....:",data)
    setLoading(true)
    fetch(Base_Url+update_post+'/'+logingetData._id,{
      method:'put',
      body:data,
    })
    .then(res=>res.json())
    .then(json=>{
      // console.warn("DEl:",json)
      setLoading(false)
      setDataGetData(json)
      getData()
    }).catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }
  return (
    <View style={styles.conatiner}>
      <FlatList data={feed} style={{}} renderItem={({ item, index }) => {
        return (
          <FeedItem data={item} list={feed} onClickOption={() => {
            setDataGetData(item)
            setopenOption(true)
          }} />
        )
      }} />
      <OptionModal visible={openOption}
        onCloe={() => { setopenOption(false) }}
        onclick={x => {
          setopenOption(false)
          if (x == 2) {
            deleteData()
          } else {
            setUpdateOption(true)
          }
        }} />
      
      <Loader visible={loading}/>
      <UpdateModal visible={updateOption}
        data={logingetData}
        onCloe={() => { setUpdateOption(false) }}
        onclick={x => {
          setUpdateOption(false);
          updateData(x)
        }} />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: white
  },
})