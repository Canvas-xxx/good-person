import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import Layout from '../../../../components/layout'

class HelpInformation extends Component {
    render() {
        return (
            <Layout>
                <View style={styles.container}>
                    <Text style={styles.header}>ตำรวจ</Text>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={styles.contentContain}>
                            <Text style={{fontSize: 20}}>สน.หัวหมาก: 02-123-4567</Text>
                        </View>
                        <View style={styles.contentContain}>
                            <Text style={{fontSize: 20}}>สน.รามคำแหง: 02-123-4568</Text>
                        </View>
                        <View style={styles.contentContain}>
                            <Text style={{fontSize: 20}}>ตำรวจ: 191</Text>
                        </View>
                    </ScrollView>
                </View>
            </Layout>
        )
    }
}

export default HelpInformation