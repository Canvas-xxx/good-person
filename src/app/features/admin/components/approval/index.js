import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import styles from "./styles";
import Layout from '../../../../components/layout'

class Approval extends Component {
    convertDate = date => {
        const dd = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
        const mm = ((date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1)
        const yyyy = date.getFullYear() + 543
        return `${dd}/${mm}/${yyyy}`
    }

    render() {
        const { navigation } = this.props
        const no = navigation.getParam('no', 'No.')
        const date = navigation.getParam('Date', new Date())

        return(
            <Layout>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>รับเรื่อง</Text>
                    <View style={styles.textContain}>
                        <Text style={[styles.normalFont, { textAlign: 'center' }]}>เรื่องที่: {no}</Text>
                        <Text style={[styles.normalFont, { textAlign: 'center' }]}>{this.convertDate(date)}</Text>
                    </View>
                    <View style={styles.textContain}>
                        <Text style={{fontSize: 20, color: 'white'}}>คำอธิบาย: </Text>
                        <TextInput style={styles.inputStyle} placeholder="คำอธิบายเพิ่มเติม" numberOfLines={4} multiline={true}></TextInput>
                    </View>
                    <View style={styles.textContain}>
                        <Button title="ล้างข้อมูล" titleStyle={{ color: '#000000' }} buttonStyle={{ backgroundColor: 'red' }} containerStyle={styles.bttnStyle} onPress={() => this.props.navigation.navigate('AdminHomeScreen')}></Button>
                        <Button title="ตกลง" titleStyle={{ color: '#000000' }} buttonStyle={{ backgroundColor: 'yellow' }} containerStyle={styles.bttnStyle} onPress={() => this.props.navigation.navigate('AdminHomeScreen')}></Button>
                    </View>
                </SafeAreaView>
            </Layout>
        )
    }
}

export default Approval