import { View, StyleSheet } from "react-native";
import React from "react";

import { User } from "@models/user";
import { useAppRoute } from "@hooks/useAppNavigation";
import { COLORS } from "@styles/colors";

import { BackButton } from "./components/BackButton";
import { Slider } from "./components/Slider";
import { Infos } from "./components/Infos";
import { Divider } from "./components/Divider";
import { Description } from "./components/Description";

export interface ProfileScreenProps {
  user: User;
}

export function ProfileScreen() {
  const {
    params: { user },
  } = useAppRoute<"ProfileDetails">();

  return (
    <View style={styles.container}>
      <BackButton />
      <Slider images={user.pictures} />
      <Infos user={user} />
      <Divider />
      <Description user={user} />
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
