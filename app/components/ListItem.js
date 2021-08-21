import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText";

export default function ListItem({
  image,
  title,
  subTitle,
  style,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={[styles.container, style]}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  subTitle: {
    color: colors.mediumGray,
    fontSize: 16,
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
