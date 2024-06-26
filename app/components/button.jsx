import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import typography from "../styles/typography";
import { colors } from "../styles/colors";
import { TouchableOpacity } from "react-native";

const Button = ({ onPress, primary, text = "", children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, primary && styles.primary]}>
        {text && <Text style={typography.titleMedium}>{text}</Text>}
        {children}
      </View>
    </TouchableOpacity>
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
