import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { TrackItem } from "./trackItem";
import { ListHeader } from "./listHeader";

const TracksList = ({ header }) => {
  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={(item) => <TrackItem key={item} />}
      ListHeaderComponent={header}
    />
  );
};

export default TracksList;

const styles = StyleSheet.create({});
