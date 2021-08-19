import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "90%",
    margin: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});
