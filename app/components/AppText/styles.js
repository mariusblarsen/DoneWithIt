import { Platform, StyleSheet } from "react-native";

const platformText = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default StyleSheet.create({
  text: {
    color: "#555",
    ...platformText,
  },
});
