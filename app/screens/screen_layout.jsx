import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenLayout({ children, style }) {
  return (
    <SafeAreaView style={[_styles.container, style]}>{children}</SafeAreaView>
  );
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
