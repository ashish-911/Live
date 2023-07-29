import { Alert, StyleSheet, Text, View, FlatList, Dimensions, useWindowDimensions } from 'react-native'
import { useState, useEffect } from 'react';
import Colors from '../Constants/Colors';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';
import ButtonContainer from '../components/Button';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let miniBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({ userNumber, onGameOver, onCountRound }) => {


    // const deviceWidth = Dimensions.get('screen').width;
    // const deviceHeight = Dimensions.get('screen').height;

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRoundCounter, setGuessRoundCounter] = useState([initialGuess])
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess == userNumber) {
            setTimeout(() => {
                onGameOver();
            }, 500);
        }
    }, [currentGuess, userNumber, onGameOver]);


    useEffect(() => {
        miniBoundary = 1;
        maxBoundary = 100;
    }, [])


    useEffect(() => {
        onCountRound();
    }, [currentGuess])


    const nextGuessHandler = (direction) => {

        if (direction === 'lower' && currentGuess < userNumber ||
            direction === 'greater' && currentGuess > userNumber) {
            Alert.alert('Warning', "You are lying", [{ text: 'Okey', style: 'cancel' }])
            // console.log(deviceWidth, deviceHeight)
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        }
        else {
            miniBoundary = currentGuess + 1;
        }
        const newGuessNumber = generateRandomBetween(miniBoundary, maxBoundary, currentGuess)
        console.log(miniBoundary, maxBoundary)


        setCurrentGuess(newGuessNumber);
        setGuessRoundCounter(newRoundCounter => [newGuessNumber, ...newRoundCounter]);
    }

    const guessLength = guessRoundCounter.length;

    let content = (<><NumberContainer>{currentGuess}</NumberContainer>

        <View style={styles.controlContainer}>
            <Text style={styles.textcontainer}>Higher or Lower</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <ButtonContainer onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-circle-outline" size={24} color="white" />
                    </ButtonContainer>
                </View>
                <View style={{ flex: 1 }}>
                    <ButtonContainer onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </ButtonContainer>
                </View>
            </View>
        </View>
    </>);

    if (width > 500) {

        content = (<>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    <ButtonContainer onPress={nextGuessHandler.bind(this, 'lower')} >
                        <Ionicons name="remove-circle-outline" size={24} color="white" />
                    </ButtonContainer>
                </View>

                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={{ flex: 1 }} >
                    <ButtonContainer onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </ButtonContainer>
                </View>

            </View >

        </>
        )
    }



    return (
        <View style={styles.container}>
            <Title style={{ marginTop: width > 400 ? 30 : 35 }}>Opponent's Guess</Title>
            {content}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={guessRoundCounter}
                    renderItem={(itemData) =>
                        <GuessLogItem guessRounds={guessLength - itemData.index} totalGuess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    controlContainer: {
        backgroundColor: Colors.primary600,
        borderRadius: 32,
        margin: 19,
        padding: 20,
    },
    textcontainer: {
        color: Colors.secondary500,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
        padding: 10,
        marginBottom: 10
    }


})


export default GameScreen;