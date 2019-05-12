import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";
import Layout from '../../../components/layout'

class Login extends Component {
    render() {
        return (
          <Layout>
            <View style={styles.container}>
              <Text style={styles.header}>สมัครหรือเข้าใช้</Text>
              <TextInput style={styles.idInput} placeholder="รหัสบัตรประชาชน"></TextInput>
              <Button title="Submit" onPress={() => this.props.navigation.navigate('App')}></Button>
            </View>
          </Layout>
        );
    }
}

export default Login;