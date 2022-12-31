import React from "react";
import { useWindowDimensions } from "react-native";
// @ts-expect-error
import { SliderBox } from "react-native-image-slider-box";

interface SliderProps {
  images: string[];
}

export function Slider({ images = [] }: SliderProps) {
  const { width } = useWindowDimensions();
  return <SliderBox sliderBoxHeight={width} images={images} />;
}
