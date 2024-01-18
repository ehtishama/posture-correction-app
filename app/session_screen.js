import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "./styles/colors";
import typography from "./styles/typography";
import ExerciseItem from "./components/exerciseItem";

const SessionScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={typography.titleLarge}>Basic</Text>
        <Text style={[typography.bodyMedium, styles.headerBodyText]}>
          Start lighty with these basic exercises and change difficulty as you
          go.
        </Text>
      </View>

      {/* exercises list */}
      <ExerciseItem />
    </View>
  );
};

export default SessionScreen;

const styles = StyleSheet.create({
  header: {
    height: 240,
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.primary_10,
    padding: 16,
  },
  headerBodyText: {
    width: "80%",
  },
});
