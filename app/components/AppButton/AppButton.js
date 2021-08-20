import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import styles from "./styles";

export default function AppButton({ text, onPress, color = colors.primary }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
