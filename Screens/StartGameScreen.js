import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import Colors from "../Constants/Colors";
import Title from "../components/Title";
import ButtonContainer from "../components/Button";

const StartGameScreen = ({ onPicked }) => {

    const [enteredNumber, setEnteredNumber] = useState("");

    function inputHandler(enteredNumber) {
        setEnteredNumber(enteredNumber);
    }

    function resetInput() {
        setEnteredNumber('');
    }

    function confirmNumber() {
        const confirmationHandler = parseInt(enteredNumber)
        if (isNaN(confirmationHandler) || confirmationHandler <= 0) {
            Alert.alert('Warning', 'Enter Number between 0 to 99',
                [{
                    text: 'Ok', style: 'destructive',
                    onPress: resetInput
                }])
            return;
        }
        onPicked(confirmationHandler);
    }



    return (
        <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ marginTop: 50 }}>
                    <Title>Guess My Number</Title>
                    <View style={styles.container}>
                        <Text style={styles.text}>Enter a Number</Text>
                        <TextInput keyboardType='number-pad' maxLength={2}
                            style={styles.inputContainer}
                            onChangeText={inputHandler}
                            value={enteredNumber}
                        />
                        <View style={{ flexDirection: 'row', margin: 15, }}>
                            <View style={{ flex: 1 }} >

                                <ButtonContainer onPress={resetInput}>Reset</ButtonContainer>
                            </View>
                            <View style={{ flex: 1 }}>

                                <ButtonContainer onPress={confirmNumber}>Confirm</ButtonContainer>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary600,
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 20,
        elevation: 10,
        borderRadius: 11,
        padding: 18,
    },
    inputContainer: {
        width: '15%',
        borderBottomWidth: 2,
        fontWeight: 'bold',
        fontSize: 25,
        borderBottomColor: Colors.secondary500,
        color: Colors.secondary500,
        textAlign: 'center',
    },
    text: {
        color: Colors.secondary500,
        fontSize: 22,
        marginBottom: 10

    }

})