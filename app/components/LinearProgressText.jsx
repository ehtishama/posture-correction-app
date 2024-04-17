import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearProgress } from "@rneui/themed";
import { colors } from "../styles/colors";
import typography from "../styles/typography";

export default function LinearProgressText({ progress, text }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, typography.titleLarge]}>{text}</Text>
      <LinearProgress
        value={progress}
        color={colors.primary_30}
        style={{ height: 56, borderRadius: 4 }}
        animation={{ duration: 500 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },

  text: {
    position: "absolute",
    textAlign: "center",
    top: 12,
    left: 0,
    width: "100%",
    color: colors.primary_70,
    zIndex: 1,
  },
});
