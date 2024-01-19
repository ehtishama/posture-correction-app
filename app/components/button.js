import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import typography from "../styles/typography";
import { colors } from "../styles/colors";

const Button = ({ onPress, primary, text = "button" }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, primary && styles.primary]}>
        <Text style={typography.titleMedium}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 2,
    alignSelf: "flex-start",
    borderRadius: 12,
    borderBottomWidth: 8,
  },
  text: {},
  primary: {
    backgroundColor: colors.primary_10,
  },
});
