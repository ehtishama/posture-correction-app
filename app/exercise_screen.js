import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ExerciseDemoCard } from "./components/exerciseDemoCard";
import typography from "./styles/typography";
import Button from "./components/button";
import { colors } from "./styles/colors";

const ExerciseScreen = () => {
  return (
    <View style={styles.container}>
      <ExerciseDemoCard />

      <View style={styles.content}>
        <Text style={typography.titleBase}>Standing Side Bends </Text>
        <Text style={typography.titleXLarge}>00:46</Text>
      </View>

      <View style={styles.actions}>
        <Button text="back" />
        <Button text="pause" primary />
        <Button text="next" />
      </View>
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    padding: 16,
    // marginTop: "auto",
  },
  actions: {
    // marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 1,
  },
});
