import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";

class Home extends Component {
    static navigationOptions = {
        header: 'Home Screen'
    };

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.gridView}>
                <View>
                    <View style={styles.gridBox}>
                        <Button title="ทำความดี"></Button>
                    </View>
                    <View style={styles.gridBox}>
                        <Button title="แจ้งเหตุ"></Button>
                    </View>
                </View>

                <View>
                    <View style={styles.gridBox}>
                        <Button title="ร้องเรียน"></Button>
                    </View>
                    <View style={styles.gridBox}>
                        <Button title="แผนที่"></Button>
                    </View>
                </View>
            </View>

            <View>
                <Button title="แจ้งข่าวสาร"></Button>
                <Button title="ช่วยเหลือ"></Button>
            </View>
          </View>
        );
    }
}

export default Home;