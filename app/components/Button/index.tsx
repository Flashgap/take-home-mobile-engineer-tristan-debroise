import React from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { COLORS } from "@styles/colors";

/**
 * Button used to like or dislike a user profile.
 */
export function SwipeButton(props: {
  /** Kind of the button you want to display */
  type: "like" | "dislike";
  style?: StyleProp<ViewStyle>;
  size?: number;
  onPress: () => void;
}): React.ReactElement {
  const { type, style, onPress } = props;
  const imageStyle = {
    width: props.size || 50,
    height: props.size || 50,
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: type === "like" ? COLORS.GREEN : COLORS.YELLOW },
        style,
      ]}
      onPress={onPress}
    >
      {type === "like" ? (
        <Image style={imageStyle} source={require("./check.png")} />
      ) : (
        <Image style={imageStyle} source={require("./close.png")} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
});
