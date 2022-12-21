import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useUsers } from "@hooks/users";

export function HomeScreen() {
  const { users } = useUsers();
  console.log(">>", users.length);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
