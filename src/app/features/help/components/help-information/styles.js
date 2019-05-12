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

  contentContainer: {
    paddingVertical: 20,
  },

  contentContain: {
    width: DeviceWidth*.9,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  }
});