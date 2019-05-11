import { StyleSheet, Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  
  gridView: {
    flexDirection: 'row'
  },

  gridBox: {
    width: DeviceWidth*0.4,
    height: DeviceWidth*0.4,
    backgroundColor: 'white',
    marginBottom: 3,
    marginLeft: 3,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});