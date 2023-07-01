import React from "react";
import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";

const Goaloutput = (props) => {

    const dltGoal = (goals) => {
        // props.goalValue()

        console.log(())

    }

    return (
        <FlatList style={Styles.container2} data={props.goalValue}
            renderItem={(goals) =>
                <Pressable onPress={dltGoal(goals)}>
                    <View>
                        <Text style={Styles.text}>{goals.item.data}</Text>
                    </View>
                </Pressable>
            } />

    )
}


export default Goaloutput;


const Styles = StyleSheet.create({
    container2: {
        width: '100%',
    },
    text: {
        backgroundColor: "#8f5ff7",
        padding: 8,
        borderRadius: 7,
        color: '#ffffff',
        margin: 6
    }
})





























// const Goaloutput = (props) => {



//     return (
//         <View>
//             <Pressable android_ripple={{ color: '#211818' }}
//                 onPress={() => { props.idHandler(props.id) }}
//             >
//                 <View style={Styles.list}>
//                     <Text style={{ padding: 8, color: 'white', margin: 3 }}>
//                         {props.text}
//                     </Text>
//                 </View>
//             </Pressable>


//         </View>
//     )

// }

// const Styles = StyleSheet.create({
//     list: {
//         // borderWidth: 1,
//         backgroundColor: 'rgb(126, 133, 235)',
//         marginBottom: 8,
//         borderRadius: 9
//     }
// })




// export default Goaloutput;