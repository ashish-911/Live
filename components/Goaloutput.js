import React from "react";
import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";

const Goaloutput = (props) => {



    return (
        <FlatList style={Styles.container2} data={props.goalValue}
            renderItem={goals => {
                return (
                    <Pressable onPress={() => { props.deleteItem(goals.item.id) }}>
                        <Text style={Styles.text}>{goals.item.data}</Text>
                    </Pressable>
                )
            }
            } />

    )
}


export default Goaloutput;


const Styles = StyleSheet.create({
    container2: {
        width: '100%',
    },
    text: {
        backgroundColor: "#8f5ff7",
        padding: 8,
        borderRadius: 7,
        color: '#ffffff',
        margin: 6
    }
})
