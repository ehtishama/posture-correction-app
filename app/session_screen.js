import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "./styles/colors";
import typography from "./styles/typography";
import ExerciseItem from "./components/exerciseItem";
import Button from "./components/button";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getTrackById } from "./data/tracks";
import { FlatList } from "react-native-gesture-handler";

const SessionScreen = () => {
  const navigation = useNavigation();
  const { trackId } = useLocalSearchParams();

  const track = getTrackById(trackId);
  const exercises = track.exercises;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={typography.titleLarge}>{track.title}</Text>
        <Text style={[typography.bodyMedium, styles.headerBodyText]}>
          Start lighty with these basic exercises and change difficulty as you
          go.
        </Text>
      </View>

      {/* exercises list */}

      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <ExerciseItem key={item.exercise_id} {...item} />
        )}
      />

      <View style={styles.startButton}>
        <Button
          primary
          text="Start"
          onPress={() => navigation.navigate("exercise_screen")}
        />
      </View>
    </View>
  );
};

export default SessionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  startButton: {
    position: "absolute",

    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 16,
  },
});
