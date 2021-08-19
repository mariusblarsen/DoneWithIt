import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import RegisterButton from "../components/RegisterButton";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton text="LOGIN" />
        <RegisterButton text="REGISTER" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
    alignItems: "center",
  },
  tagline: {
    fontSize: 22,
  },
});
