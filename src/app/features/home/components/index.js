import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Button, Image } from 'react-native-elements'
import styles from "./styles";
import Layout from '../../../components/layout'

class Home extends Component {
    render() {
        return (
         <Layout>
            <View style={styles.container}>
                <View style={styles.gridView}>
                    <View>
                        <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('ReportScreen', { title: 'ทำความดี' })}>
                            <View style={styles.imgContain}>
                                <Image style={styles.imgStyle} source={require('../../../../assets/positive-vote.png')} PlaceholderContent={<ImageLoding />} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'white' }}>ทำความดี</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('ReportScreen', { title: 'ร้องเรียน' })}>
                            <View style={styles.imgContain}>
                                <Image style={styles.imgStyle} source={require('../../../../assets/notice.png')} PlaceholderContent={<ImageLoding />} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'white' }}>ร้องเรียน</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('ReportScreen', { title: 'แจ้งเหตุ' })}>
                            <View style={styles.imgContain}>
                                <Image style={styles.imgStyle} source={require('../../../../assets/journalism.png')} PlaceholderContent={<ImageLoding />} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'white' }}>แจ้งเหตุ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('MapScreen', { title: 'แผนที่' })}>
                            <View style={styles.imgContain}>
                                <Image style={styles.imgStyle} source={require('../../../../assets/map-location.png')} PlaceholderContent={<ImageLoding />} />
                            </View>
                            <Text style={{ fontSize: 18, color: 'white' }}>แผนที่</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Button title="แจ้งข่าวสาร" titleStyle={{ color: '#000000' }} buttonStyle={{ backgroundColor: '#ffffff' }} containerStyle={styles.newsBttn} onPress={() => this.props.navigation.navigate('NewsScreen')}></Button>
                    <Button title="ช่วยเหลือ" titleStyle={{ color: '#000000' }} buttonStyle={{ backgroundColor: '#ffffff' }} containerStyle={styles.newsBttn} onPress={() => this.props.navigation.navigate('HelpScreen')}></Button>
                </View>
            </View>
          </Layout>
        );
    }
}

class ImageLoding extends Component {
    render() {
        return (
            <View style={styles.loadingContain}>
            </View>
        )
    }
}

export default Home;