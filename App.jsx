import React, { useState } from "react";
import { Button, Pressable, StyleSheet, TextInput, View, Text, Alert, ScrollView, FlatList, Modal } from "react-native";
"react-native";
import GoalInput from "./components/Goalinput";
import Goaloutput from "./components/Goaloutput";


const App = () => {


  const [goals, setGoals] = useState([])



  const goalHandler = (input) => {

    if (input == null || input == "") {
      Alert.alert('Warning', 'Enter Your Goal')
    }
    else {
      setGoals(currentGoals => [...currentGoals, { data: input, id: Math.random().toString() }]);
    }
  }

  const dltItem = (id) => {
    setGoals((currentGoals) => { return currentGoals.filter((item) => item.id !== id) })
  };


  const [visibility, setVisibility] = useState(false)

  const trueVisibility = () => {
    setVisibility(true)
  };

  const falseVisibility = () => {
    setVisibility(false)
  }


  return (
    <View style={Styles.container}>

      <Button title="Add Goal" onPress={trueVisibility} />
      <Modal visible={visibility} animationType="slide">
        <GoalInput goalHint={goalHandler} modVisible={falseVisibility} />
      </Modal>
      <Goaloutput goalValue={goals} deleteItem={dltItem} />
    </View >
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#ba97e5'
  },

});


export default App;