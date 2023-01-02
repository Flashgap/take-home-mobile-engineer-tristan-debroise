import { useRef, useEffect } from "react";
import { Animated, PanResponder, useWindowDimensions } from "react-native";
import clamp from "clamp";

import { useUsers } from "./users";

export function useAnimation() {
  const { width } = useWindowDimensions();
  const SWIPE_THRESHOLD = 0.25 * width;
  const { users: data, likeUser, dislikeUser } = useUsers();
  const animation = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  const transitionNext = (velocity: number) => {
    if (velocity > 0) {
      likeUser();
    } else {
      dislikeUser();
    }
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: false,
      }),
    ]).start(() => {});
  };

  useEffect(() => {
    scale.setValue(0.9);
    animation.setValue({ x: 0, y: 0 });
  }, [data]);

  const _panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        animation.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (_e, { dx, dy, vx, vy }) => {
        let velocity = 0;
        if (vx >= 0) {
          velocity = clamp(vx, 4, 5);
        } else if (vx < 0) {
          velocity = clamp(Math.abs(vx), 4, 5) * -1;
        }
        if (Math.abs(dx) > SWIPE_THRESHOLD) {
          Animated.parallel([
            Animated.decay(animation, {
              velocity: { x: velocity, y: vy },
              deceleration: 0.99,
              useNativeDriver: false,
            }),
            Animated.spring(scale, {
              toValue: 1,
              friction: 4,
              useNativeDriver: false,
            }),
          ]).start(() => transitionNext(velocity));
        } else {
          Animated.spring(animation, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;
  return { data, _panResponder, animation, scale };
}
