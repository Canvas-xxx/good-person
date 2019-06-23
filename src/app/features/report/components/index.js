import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import styles from './styles'
import Layout from '../../../components/layout'

import ImagePicker from 'react-native-image-picker'

class Report extends Component {
    state = {
      photo: null
    }

    handleChoosePhoto = () => {
        const options = {
          quality: 1.0,
          noData: true
        };

        ImagePicker.showImagePicker(options, response => {
          console.log('response', response)
          if(response.uri) {
            this.setState({ photo: response })
          }
        })
    }

    render() {
        const { navigation } = this.props
        const title = navigation.getParam('title', 'Title')
        const { photo } = this.state

        return(
            <Layout>
                <SafeAreaView style={styles.container}>
                  <ScrollView>
                    <View style={styles.container}>
                      <Text style={styles.header}>{title}</Text>
                      <View style={styles.imageContain}>
                          <TouchableOpacity onPress={this.handleChoosePhoto}>
                              {!photo && (
                                <Image
                                  style={{height: 150, width: 150}}
                                  source={require('../../../../assets/add-image.png')}
                                  resizeMode="stretch"
                                />
                              )}
                              {photo && (
                                <Image source={{ uri: photo.uri }} style={styles.imageSelected} resizeMode="stretch" />
                              )}
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
                      <View style={[styles.inputContain, { justifyContent: 'space-evenly' }]}>
                        <Button title="ตกลง" titleStyle={{ color: '#ffffff' }} buttonStyle={{ backgroundColor: 'green' }} containerStyle={styles.bttnStyle} containerStyle={styles.bttnStyle} onPress={() => this.props.navigation.navigate('HomeScreen')}></Button>
                        <Button title="ล้าง" titleStyle={{ color: '#ffffff' }} buttonStyle={{ backgroundColor: 'red' }} containerStyle={styles.bttnStyle} containerStyle={styles.bttnStyle} onPress={() => this.props.navigation.navigate('HomeScreen')}></Button>
                      </View>
                    </View>
                  </ScrollView>
                </SafeAreaView>
            </Layout>
        )
    }
}

export default Report