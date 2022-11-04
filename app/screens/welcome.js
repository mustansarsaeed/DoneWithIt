import React from "react";
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

import Expo from "expo";
import registerRootComponent from "expo/build/launch/registerRootComponent";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        blurRadius={7}
        source={require("../../app/assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../app/assets/logo_red.png")}
          />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress={() => console.log()} />

          <AppButton
            title="Register"
            onPress={() => console.log()}
            color="secondary"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 10,
  },
  logo: { width: 100, height: 100 },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
});
registerRootComponent(WelcomeScreen);
