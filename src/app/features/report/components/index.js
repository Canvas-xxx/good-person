import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
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
                </SafeAreaView>
            </Layout>
        )
    }
}

export default Report