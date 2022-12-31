import {
  StyleSheet,
  PanResponderInstance,
  Animated,
  Text,
  Image,
  Platform,
  Pressable,
} from "react-native";
import React from "react";

import { User } from "@models/user";
import { COLORS } from "@styles/colors";
import { useAppNavigation } from "@hooks/useAppNavigation";
import { formatUserName } from "@utils/userDisplay";

interface CardProps {
  user: User;
  _panResponder: PanResponderInstance;
  animation: Animated.ValueXY;
  scale: Animated.Value;
  opacity: Animated.Value;
  index: number;
  itemsLength: number;
}

export function Card({
  user,
  _panResponder,
  animation,
  scale,
  opacity,
  index,
  itemsLength,
}: CardProps) {
  const navigation = useAppNavigation();
  const isLastItem = index === itemsLength - 1;
  const panHandlers = isLastItem ? { ..._panResponder.panHandlers } : {};
  const isSecondToLast = index === itemsLength - 2;
  const rotate = animation.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-30deg", "0deg", "30deg"],
    extrapolate: "clamp",
  });

  const animatedCardStyles = {
    transform: [{ rotate }, ...animation.getTranslateTransform()],
    opacity,
  };

  const cardStyle = isLastItem ? animatedCardStyles : undefined;
  const nextStyle = isSecondToLast
    ? { transform: [{ scale }], borderRadius: 5 }
    : undefined;

  function onCardPress() {
    navigation.navigate("ProfileDetails", { user });
  }

  return (
    <Animated.View
      {...panHandlers}
      style={[styles.container, cardStyle, nextStyle]}
    >
      <Image
        resizeMode="cover"
        source={{ uri: user.pictures[0] }}
        style={styles.image}
      />
      <Pressable style={styles.contentContainer} onPress={onCardPress}>
        <Text style={styles.nameText}>
          {formatUserName(user.name)} • {user.age}
        </Text>
        <Text style={styles.distanceText}>
          À {user.distance} kilomètres {user.id}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "100%",
    backgroundColor: "#f4f4f4",
    position: "absolute",
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
    }),
    borderRadius: 10,
  },
  image: {
    position: "absolute",
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 10,
  },
  nameText: {
    color: COLORS.WHITE,
    fontWeight: "600",
    fontSize: 32,
  },
  distanceText: {
    color: COLORS.WHITE,
    fontWeight: "600",
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-end",
  },
});
