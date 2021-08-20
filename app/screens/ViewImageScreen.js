import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 40,
  },
  container: {
    backgroundColor: colors.black,
    justifyContent: "center",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 40,
  },
  image: {
    flex: 0.8,
    width: "100%",
    height: "100%",
  },
});
