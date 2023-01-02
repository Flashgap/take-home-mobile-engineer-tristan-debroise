import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAnimation } from "@hooks/useAnimation";
import { SwipeButton } from "@components/Button";
import { COLORS } from "@styles/colors";
import { useUsers } from "@hooks/users";

import { Card } from "./components/Card";
import { Header } from "./components/Header";

export function HomeScreen() {
  const { likeUser, dislikeUser } = useUsers();
  const { data, ...animation } = useAnimation();

  function onPressDislike() {
    dislikeUser();
  }

  function onPressLike() {
    likeUser();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.cardContainer}>
        {data
          .slice(0, 2)
          .reverse()
          .map((user, index, array) => (
            <Card
              key={user.id}
              user={user}
              index={index}
              itemsLength={array.length}
              {...animation}
            />
          ))}
      </View>
      <View style={styles.buttonsContainer}>
        <SwipeButton size={76} type="dislike" onPress={onPressDislike} />
        <SwipeButton
          size={76}
          style={styles.buttonMargin}
          type="like"
          onPress={onPressLike}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 29,
    paddingBottom: 20,
  },
  buttonMargin: {
    marginLeft: 24,
  },
});
