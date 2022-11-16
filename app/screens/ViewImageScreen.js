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
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.closeButton}>
          <MaterialCommunityIcons name="close" size={35} color={colors.white} />
        </View>
        <View style={styles.deleteButton}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color={colors.white}
          />
        </View>
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
    position: "absolute",
    top: 20,
    left: 20,
  },
  deleteButton: {
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
