import React, { Component } from "react";
import { View, Button, Image } from "react-native";
import styles from "./styles";
import Layout from '../../../components/layout'

class Splash extends Component {
  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <Image style={{width: 150, height: 150}} source={require('../../../../assets/positive-vote.png')} resizeMode="stretch" />
          <Button title="Good Person" onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
        </View>
      </Layout>
    );
  }
}

export default Splash;