import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import typography from "../styles/typography";
import { colors } from "../styles/colors";
import trackingService from "../services/tracking";

export const TrendCard = () => {
  const timeExcercised = trackingService.totalTimeExercisedLastWeek();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="emoticon-happy-outline"
          size={24}
          color="black"
        />
        <Pressable>
          <MaterialCommunityIcons name="close" size={24} color="black" />
        </Pressable>
      </View>
      <Text style={typography.titleMedium}>Great Job</Text>
      <Text style={typography.bodyBase}>
        {`You exercised for ${Math.ceil(
          timeExcercised / 60
        )} minutes in the last 7 days.`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 16,
    backgroundColor: colors.primary_1,
    borderRadius: 12,
    elevation: 2,
    gap: 2,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
