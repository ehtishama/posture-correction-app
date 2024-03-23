import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";
import { datetimeUtils } from "../utils/datetime";
import trackingService from "../services/tracking";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import typography from "../styles/typography";

const weeklyData = datetimeUtils
  .getLast7Days(new Date())
  .map((day) => ({ day, workouts: trackingService.getWorkoutsByDate(day) }));

export default function WeeklyStreak() {
  return (
    <View>
      <View style={styles.weekly_history}>
        <Text style={typography.titleBase}>Streak history</Text>
        <View style={styles.dates_weekly}>
          {weeklyData.map(({ day, workouts }, idx) => (
            <DateItem
              key={idx}
              text={day.getDate()}
              selected={workouts.length > 0}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

function DateItem({ text, selected }) {
  return (
    <View style={styles.date_item_container}>
      <View style={[styles.date_item, selected && styles.selected]}>
        <Text style={[styles.date_text, selected && styles.selected_text]}>
          {text}
        </Text>
      </View>
      {selected && (
        <MaterialCommunityIcons
          name="fire"
          size={24}
          color={colors.primary_70}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  weekly_history: {
    gap: 12,
  },
  dates_weekly: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-around",
  },
  date_item_container: {
    alignItems: "center",
    gap: 2,
  },

  date_item: {
    height: 40,
    width: 40,
    borderColor: colors.primary_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
  },
  date_text: {
    color: colors.primary_30,
    fontWeight: "600",
    fontSize: 18,
  },
  selected: {
    backgroundColor: colors.primary_70,
    borderColor: colors.primary_70,
  },
  selected_text: {
    color: colors.primary_30,
  },
});
