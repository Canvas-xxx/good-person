import React, { Component } from "react";
import { View, Button, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Layout from '../../../components/layout'

class Home extends Component {
    static navigationOptions = {
        title: 'Home Screen',
        header: {
            visible: false,
        }
    };

    render() {
        return (
         <Layout>
            <View style={styles.container}>
                <View style={styles.gridView}>
                    <View>
                        <View style={styles.gridBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ReportScreen')}>
                                <Image 
                                    style={{height: 80, width: 80}}
                                    source={require('../../../../assets/positive-vote.png')}
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                            {/* <Button title="ทำความดี" onPress={() => this.props.navigation.navigate('ReportScreen')}></Button> */}
                        </View>
                        <View style={styles.gridBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ReportScreen')}>
                                <Image 
                                    style={{height: 80, width: 80}}
                                    source={require('../../../../assets/notice.png')}
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                            {/* <Button title="ร้องเรียน" onPress={() => this.props.navigation.navigate('ReportScreen')}></Button> */}
                        </View>
                    </View>

                    <View>
                        <View style={styles.gridBox}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ReportScreen')}>
                                <Image 
                                    style={{height: 80, width: 80}}
                                    source={require('../../../../assets/journalism.png')}
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                            {/* <Button title="แจ้งเหตุ" onPress={() => this.props.navigation.navigate('ReportScreen')}></Button> */}
                        </View>
                        <View style={styles.gridBox}>
                            <TouchableOpacity>
                                <Image 
                                    style={{height: 80, width: 80}}
                                    source={require('../../../../assets/map-location.png')}
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                            {/* <Button title="แผนที่" onPress={() => this.props.navigation.navigate('ReportScreen')}></Button> */}
                        </View>
                    </View>
                </View>

                <View>
                    <Button title="แจ้งข่าวสาร" onPress={() => this.props.navigation.navigate('NewsScreen')}></Button>
                    <Button title="ช่วยเหลือ" onPress={() => this.props.navigation.navigate('HelpScreen')}></Button>
                </View>
            </View>
          </Layout>
        );
    }
}

export default Home;