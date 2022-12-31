import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "@styles/colors";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SWIPER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: COLORS.PINK,
    fontWeight: "800",
  },
});
