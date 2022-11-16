import React from "react";

import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDelete(props) {
  return (
    <View style={styles.container}>
      {/* <MaterialCommunityIcons name="trash-can" /> */}
    </View>
  );
}

export default ListItemDelete;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});
