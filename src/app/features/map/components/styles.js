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
    mapContain: {
        width: DeviceWidth*0.9,
        height: 350,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center"
    },
    mapStyle: {
        width: DeviceWidth*0.9,
        height: 350
    }
})

export default styles