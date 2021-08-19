import React from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";

export default function RegisterButton({ text }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
