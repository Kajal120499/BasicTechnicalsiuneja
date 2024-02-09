import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, SectionList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Theme_Color1, black, white } from '../Practis0cial/utils/Color'

const FileOne = () => {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [display, setDisplay] = useState(false)

    const users = [
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Anil' }
    ]

    const skill = [
        { id: 1, name: 'Php' },
        { id: 2, name: 'Java' },
        { id: 3, name: 'ReactNative' },
        { id: 4, name: 'Angular' }, 
        { id: 5, name: 'C++' },
    ]

    const user = ['Peter', 'Anil']

    const DATA = [
        {
            title: 'Main dishes',
            data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
            title: 'Sides',
            data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
            title: 'Drinks',
            data: ['Water', 'Coke', 'Beer'],
        },
        {
            title: 'Desserts',
            data: ['Cheese Cake', 'Ice Cream'],
        },
    ];

    const [selectedRadio, setselectedRadio] = useState(0)

    return (
        <ScrollView>
            <Text style={styles.name}>Topics in this file...{'\n'}{'\n'}
                1. Get Input value {'\n'}
                2. Form value {'\n'}
                3. list with flatlist{'\n'}
                4. list with map{'\n'}
                5. Grid{'\n'}
                6. sectionList{'\n'}
                7. component with flatlist{'\n'}
                9. Radio Button</Text>

            <Text style={styles.name}>Your Name is:{name}</Text>
            <TextInput placeholder='Enter Name'
                placeholderTextColor={'lightgray'}
                value={name}
                style={styles.nameInput}
                //    onChangeText={txt=>{console.warn(txt)}}/>
                onChangeText={txt => { setName(txt) }} />
            <Button title='Clear Input Value' onPress={() => { setName('') }} />


            <Text style={styles.commonHeading}>simple form</Text>
            <TextInput placeholder='Enter Name'
                placeholderTextColor={'lightgray'}
                value={name}
                style={styles.nameInput}
                onChangeText={txt => { setName(txt) }} />

            <TextInput placeholder='Enter Password'
                placeholderTextColor={'lightgray'}
                value={pass}
                style={styles.nameInput}
                onChangeText={txt => { setPass(txt) }}
                secureTextEntry />

            <Button title='Print Details' onPress={() => { setDisplay(true) }} color={'green'} />
            <View>
                {
                    display ? <View>
                        <Text style={styles.name}>Your Name is:{name}</Text>
                        <Text style={styles.name}>Your Password is:{pass}</Text>
                    </View> : null
                }
            </View>
            <Button title='Clear Input Value' onPress={() => { setDisplay(false), setName(''), setPass('') }} />

            {/* List with Flatlist */}
            <Text style={styles.commonHeading}>Flatlist Component with Object</Text>
            <FlatList data={users}
                renderItem={({ item, index }) => {
                    return (
                        <Text style={[styles.name, { padding: 10, backgroundColor: Theme_Color1, margin: 12 }]}>{item.name}</Text>
                    )
                }}
                keyExtractor={item => item.id} />

            <Text style={styles.commonHeading}>Flatlist with Array</Text>
            <FlatList data={user}
                renderItem={({ item, index }) => {
                    return (
                        <Text style={[styles.name, { padding: 10, backgroundColor: Theme_Color1, margin: 12 }]}>{item}</Text>
                    )
                }}
                keyExtractor={item => item.id} />

            {/* Map with List */}
            <Text style={styles.commonHeading}>List with Map(also called Custom) feature of js</Text>
            {
                users.map((item) => <Text style={styles.name}>{item.name}</Text>
                )
            }

            {/* Dynamic grid */}
            <Text style={styles.commonHeading}>Dynamic Grid</Text>
            <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
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
                    user.map((item) => <Text style={styles.grid}>{item}</Text>)
                }
            </View>

            {/*sectionlist*/}
            <Text style={styles.commonHeading}>sectionList</Text>
            <SectionList
                sections={DATA}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                        <Text style={styles.name}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{
                        fontSize: 30, color: black
                    }}>{title}</Text>
                )} />


            {/* Radio Button */}
            <Text style={styles.commonHeading}>Radio Button</Text>
            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{}} onPress={() => { setselectedRadio(0) }}>
                    <View style={styles.radioWrapper}>
                        <View style={[styles.radio,]}>
                            <View style={[styles.radioBg, { backgroundColor: selectedRadio == 0 ? black : white }]}></View>
                        </View>
                        <Text style={styles.radioTxt}>Radio 1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{}} onPress={() => { setselectedRadio(1) }}>
                    <View style={styles.radioWrapper}>
                        <View style={[styles.radio,]}>
                            <View style={[styles.radioBg, { backgroundColor: selectedRadio == 1 ? black : white }]}></View>
                        </View>
                        <Text style={styles.radioTxt}>Radio 2</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Radio Button seond way*/}
            <Text style={styles.commonHeading}>Radio Button seond way</Text>
            <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{}} onPress={() => { setselectedRadio(0) }}>
                    <View style={styles.radioWrapper}>
                        <View style={[styles.radio,]}>
                            {
                                selectedRadio == 0 ? <View style={[styles.radioBg]}></View> : null
                            }
                        </View>
                        <Text style={styles.radioTxt}>Radio 1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{}} onPress={() => { setselectedRadio(1) }}>
                    <View style={styles.radioWrapper}>
                        <View style={[styles.radio,]}>
                            {
                                selectedRadio == 1 ? <View style={[styles.radioBg]}></View> : null
                            }
                        </View>
                        <Text style={styles.radioTxt}>Radio 2</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/*Dynamic Radio Button*/}
            <Text style={styles.commonHeading}>Dynamic Radio Button</Text>
            {
                skill.map((item,index)=>
                    <TouchableOpacity key={index} style={{}} onPress={() => {setselectedRadio(item.id)}}>
                    <View style={styles.radioWrapper}>
                    <View style={[styles.radio,]}>
                            {
                                selectedRadio == item.id ? <View style={[styles.radioBg]}></View> : null
                            }
                        </View>
                        <Text style={styles.radioTxt}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                )
            }
            
            {/*Component with Flatlist*/}
            <Text style={styles.commonHeading}>Component with Flatlist</Text>
            <FlatList data={users} renderItem={({ item }) =>
                <>
                    <Data item={item} />
                    <Data12 item={item} />
                </>
            } />


        </ScrollView>
    )
}

const Data = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', borderColor: 'red', borderWidth: 2, marginBottom: 10, }}>
            <Text style={{ flex: 1, margin: 2, color: 'orange', backgroundColor: 'green' }}>{item.name}</Text>
            <Text style={{ flex: 1, margin: 2, color: 'orange' }}>{item.id}</Text>
        </View>
    )
}

const Data12 = (props) => {
    const item = props.item
    return (
        <View style={{ flexDirection: 'row', borderColor: 'red', borderWidth: 2, marginBottom: 10, }}>
            <Text style={{ flex: 1, margin: 2, color: 'orange', backgroundColor: 'green' }}>{item.name}</Text>
            <Text style={{ flex: 1, margin: 2, color: 'orange' }}>{item.id}</Text>
        </View>
    )
}
export default FileOne

const styles = StyleSheet.create({
    nameInput: {
        fontSize: 18,
        color: black,
        borderWidth: 2,
        borderColor: 'red',
        margin: 10,
        paddingLeft: 10
    },
    name: {
        color: black,
        marginTop: 20,
        marginLeft: 20
    },
    grid: {
        padding: 15,
        margin: 5,
        backgroundColor: Theme_Color1,
        textAlign: "center",
        textAlignVertical: 'center'
    },
    commonHeading: {
        fontSize: 20,
        color: black,
        marginTop: 10,
        marginLeft: 10,
        textDecorationLine: 'underline'
    },
    radio: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "#000",
        borderWidth: 2,
        margin: 10
    },
    radioTxt: {
        color: "red",
        marginLeft: 20
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioBg: {
        width: 20,
        height: 20,
        backgroundColor: black,
        borderRadius: 10,
        margin: 3
    }
})