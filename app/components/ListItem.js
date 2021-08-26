import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import defaultStyles from "../config/styles";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";

export default function ListItem({
  chevronRight,
  image,
  IconComponent,
  title,
  subTitle,
  style,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.lightGray}
        onPress={onPress}
      >
        <View style={[styles.container, style]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {chevronRight && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={defaultStyles.colors.mediumGray}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: defaultStyles.colors.white,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  subTitle: {
    color: defaultStyles.colors.mediumGray,
    fontSize: 16,
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
