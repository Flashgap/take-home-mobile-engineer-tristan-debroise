import { View, StyleSheet } from "react-native";

import { User } from "@models/user";

interface CardProps {
  user: User;
}

export function Card({ user }: CardProps) {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});
