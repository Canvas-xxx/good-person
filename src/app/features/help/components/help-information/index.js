import React, { Component } from 'react'
import { View, Text, ScrollView, Linking } from 'react-native'
import styles from './styles'
import Layout from '../../../../components/layout'

class HelpInformation extends Component {
    render() {
        const { navigation } = this.props
        const title = navigation.getParam('title', 'Title')
        const details = navigation.getParam('details', [])

        return (
            <Layout>
                <View style={styles.container}>
                    <Text style={styles.header}>{title}</Text>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        {
                            details.map((item, key) => {
                                return (
                                    <View style={styles.contentContain} key={key}>
                                        <Text style={{fontSize: 20}}>{item.title}: </Text>
                                        <Text style={{fontSize: 20, textDecorationLine: 'underline', color: 'blue'}} onPress={() => { Linking.openURL(`tel:${item.tel.replace(/-/g, '')}`) }}>
                                            {item.tel}
                                        </Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </Layout>
        )
    }
}

export default HelpInformation