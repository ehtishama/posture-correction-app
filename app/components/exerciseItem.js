import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import typography from "../styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getExerciseById } from "../data/exercises";

const ExerciseItem = ({ exercise_id, duration, repetitions }) => {
  const exercise = getExerciseById(exercise_id);

  const Pose = exercise.demo_poses[0].default;

  return (
    <View style={styles.container}>
      <Pose style={styles.image} height={70} width={70} />

      <View style={styles.content}>
        <Text style={typography.titleMedium}>{exercise.title}</Text>
        <View style={styles.desc}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={20}
            color="black"
          />
          <Text>{duration}s</Text>
        </View>
      </View>
    </View>
  );
};

export default ExerciseItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    // borderTopWidth: 2,
    backgroundColor: "white",
  },
  image: {
    height: 60,
    width: 60,
  },
  content: {},
  desc: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginTop: 4,
  },
});
