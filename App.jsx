import React, { useState } from "react";
import { Button, Pressable, StyleSheet, TextInput, View, Text, Alert, ScrollView, FlatList } from "react-native";
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
    // setGoals()
    setGoals((currentGoals) => currentGoals.filter(goals.id !== id))

  }

  return (
    <View style={Styles.container}>

      <GoalInput goalHint={goalHandler} />
      <Goaloutput goalValue={goals} deleteItem={dltItem} />

    </View >
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'center'
  },

});


export default App;


































































// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, TextInput, Button, Pressable, FlatList, Alert, Modal } from "react-native";
// import Goaloutput from "./components/Goaloutput";
// import Goalinput from "./components/Goalinput";



// const App = () => {

//   const [goals, setGoals] = useState([]);


//   const button = (text) => {
//     if (text == null || text == "") {
//       Alert.alert("Warning", "Enter Valid Text")
//     }
//     else {
//       setGoals((enteredGoals) => [...enteredGoals,
//       {
//         data: text, id: Math.random().toString()
//       }]
//       );
//       setVisibility(false)
//     }
//   }

//   const deleteHandler = (id) => {
//     setGoals(enteredGoals => {
//       return enteredGoals.filter((item) => item.id !== id);
//     })
//   }

//   const [visibility, setVisibility] = useState(false)

//   const cancelHandler = () => {
//     setVisibility(false)
//   }

//   const buttonHandler = () => {
//     setVisibility(true)
//   }




//   return (

//     <View style={Styles.container}>
//       <View style={{ marginBottom: 10, }}>
//         <Button title="Add Goals" onPress={buttonHandler} />
//       </View>
//       <Modal visible={visibility} animationType="slide">

//         <Goalinput handler={button} model={cancelHandler} button={buttonHandler} />

//       </Modal>

//       <View style={Styles.container2}>
//         <FlatList data={goals}
//           renderItem={itemData => {
//             return <Goaloutput text={itemData.item.data} idHandler={deleteHandler} id={itemData.item.id} />
//           }}
//         // keyExtractor={(index, itemData) => index.toString()}
//         />
//       </View>
//     </View >
//   )

// };

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#',
//     padding: 3
//   },

//   container2: {
//     flex: 5,
//   },

// })


// export default App