import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'

class News extends Component {
    static navigationOptions = {
        header: 'News Screen'
    };

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>แจ้งข่าวสาร</Text>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.contentArea}>
                        <Text>วันที่ 16 พค. 2562 มีการพ่นยากันยุงหมู่บ้านลัดดาแลนด์</Text>
                    </View>
                    <View style={styles.contentArea}>
                        <Text>วันที่ 26 พค. 2562 เชิญทุกท่านประชุมตัวแทนหมู่บ้าน</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default News