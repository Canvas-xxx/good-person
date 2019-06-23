import { StyleSheet, Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: DeviceWidth
    },
    header: {
        fontSize: 30,
        color: 'white',
        marginBottom: 5
    },
    textContain: {
        width: DeviceWidth*0.9,
        flexDirection: 'row',
        padding: 5,
        marginBottom: 15
    },
    normalFont: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    },
    inputStyle: {
        flex: 1,
        height: 150,
        backgroundColor: 'white',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
    bttnStyle: {
        width: DeviceWidth*0.3
    }
});