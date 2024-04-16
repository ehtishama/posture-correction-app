import { StyleSheet, Text, View } from "react-native";
import React from "react";
import typography from "../styles/typography";

export const Hero = () => {
  const hours = new Date().getHours();

  const message = `Good ${
    hours < 12 ? "morning" : hours < 18 ? "afternoon" : "evening"
  }`;

  return (
    <View style={styles.container}>
      <Text style={typography.titleXLarge}>{`${message}!`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
  },
});
