import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import styles from "./styles";
import Layout from '../../../../components/layout'

class Details extends Component {
    convertDate = date => {
        const dd = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate())
        const mm = ((date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1)
        const yyyy = date.getFullYear() + 543
        return `${dd}/${mm}/${yyyy}`
    }

    render() {
        const { navigation } = this.props
        const no = navigation.getParam('no', 'No.')
        const title = navigation.getParam('title', 'Title')
        const date = navigation.getParam('Date', new Date())
        const place = navigation.getParam('place', 'Place')
        const description = navigation.getParam('description', 'Description')
        const reporter = navigation.getParam('reporter', 'Reporter')

        return(
            <Layout>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>{title}</Text>
                    <View style={styles.noContain}>
                        <Text style={[styles.normalFont, { textAlign: 'right' }]}>เรื่องที่: {no}</Text>
                    </View>
                    <View style={styles.imageContain}>
                        <TouchableOpacity onPress={this.handleChoosePhoto}>
                            <Image
                                style={{height: 150, width: 150}}
                                source={require('../../../../../assets/add-image.png')}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textContain}>
                        <Text style={styles.normalFont}>วันที่: {this.convertDate(date)}</Text>
                    </View>
                    <View style={styles.textContain}>
                        <Text style={styles.normalFont}>สถานที่: {place}</Text>
                    </View>
                    <View style={styles.textContain}>
                        <Text style={styles.normalFont}>คำอธิบาย: {description}</Text>
                    </View>
                    <View style={styles.textContain}>
                        <Text style={styles.normalFont}>ผู้แจ้งเหตุ: {reporter}</Text>
                    </View>
                    <Button title="รับเรื่อง" titleStyle={{ color: '#000000' }} buttonStyle={{ backgroundColor: 'yellowgreen' }} containerStyle={styles.bttnStyle} onPress={() => this.props.navigation.navigate('ApprovalScreen', { no: no, date: date })}></Button>
                </SafeAreaView>
            </Layout>
        )
    }
}

export default Details