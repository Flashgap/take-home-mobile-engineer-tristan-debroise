import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

import { COLORS } from "@styles/colors";
import { useUsers } from "@hooks/users";

export function Header() {
  const { loadingUsers } = useUsers();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SWIPER</Text>
      {loadingUsers && (
        <ActivityIndicator
          size="small"
          color={COLORS.PINK}
          style={styles.indicator}
        />
      )}
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
  indicator: {
    position: "absolute",
    right: 20,
    top: 0,
    bottom: 0,
  },
});
