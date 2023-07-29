import { StyleSheet, Text } from "react-native"
import Colors from "../Constants/Colors"


function Title({ children, style }) {
    return (
        < Text style={[styles.textContainer, style]} > {children}</Text >
    )

}

const styles = StyleSheet.create({
    textContainer: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        margin: 20,
        borderWidth: 3,
        padding: 8,
        borderRadius: 32,
        borderColor: 'white'
    }
})

export default Title;