import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
