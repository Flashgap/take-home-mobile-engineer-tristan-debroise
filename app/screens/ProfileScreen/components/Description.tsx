import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { User } from "@models/user";

interface DescriptionProps {
  user: User;
}

export function Description({ user }: DescriptionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
});
