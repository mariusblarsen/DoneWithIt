import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  card: {
    flex: 0.4,
    backgroundColor: "white",
    borderRadius: 30,
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    // flex: 0.8,
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  infoContainer: {
    padding: 15,
    justifyContent: "space-between",
  },
});
