import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'

class Report extends Component {
    static navigationOptions = {
        header: 'Report Screen'
    };

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>แจ้งเหตุ</Text>
                <View style={styles.imageContain}></View>
                <View style={styles.inputContain}>
                    <Text style={styles.normalFont}>สถานที่: </Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContain}>
                    <Text style={styles.normalFont}>คำอธิบาย: </Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
            </View>
        )
    }
}

export default Report