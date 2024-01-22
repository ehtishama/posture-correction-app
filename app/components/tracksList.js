import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { TrackItem } from "./trackItem";

const TracksList = ({ header }) => {
  const tracks = [
    {
      id: 1,
      title: "Basic",
      numExercises: 12,
      duration: 60 * 12,
    },
    {
      id: 2,
      title: "Intermediate",
      numExercises: 16,
      duration: 60 * 16,
    },
    {
      id: 3,
      title: "Advance",
      numExercises: 12,
      duration: 60 * 20,
    },
  ];

  return (
    <FlatList
      data={tracks}
      renderItem={(track) => (
        <TrackItem
          item={track.item}
          key={track.item.id}
          title={track.item.title}
          numExercises={track.item.numExercises}
          duration={track.item.duration}
        />
      )}
      ListHeaderComponent={header}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
    />
  );
};

export default TracksList;

const styles = StyleSheet.create({});
