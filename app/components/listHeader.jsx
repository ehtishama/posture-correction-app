import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";

export const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Plans</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    paddingVertical: 8,
    marginTop: 32,
    borderBottomWidth: 2,
  },
  title: {
    fontWeight: "700",

    fontSize: 20,
    textTransform: "uppercase",
  },
});
