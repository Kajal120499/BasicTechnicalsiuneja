import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const fruit=(val)=>{
    console.warn(val)
  }

  const[name,setName]=useState('Anil')
  function update(){
    setName("Kajal")
  }

  function updateProp(){
    setName("Kajal")
  }
  
  let namee="Addy"
  return (
    <View>
      <Button title='Press here' color={'red'} onPress={()=>fruit("Hello")}/>
      <Text>{name}</Text>
      <Button title='Update Name' color={'red'} onPress={()=>update()}/>
      <User name={name}/>
      <Button title='Update prop' color={'red'} onPress={()=>updateProp()}/>
    </View>
  )
};

const User=(data)=>{
  console.warn(data)
  return(
  <View style={{}}>
    <Text style={{color:'red'}}>Name:{data.name}</Text>
  </View>
  )
}

export default App

const styles = StyleSheet.create({})