import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, Image } from 'react-native-elements'
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
                            <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('HelpInformationScreen', 
                                { title: 'ตำรวจ', details: [
                                    { title: 'สน.หัวหมาก', tel: '02-123-4567' },
                                    { title: 'สน.รามคำแหง', tel: '02-123-4568' },
                                    { title: 'ตำรวจ', tel: '191' }
                                ]}
                            )}>
                                <View style={styles.imgContain}>
                                    <Image style={styles.imgStyle} source={require('../../../../assets/policeman.png')} PlaceholderContent={<ImageLoding />} />
                                </View>
                                <Text style={{ fontSize: 18, color: 'white' }}>ตำรวจ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('HelpInformationScreen', 
                                { title: 'กู้ภัย', details: [
                                    { title: 'กู้ภัย.หัวหมาก', tel: '02-123-4567' },
                                    { title: 'กู้ภัย.รามคำแหง', tel: '02-123-4568' },
                                    { title: 'กู้ภัย', tel: '191' }
                                ]}
                            )}>
                                <View style={styles.imgContain}>
                                    <Image style={styles.imgStyle} source={require('../../../../assets/rubber.png')} PlaceholderContent={<ImageLoding />} />
                                </View>
                                <Text style={{ fontSize: 18, color: 'white' }}>กู้ภัย</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('HelpInformationScreen', 
                                    { title: 'โรงพยาบาล', details: [
                                        { title: 'รพ.หัวหมาก', tel: '02-123-4567' },
                                        { title: 'รพ.รามคำแหง', tel: '02-123-4568' },
                                        { title: 'โรงพยาบาล', tel: '191' }
                                    ]}
                                )}>
                                <View style={styles.imgContain}>
                                    <Image style={styles.imgStyle} source={require('../../../../assets/hospital.png')} PlaceholderContent={<ImageLoding />} />
                                </View>
                                <Text style={{ fontSize: 18, color: 'white' }}>โรงพยาบาล</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.gridBox} onPress={() => this.props.navigation.navigate('HelpInformationScreen', 
                                    { title: 'ดับเพลง', details: [
                                        { title: 'ดับเพลง.หัวหมาก', tel: '02-123-4567' },
                                        { title: 'ดับเพลง.รามคำแหง', tel: '02-123-4568' },
                                        { title: 'ดับเพลง', tel: '191' }
                                    ]}
                                )}>
                                <View style={styles.imgContain}>
                                    <Image style={styles.imgStyle} source={require('../../../../assets/firefighter.png')} PlaceholderContent={<ImageLoding />} />
                                </View>
                                <Text style={{ fontSize: 18, color: 'white' }}>ดับเพลง</Text>
                            </TouchableOpacity>
                        </View>
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

export default Help