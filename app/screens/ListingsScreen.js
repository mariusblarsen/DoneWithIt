import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale!",
    price: 100,
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: 1000,
  },
  {
    id: 3,
    image: require("../assets/chair.jpg"),
    title: "Chair in superb condition",
    price: 2000,
  },
];

export default function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"$" + item.price}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});
