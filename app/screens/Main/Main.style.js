import { StyleSheet } from "react-native";
import { Platform, StatusBar } from "react-native";
const Styles = StyleSheet.create({
  Main: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Styles;
