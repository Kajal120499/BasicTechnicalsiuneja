import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const SecondFile = () => {
    useEffect(()=>{
        console.warn(count)
        console.warn(data)
    },[count,data])

    const [count,setCount]=useState(0)
    const [data,setData]=useState(100)

  return (
    <View>
      <Text style={{color:'red'}}>{count}</Text>
      <Text style={{color:'red'}}>{data}</Text>

      <Button title='Update count' onPress={()=>{setCount(count+3)}}/>
      <Button title='Update Data' onPress={()=>{setData(data+1)}}/>

    </View>
  )
}

export default SecondFile

const styles = StyleSheet.create({})