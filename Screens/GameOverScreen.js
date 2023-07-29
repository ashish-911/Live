import React from "react";
import { Image, StyleSheet, Text, View, useWindowDimensions, Dimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../Constants/Colors";
import NumberContainer from "../components/NumberContainer";
import Highlighter from "../components/Highlighter";
import Button from "../components/Button";



const GameOverScreen = ({ userNumber, totalRounds, newGame }) => {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 400) {
        imageSize = 250;
    }
    if (height < 400) {
        imageSize = 150;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <View style={{ alignItems: 'center' }}>
            <Title style={{ marginTop: width > 400 ? 10 : 50, padding: 20 }}>Game Over</Title>
            <View style={{ alignItems: 'center', marginVertical: width > 400 ? 5 : 22 }}>
                <Image source={require('../components/Images/success.png')} style={[styles.image, imageStyle]} />
            </View>
            <View style={{ padding: width > 400 ? 5 : 21 }}>
                <Text style={styles.text}>
                    Your Phone needed
                    <Highlighter>{totalRounds} </Highlighter>rounds to guess the number
                    <Highlighter>{userNumber}</Highlighter>
                </Text>
            </View>
            <View >
                <Button style={{ padding: 12 }} onPress={newGame} >Start New Game</Button>
            </View>
        </View >
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: 'white'
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 2,
        borderColor: 'black'
    }
})