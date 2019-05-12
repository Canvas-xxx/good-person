import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import styles from "./styles";

class Help extends Component {
    static navigationOptions = {
        header: 'Help Screen'
    };

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>ช่วยเหลือ</Text>
            <View style={styles.gridView}>
                <View>
                    <View style={styles.gridBox}>
                        <Button title="ตำรวจ"></Button>
                    </View>
                    <View style={styles.gridBox}>
                        <Button title="โรงพยาบาล"></Button>
                    </View>
                </View>

                <View>
                    <View style={styles.gridBox}>
                        <Button title="กู้ภัย"></Button>
                    </View>
                    <View style={styles.gridBox}>
                        <Button title="ดับเพลง"></Button>
                    </View>
                </View>
            </View>
          </View>
        );
    }
}

export default Help