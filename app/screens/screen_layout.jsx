import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";

export default function ScreenLayout({
  children,
  style,
  title,
  scrollview = false,
  back = false,
}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {back && <BackButton title={title} />}
      {scrollview ? (
        <ScrollView style={[_styles.container, style]}>{children}</ScrollView>
      ) : (
        <View style={[_styles.container, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
