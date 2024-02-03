import { StyleSheet,ScrollView,Text, View } from 'react-native'
import React from 'react'
import { black, white } from '../Practis0cial/utils/Color'

const Demo = () => {
    const user = ["Box1", "Box2", "Box3", "Box3"]
    return (
        <ScrollView style={styles.container}>
            {/* firstway to do task */}
            <Text style={styles.commonHeading}>firstway to do task</Text>

            <View style={styles.box}>
                {user.map((item) =>
                    <Text style={styles.grid}>{item}</Text>
                )}
            </View>


            {/* second way to do task */}
            <Text style={styles.commonHeading}>second way to do task</Text>

            <View style={styles.box}>
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
            </View>

        </ScrollView>
    )
}

export default Demo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    box: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: "wrap",
        alignItems: 'center',
        marginHorizontal: 20,
    },
    grid: {
        margin: 2,
        backgroundColor: "blue",
        textAlign: "center",
        textAlignVertical: 'center',
        width: 100,
        height: 100,
        borderRadius: 10
    },
    commonHeading: {
        fontSize: 20,
        color: black,
        marginTop: 10,
        marginLeft: 10,
        textDecorationLine: 'underline'
    }
})