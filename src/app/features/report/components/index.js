import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styles from './styles'
import Layout from '../../../components/layout'

class Report extends Component {
    render() {
        const { navigation } = this.props
        const title = navigation.getParam('title', 'Title')

        return(
            <Layout>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>{title}</Text>
                    <View style={styles.imageContain}>
                        <TouchableOpacity>
                            <Image
                                style={{height: 150, width: 150}}
                                source={require('../../../../assets/add-image.png')}
                                resizeMode="stretch"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContain}>
                        <Text style={styles.normalFont}>สถานที่: </Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.inputContain}>
                        <Text style={styles.normalFont}>คำอธิบาย: </Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </SafeAreaView>
            </Layout>
        )
    }
}

export default Report