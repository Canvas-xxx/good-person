import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";

class Login extends Component {
    static navigationOptions = {
        header: 'Login Screen'
    };

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>สมัครหรือเข้าใช้</Text>
            <TextInput style={styles.idInput} placeholder="รหัสบัตรประชาชน"></TextInput>
          </View>
        );
    }
}

export default Login;