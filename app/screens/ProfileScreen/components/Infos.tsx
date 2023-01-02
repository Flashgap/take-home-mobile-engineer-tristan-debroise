import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { User } from "@models/user";
import { formatUserName } from "@utils/userDisplay";
import { COLORS } from "@styles/colors";

interface InfosProps {
  user: User;
}

export function Infos({ user }: InfosProps) {
  return (
    <View style={styles.container}>
      <View style={styles.oval} />
      <View style={styles.content}>
        <Text style={styles.name}>
          {formatUserName(user.name)}, {user.age}
        </Text>
        <Text style={styles.distance}>{user.distance} km</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    top: -20,
    bottom: -10,
  },
  oval: {
    width: 150,
    height: 75,
    backgroundColor: COLORS.WHITE,
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
    transform: [{ scaleX: 3 }],
  },
  content: {
    top: -40,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  distance: {
    marginTop: 5,
    fontSize: 16,
    color: COLORS.GREY,
  },
});
