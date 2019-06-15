import { StyleSheet, Dimensions } from 'react-native'

const DeviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    header: {
        fontSize: 30,
        color: 'white',
        marginBottom: 15
    },

    imageContain: {
        width: DeviceWidth,
        height: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 15
    },
    imageSelected: {
        width: DeviceWidth,
        height: 300,
    },

    inputContain: {
        width: DeviceWidth*0.9,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        padding: 5,
        marginBottom: 15
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