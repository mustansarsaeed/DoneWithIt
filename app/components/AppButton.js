import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

export default function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
  },
});
