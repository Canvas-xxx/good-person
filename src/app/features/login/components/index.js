import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from 'react-native-elements'
import styles from "./styles";
import Layout from '../../../components/layout'

class Login extends Component {
    render() {
        return (
          <Layout>
            <View style={styles.container}>
              <Text style={styles.header}>สมัครหรือเข้าใช้</Text>
              <TextInput style={styles.idInput} placeholder="รหัสบัตรประชาชน"></TextInput>
              <Button title="ตกลง" type="clear" titleStyle={{ color: '#ffffff' }} onPress={() => this.props.navigation.navigate('App')}></Button>
            </View>
          </Layout>
        );
    }
}

export default Login;