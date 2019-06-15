import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styles from './styles'
import Layout from '../../../components/layout'

import MapView from 'react-native-maps'

class Map extends Component {
    render() {
        return(
            <Layout>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.header}>แผนที่</Text>
                    <View style={styles.mapContain}>
                        <MapView
                            style={styles.mapStyle}
                            region={{
                                latitude: 15.8700,
                                longitude: 100.9925,
                                latitudeDelta: 30,
                                longitudeDelta: 30,
                            }}>
                        </MapView>
                    </View>
                </SafeAreaView>
            </Layout>
        )
    }
}

export default Map