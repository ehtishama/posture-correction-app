import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTabItem = ({
  tabBarIcon,
  isFocused,
  options,
  onPress,
  onLongPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {tabBarIcon({ size: 28, focused: isFocused })}
      {isFocused && <View style={styles.activeDot}></View>}
    </TouchableOpacity>
  );
};

export default BottomTabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "black",
  },
});
