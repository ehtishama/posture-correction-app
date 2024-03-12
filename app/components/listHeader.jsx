import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 2,
    borderColor: "black",
    marginVertical: 16,
    backgroundColor: "white"
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
});
