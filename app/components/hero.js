import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Hero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good Morning!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
    marginVertical: 8,
  },
});
