import { View } from "react-native";
import React from "react";

export default function Spacer({ space = 16, horizontal = false }) {
  const style = {};

  if (horizontal) style.width = space;
  else style.height = space;

  return <View style={style} />;
}
