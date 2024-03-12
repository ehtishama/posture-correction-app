import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import typography from "../styles/typography";
import { colors } from "../styles/colors";

export const TrendCard = () => {
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
      <Text style={typography.titleMedium}>great job</Text>
      <Text style={typography.bodyBase}>
        last week was your best week, you can do it again.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: colors.primary_1,
    borderRadius: 8,
    elevation: 2,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
