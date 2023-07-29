import Colors from "../Constants/Colors";
import { Text, View, StyleSheet } from 'react-native'

function GuessLogItem({ guessRounds, totalGuess }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}> #{guessRounds}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Oppenent's Guess: {totalGuess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary500,
        padding: 9,
        margin: 4,
        flexDirection: 'row',
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'space-between',
    }
})


export default GuessLogItem;

