import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import styles from "./styles";

export default function AppButton({ text }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
