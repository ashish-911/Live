import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native'
import Colors from '../Constants/Colors';



const deviceWidth = Dimensions.get('window').width;


function NumberContainer({ children }) {



    const { width, height } = useWindowDimensions();
    const marginDistance = width > 500 ? 10 : 22;

    return (
        <View>
            <Text style={[styles.numberContainer, { margin: marginDistance }]}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        padding: deviceWidth > 500 ? 22 : 32,
        // margin: marginDistance,
        borderRadius: 32,
        fontWeight: 'bold',
        borderWidth: 3,
        borderColor: Colors.primary400
    }
})