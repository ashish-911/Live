import React, { useState } from "react"
import { View, Text, TextInput, Button, Modal, Image } from 'react-native'


const GoalInput = (props) => {

    const [input, setInput] = useState('')

    const inputHandler = (val) => {
        setInput(val);
    }

    const giveInput = () => {
        props.goalHint(input);
        setInput('');
        props.modVisible();

    }


    return (
        <View style={{ backgroundColor: '#ba97e5', flex: 1, padding: 4 }}>
            <View style={{
                flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', paddingTop: "40%",
            }}>
                <Image source={require('../components/Images/target-1414775_1280.png')}
                    style={{ width: 100, height: 100, marginBottom: 20 }} />
                <View style={{ flexDirection: 'row' }}>
                    <TextInput placeholder="Type here"
                        style={{ width: "75%", backgroundColor: '#d5b8f2', borderRadius: 7, margin: 5, padding: 10 }}
                        onChangeText={inputHandler} value={input}
                    />
                    <View style={{ justifyContent: 'center' }}>
                        <Button title="Add Goal" onPress={giveInput} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GoalInput;






























//             {/* // import { StyleSheet, TextInput, View, Pressable, Text, Alert, Modal, Image, Button } from "react-native";
// // import { useState } from "react";

// // const Goalinput = (props) => { */}
//             {/*
// //     const [text, setText] = useState("");
// //     const textChange = (val) => {
// //         setText(val);
// //     } */}
//             {/*
// {/* //     const goalHandler = () => { */}
//             {/* //         props.handler(text);
// //         setText("");
// //     }


// //     return (

// //         <View style={Styles.container1} >
// //             <Image source={require("../components/Images/target-1414775_1280.png")}
// //                 style={{ width: 100, height: 100 }}
// //             /> */}

//             {/* /???*          < TextInput */ * /} */}
//             {/* //                 style={{ */}
//             {/* //                     backgroundColor: '#bddfc2', borderColor: '#5fcd0e',
// //                     borderWidth: 2, marginBottom: 20, marginTop: 20,
// //                     margin: 8, width: '80%', padding: 8, color: 'black', borderRadius: 5
// //                 }}
// //                 placeholder="Type here"
// //                 onChangeText={textChange}
// //                 value={text}
// //             />

// //             <View style={{ flexDirection: 'row', }}>
// //                 <View style={{ marginRight: 60 }}>
// //                     <Pressable style={{
// //                         color: 'white', backgroundColor: '#f14a4a',
// //                         alignItems: 'center',
// //                     }}
// //                         onPress={props.model}
// //                         android_ripple={{ color: '#5fcd0e' }}
// //                     >
// //                         <View style={{
// //                             borderWidth: 1, borderRadius: 3, borderColor: '#fa0b0f', */}
//             {/* //                         }}>
// //                             <Text style={{ padding: 7, color: 'white' }}>Cancel</Text>
// //                         </View>
// //                     </Pressable >
// //                 </View>




// //                 <Pressable style={{
// //                     color: 'white', backgroundColor: '#bddfc2',
// //                     alignItems: 'center',
// //                 }}
// //                     onPress={goalHandler}
// //                     android_ripple={{ color: '#5fcd0e' }}
// //                 >
// //                     <View style={{
// //                         borderRadius: 3, borderColor: '#5ecd0e',
// //                     }}>
// //                         <Text style={{ padding: 7 }}>Add Goal</Text>
// //                     </View>
// //                 </Pressable >
// //             </View> */}
//             {/*
// //         </View >
// //     )
// // }

// // export default Goalinput;
// // const Styles = StyleSheet.create({
// //     container1: {
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         backgroundColor: '#f3afaf',

// //     },

// // }) */}