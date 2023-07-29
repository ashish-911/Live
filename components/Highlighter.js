import { StyleSheet, Text, View } from "react-native"
import Colors from "../Constants/Colors";

function Highlighter({ children }) {
    return (
        <Text style={styles.text}> {children}</Text>
    )
}

export default Highlighter;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: Colors.secondary600
    }
})