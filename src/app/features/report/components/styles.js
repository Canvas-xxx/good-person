import { StyleSheet, Dimensions } from 'react-native'

const DeviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    header: {
        fontSize: 30,
        color: 'white'
    },

    imageContain: {
        width: DeviceWidth,
        height: 300,
        backgroundColor: 'white'
    },

    inputContain: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        padding: 5
    },

    normalFont: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    },

    textInput: {
        flex: 1.5,
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white'
    }
})

export default styles