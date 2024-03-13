import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";
import typography from "../styles/typography";
import ExerciseItem from "../components/exerciseItem";
import Button from "../components/button";

import { FlatList } from "react-native";
import { getTrackById } from "../data/utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import { STACK_ROUTES } from "../navigation/Routes";
import ScreenLayout from "./screen_layout";

const SessionScreen = () => {
  const navigation = useNavigation();
  const {
    params: { trackId },
  } = useRoute();

  const track = getTrackById(trackId);
  const exercises = track.exercises;

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Text style={typography.titleLarge}>{track.title}</Text>
        <Text style={[typography.bodyMedium, styles.headerBodyText]}>
          Start lighty with these basic exercises and change difficulty as you
          go.
        </Text>
      </View>

      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <ExerciseItem key={item.exercise_id} {...item} />
        )}
        contentContainerStyle={{
          paddingBottom: 96,
        }}
      />

      <View style={styles.startButton}>
        <Button
          primary
          text="Start"
          onPress={() =>
            navigation.navigate(STACK_ROUTES.EXERCISE_SCREEN, {
              exercises,
            })
          }
        />
      </View>
    </ScreenLayout>
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
    elevation: 4,
    borderBottomWidth: 1,
    borderColor: "#ccc",
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
