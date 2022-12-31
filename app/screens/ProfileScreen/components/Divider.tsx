import React from "react";
import { View, StyleSheet } from "react-native";

import { COLORS } from "@styles/colors";

export function Divider() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: COLORS.GREY,
    marginHorizontal: 20,
  },
});
