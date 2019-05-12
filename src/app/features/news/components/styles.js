import { StyleSheet, Dimensions } from 'react-native'

const DeviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40
    },

    header: {
        fontSize: 30,
        color: 'white'
    },

    contentContainer: {
        paddingVertical: 20
    },

    contentArea: {
        width: DeviceWidth*.9,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
})

export default styles