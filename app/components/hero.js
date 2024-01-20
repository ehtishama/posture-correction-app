import { StyleSheet, Text, View } from "react-native";
import React from "react";
import typography from "../styles/typography";

export const Hero = () => {
  return (
    <View style={styles.container}>
      <Text style={typography.titleXLarge}>Good Morning!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    // backgroundColor: "red",
    marginVertical: 12,
  },
});
