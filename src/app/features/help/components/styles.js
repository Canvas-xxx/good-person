import { StyleSheet, Dimensions } from "react-native";

const DeviceWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40
  },
  header: {
    fontSize: 30,
    color: 'white'
  },
  gridView: {
    flexDirection: 'row',
    marginTop: 60
  },
  gridBox: {
    width: DeviceWidth*0.4,
    height: DeviceWidth*0.4,
    marginBottom: 3,
    marginLeft: 3,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContain: {
    width: DeviceWidth*0.3,
    height: DeviceWidth*0.3,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4
  },
  imgStyle: {
    width: DeviceWidth*0.2,
    height: DeviceWidth*0.2
  },
  loadingContain: {
    width: DeviceWidth*0.2,
    height: DeviceWidth*0.2,
    backgroundColor: 'white'
  }
});