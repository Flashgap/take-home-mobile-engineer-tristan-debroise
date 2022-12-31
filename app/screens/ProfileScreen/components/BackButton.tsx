import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

import { useAppNavigation } from "@hooks/useAppNavigation";
import { COLORS } from "@styles/colors";

export function BackButton() {
  const navigation = useAppNavigation();

  function onPressBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }
  return (
    <Pressable onPress={onPressBack} style={styles.backIcon}>
      <Text>Back</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    backgroundColor: COLORS.WHITE,
    zIndex: 1, // This will not work for android, we will need to play with elevation instead
    borderRadius: 100,
    padding: 8,
    top: 40,
    left: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
