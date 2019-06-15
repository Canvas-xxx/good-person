import { StyleSheet, Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: DeviceWidth
    },
    searchbar: {
        width: DeviceWidth
    },
    contentContainer: {
        paddingVertical: 20
    },
    reportContainer: {
        width: DeviceWidth,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: .5
    }
});