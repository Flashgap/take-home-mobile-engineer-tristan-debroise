import { View, StyleSheet } from "react-native";
import React from "react";

import { User } from "@models/user";
import { useAppRoute } from "@hooks/useAppNavigation";

export interface ProfileScreenProps {
  user: User;
}

export function ProfileScreen() {
  const { params } = useAppRoute<"ProfileDetails">();
  console.log(params.user);
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {},
});
