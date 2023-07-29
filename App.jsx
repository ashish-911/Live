import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './Constants/Colors';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false)
  const [rounds, setRounds] = useState(0)


  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPicked={pickNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}
      onCountRound={countingRounds} />
  }

  function gameOverHandler() {
    setGameIsOver(true)

  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} totalRounds={rounds} newGame={newGameHandler} />
  }

  function countingRounds() {
    setRounds((rounds) => rounds + 1)
    console.log(rounds)
  }

  function newGameHandler() {
    setRounds(0);
    setGameIsOver(true)
    setUserNumber(null)
  }

  return (
    <>
      <StatusBar style='auto' />
      < LinearGradient colors={[Colors.secondary500, Colors.primary600,]} style={styles.container}>
        <ImageBackground imageStyle={{ opacity: 0.15 }} source={require('./components/Images/background.png')}
          resizeMode='cover' style={styles.container} >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1
  },
});