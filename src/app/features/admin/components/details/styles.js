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
    imageContain: {
        width: DeviceWidth,
        height: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 15
    },
    noContain: {
        width: DeviceWidth*0.9,
        flexDirection: 'row',
        padding: 5,
        marginBottom: 15
    },
    textContain: {
        width: DeviceWidth*0.9,
        flexDirection: 'row',
        padding: 5,
        marginBottom: 10
    },
    normalFont: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    },
    bttnStyle: {
        marginBottom: 10,
        width: DeviceWidth*0.8
    }
});