import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { TrackItem } from "./trackItem";
import { tracks } from "../data";

const TracksList = ({ header }) => {
  console.log(tracks);

  return (
    <FlatList
      data={tracks}
      renderItem={(track) => (
        <TrackItem
          key={track.item.id}
          trackId={track.item.id}
          title={track.item.title}
          numExercises={track.item.exercises.length}
          duration={track.item.duration}
          thumbnail={track.item.thumbnail}
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
