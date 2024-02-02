import { Button,FlatList,ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Theme_Color1, black } from '../Practis0cial/utils/Color'

const FileOne = () => {
    const[name,setName]=useState('')
    const[pass,setPass]=useState('')
    const[display,setDisplay]=useState(false)

    const users=[
        {id:1,name:'Peter'},
        {id:2,name:'Anil'}
    ]

    const user=['Peter','Anil']

  return (
    <ScrollView>
        <Text style={styles.name}>Topics in this file...{'\n'}{'\n'}
                                                        1. Get Input value {'\n'}
                                                        2. Form value {'\n'}
                                                        3. list with flatlist{'\n'}
                                                        4 . list with map{'\n'}
                                                        5. Grid</Text>

        <Text style={styles.name}>Your Name is:{name}</Text>
        <TextInput placeholder='Enter Name' 
                   placeholderTextColor={'lightgray'}
                   value={name}
                   style={styles.nameInput}
                //    onChangeText={txt=>{console.warn(txt)}}/>
                onChangeText={txt=>{setName(txt)}}/>
        <Button title='Clear Input Value' onPress={()=>{setName('')}}/>


        <Text style={styles.commonHeading}>simple form</Text>
        <TextInput placeholder='Enter Name' 
                   placeholderTextColor={'lightgray'}
                   value={name}
                   style={styles.nameInput}
                onChangeText={txt=>{setName(txt)}}/>

        <TextInput placeholder='Enter Password' 
                   placeholderTextColor={'lightgray'}
                   value={pass}
                   style={styles.nameInput}
                   onChangeText={txt=>{setPass(txt)}}
                   secureTextEntry/>

        <Button title='Print Details' onPress={()=>{setDisplay(true)}} color={'green'}/>
         <View>
            {
                display ? <View>
                            <Text style={styles.name}>Your Name is:{name}</Text>
                            <Text style={styles.name}>Your Password is:{pass}</Text>
                </View> : null
            }
         </View>
         <Button title='Clear Input Value' onPress={()=>{setDisplay(false),setName(''),setPass('')}}/>
        
        {/* List with Flatlist */}
         <Text style={styles.commonHeading}>Flatlist Component with Object</Text>
         <FlatList data={users} 
         renderItem={({item,index})=>{return(
            <Text style={[styles.name,{padding:10,backgroundColor:Theme_Color1,margin:12}]}>{item.name}</Text>
        )}}
        keyExtractor={item=>item.id}/>

        <Text style={styles.commonHeading}>Flatlist with Array</Text>
        <FlatList data={user} 
         renderItem={({item,index})=>{return(
            <Text style={[styles.name,{padding:10,backgroundColor:Theme_Color1,margin:12}]}>{item}</Text>
        )}}
        keyExtractor={item=>item.id}/>
        
        {/* Map with List */}
        <Text style={styles.commonHeading}>List with Map(also called Custom) feature of js</Text>
        {
            users.map((item)=><Text style={styles.name}>{item.name}</Text>
            )
        }

        {/* Dynamic grid */}
        <Text style={styles.commonHeading}>Dynamic Grid</Text>
        <View style={{flexDirection:'row',flex:1,flexWrap:'wrap'}}>
        <Text style={styles.grid}>Box 1</Text>
        <Text style={styles.grid}>Box 2</Text>
        <Text style={styles.grid}>Box 3</Text>
        <Text style={styles.grid}>Box 4</Text>
        <Text style={styles.grid}>Box 5</Text>
        <Text style={styles.grid}>Box 6</Text>
        <Text style={styles.grid}>Box 7</Text>
        <Text style={styles.grid}>Box 8</Text>
        <Text style={styles.grid}>Box 9</Text>
        <Text style={styles.grid}>Box 10</Text>
        <Text style={styles.grid}>Box 11</Text>
        <Text style={styles.grid}>Box 12</Text>
        <Text style={styles.grid}>Box 13</Text>
        <Text style={styles.grid}>Box 14</Text>
        <Text style={styles.grid}>Box 15</Text>
        <Text style={styles.grid}>Box 16</Text>
         {
            users.map((item)=><Text style={styles.grid}>{item.name}</Text>)
         }
        </View>

    </ScrollView>
  )
}

export default FileOne

const styles = StyleSheet.create({
    nameInput:{
        fontSize:18,
        color:black,
        borderWidth:2,
        borderColor:'red',
        margin:10,
        paddingLeft:10
    },
    name:{
        color:black,
        marginTop:20,
        marginLeft:20
    },
    grid:{
     padding:15,
     margin:5,
     backgroundColor:"red",
     textAlign:"center",
     textAlignVertical:'center'
    },
    commonHeading:{
        fontSize:20,
        color:black,
        marginTop:10,
        marginLeft:10,
        textDecorationLine:'underline'
    }
})