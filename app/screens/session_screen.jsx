import { StyleSheet, Text, View } from "react-native";
import React from "react";
import typography from "../styles/typography";
import ExerciseItem from "../components/exerciseItem";
import Button from "../components/button";
import Animated from "react-native-reanimated";
import { FlatList } from "react-native";
import { getTrackById } from "../data/utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import { STACK_ROUTES } from "../navigation/Routes";
import ScreenLayout from "./screen_layout";
import BackButton from "../components/BackButton";

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
        <Animated.Image
          source={track.thumbnail}
          style={{ height: 250, objectFit: "cover", width: "100%" }}
        />

        <BackButton
          containerStyles={{ position: "absolute", top: 0, left: 0 }}
        />

        <View style={styles.headerTextContainer}>
          <Text style={[typography.titleLarge, { color: "white" }]}>
            {track.title}
          </Text>
          <Text style={[typography.bodyBase, styles.headerBodyText]}>
            Start lighty with these basic exercises and then change the
            difficulty as you go.
          </Text>
        </View>
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
              trackId,
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
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    position: "relative",
  },
  headerTextContainer: {
    padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  headerBodyText: {
    color: "white",
  },
  startButton: {
    position: "absolute",

    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 16,
  },
});
