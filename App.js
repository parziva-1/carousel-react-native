import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Main from "./app/screens/Main/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
