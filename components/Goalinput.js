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