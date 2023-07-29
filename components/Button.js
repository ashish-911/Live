import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const ButtonContainer = ({ children, onPress, style }) => {

    return (
        <View>
            <Pressable onPress={onPress}
                style={({ pressed }) =>
                    pressed ? [styles.container, styles.opacity] : styles.container}  >
                <Text style={[styles.containerText, style]}>
                    {children}
                </Text>
            </Pressable>
        </View>

    )
}

export default ButtonContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        margin: 4,
        borderRadius: 32,
        // overflow: 'hidden'
    },
    containerText: {
        color: 'white',
        textAlign: 'center',
        padding: 9
    }
    ,
    opacity: {
        opacity: 0.75
    }
})