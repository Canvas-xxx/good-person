import React, { Component } from "react";
import { View, Image } from "react-native";
import { Button } from 'react-native-elements'
import styles from "./styles";
import Layout from '../../../components/layout'

class Splash extends Component {
  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <Image style={{width: 150, height: 150}} source={require('../../../../assets/positive-vote.png')} resizeMode="stretch" />
          <Button title="Good Person" titleStyle={{ color: '#ffffff' }} type="clear" onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
        </View>
      </Layout>
    );
  }
}

export default Splash;