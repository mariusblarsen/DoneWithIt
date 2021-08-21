import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  card: {
    flex: 0.4,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 20,
    justifyContent: "space-between",
  },
});
