import React, { Component } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { SearchBar } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import styles from "./styles";
import Layout from '../../../components/layout'

class Admin extends Component {
    state = {
        search: '',
        reportList: [
            { title: 'ทำความดี', shortDes: 'เก็บขยะ' },
            { title: 'ทำความดี', shortDes: 'เก็บขยะ' },
            { title: 'ทำความดี', shortDes: 'เก็บขยะ' },
            { title: 'ทำความดี', shortDes: 'เก็บขยะ' },
            { title: 'แจ้งเหตุ', shortDes: 'เก็บขยะ' },
            { title: 'ทำความดี', shortDes: 'เก็บขยะ' },
            { title: 'ร้องเรียน', shortDes: 'เก็บขยะ' }
        ]
    }

    onSearching = search => {
        this.setState({ search })
    }

    render() {
        const { search } = this.state
        const { reportList } = this.state

        return (
            <Layout>
                <SafeAreaView style={styles.container}>
                    <SearchBar placeholder="ค้นหา..." onChangeText={this.onSearching} value={search} lightTheme={true} containerStyle={styles.searchbar} />
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        {reportList.map((report, key) => {
                            return (
                                <TouchableOpacity key={key} style={styles.reportContainer}>
                                    <Text>{report.title}: {report.shortDes}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </SafeAreaView>
            </Layout>
        )
    }
}

export default Admin