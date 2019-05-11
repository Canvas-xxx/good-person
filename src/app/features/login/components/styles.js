import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  header: {
    color: 'white',
    fontSize: 30
  },

  idInput: {
    width: 300,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: .5
  },

  loader: {
    height: 40,
    width: 40
  }
});