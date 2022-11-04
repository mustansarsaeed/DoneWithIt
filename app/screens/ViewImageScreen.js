import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  View,
  Image,
} from "react-native";
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.closeButton} />
        <View style={styles.deleteButton} />
        <ImageBackground
          resizeMode="contain"
          style={styles.image}
          source={require("../../app/assets/chair.jpg")}
        ></ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
  container: {
    backgroundColor: "black",
  },
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
