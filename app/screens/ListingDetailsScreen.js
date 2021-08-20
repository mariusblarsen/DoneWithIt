import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.listingInfo}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.subTitle}>$100</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={require("../assets/mosh.jpg")}
        />
        <View style={styles.textInfo}>
          <Text style={styles.profileName}>Mosh Hamedani</Text>
          <Text style={styles.listings}>5 listings</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "40%",
  },
  listingInfo: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 16,
    paddingTop: 5,
  },
  textInfo: {
    padding: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "400",
  },
  profileInfo: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
  },
  listings: {
    color: "gray",
    fontSize: 16,
    paddingTop: 5,
  },
});
