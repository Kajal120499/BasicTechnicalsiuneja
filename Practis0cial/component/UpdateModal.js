import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Theme_Color, black, white } from '../utils/Color'
import { Images } from '../utils/Images'

const UpdateModal = ({ onclick, onCloe, visible, data }) => {
    // console.log("dataa is",data.caption)
    const [caption, setCaption] = useState(data && data.caption ? data.caption : '')
    const [img, setImg] = useState(data && data.imageUrl ? data.imageUrl : '')

    useEffect(() => {
        setCaption(data && data.caption ? data.caption : '')
        setImg(data && data.imageUrl ? data.imageUrl : '')
    }, [visible])

    return (
        <Modal transparent onRequestClose={() => { onCloe() }} visible={visible}>
            <View style={{ backgroundColor: "rgba(0,0,0,0.4)", flex: 1 }}>
                <View style={{ backgroundColor: "#fff", width: '100%', height: '100%', paddingBottom: 20 }}>
                    <View style={{ marginTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: black, fontSize: 18, fontWeight: '500', marginLeft: 20 }} onPress={() => { onCloe() }}>Cancel</Text>
                        <Text style={{ color: black, fontSize: 18, fontWeight: '500', }}>Edit Info</Text>
                        <Text style={{ color: black, fontSize: 18, fontWeight: '500', marginRight: 20 }}>Done</Text>
                    </View>

                    <TouchableOpacity style={{ width: '100%', alignItems: 'center', flexDirection: 'row', marginTop: 40, borderWidth: 0.4, borderColor: 'lightgray', padding: 20, alignSelf: 'center' }} onPress={() => { onclick(1) }}>
                        {/* <Image source={{ uri: data.imageUrl }} style={{ width: 100, height: 130, marginLeft: 10, borderRadius: 8 }} /> */}
                        <View style={{ alignSelf: 'center', marginLeft: 20 }}>
                            <TextInput placeholder='Type Caption...' value={caption} onChangeText={txt => { setCaption(txt) }} style={{ color: black }} />
                        </View>
                    </TouchableOpacity>


                    <View>

                        <TouchableOpacity style={{ width: '90%', alignItems: 'center',justifyContent:'center',backgroundColor:Theme_Color, marginTop: 70,borderRadius:10,height:50,alignSelf:'center' }} onPress={() => { onclick(caption) }}>
                            <Text style={{ color: white, fontSize: 16, marginLeft: 10 }}>Update Post</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default UpdateModal

const styles = StyleSheet.create({})