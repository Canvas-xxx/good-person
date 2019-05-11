import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";

class Splash extends Component {
  static navigationOptions = {
    header: 'Splash Screen'
  };

  render() {
    return (
      <View style={styles.container}>
      
      </View>
    );
  }
}

export default Splash;