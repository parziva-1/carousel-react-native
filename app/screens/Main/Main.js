import React from "react";
import { SafeAreaView } from "react-native";
import Styles from "./Main.style";
import Carousel from "../../components/Carousel/Carousel";
function Main(props) {
  return (
    <SafeAreaView style={Styles.Main}>
      <Carousel />
    </SafeAreaView>
  );
}

export default Main;
