import React, { Component } from "react";
import { View, Button, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Layout from '../../../components/layout'

class Help extends Component {
    render() {
        return (
            <Layout>
                <View style={styles.container}>
                    <Text style={styles.header}>ช่วยเหลือ</Text>
                    <View style={styles.gridView}>
                        <View>
                            <View style={styles.gridBox}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpInformationScreen')}>
                                    <Image 
                                        style={{height: 80, width: 80}}
                                        source={require('../../../../assets/policeman.png')}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>
                                {/* <Button title="ตำรวจ" onPress={() => this.props.navigation.navigate('HelpInformationScreen')}></Button> */}
                            </View>
                            <View style={styles.gridBox}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpInformationScreen')}>
                                    <Image 
                                        style={{height: 80, width: 80}}
                                        source={require('../../../../assets/rubber.png')}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>
                                {/* <Button title="กู้ภัย" onPress={() => this.props.navigation.navigate('HelpInformationScreen')}></Button> */}
                            </View>
                        </View>

                        <View>
                            <View style={styles.gridBox}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpInformationScreen')}>
                                    <Image 
                                        style={{height: 80, width: 80}}
                                        source={require('../../../../assets/hospital.png')}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>
                                {/* <Button title="โรงพยาบาล" onPress={() => this.props.navigation.navigate('HelpInformationScreen')}></Button> */}
                            </View>
                            <View style={styles.gridBox}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpInformationScreen')}>
                                    <Image 
                                        style={{height: 80, width: 80}}
                                        source={require('../../../../assets/firefighter.png')}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>
                                {/* <Button title="ดับเพลง" onPress={() => this.props.navigation.navigate('HelpInformationScreen')}></Button> */}
                            </View>
                        </View>
                    </View>
                </View>
            </Layout>
        );
    }
}

export default Help