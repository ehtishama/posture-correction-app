import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";
import { datetimeUtils } from "../utils/datetime";
import trackingService from "../services/tracking";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import typography from "../styles/typography";

import { format } from "date-fns";

const weeklyData = datetimeUtils
  .getLast7Days(new Date())
  .map((day) => ({ day, workouts: trackingService.getWorkoutsByDate(day) }));

export default function WeeklyStreak() {
  return (
    <View>
      <View style={styles.weekly_history}>
        <Text style={typography.titleBase}>Daily Tracker</Text>
        <View style={styles.dates_weekly}>
          {weeklyData.map(({ day, workouts }, idx) => (
            <DateItem key={idx} date={day} selected={workouts.length > 0} />
          ))}
        </View>
      </View>
    </View>
  );
}

function DateItem({ date, selected }) {
  return (
    <View style={styles.date_item_container}>
      {selected ? (
        <MaterialCommunityIcons
          name="check-circle"
          size={16}
          color={colors.primary_70}
        />
      ) : (
        <MaterialCommunityIcons
          name="check-circle-outline"
          size={16}
          color={"#e0e0e0"}
        />
      )}
      <View style={[styles.date_item, selected && styles.selected]}>
        <Text style={[styles.date_text, selected && styles.selected_text]}>
          {date.getDate()}
        </Text>
        <Text
          style={[
            styles.date_text,
            selected && styles.selected_text,
            { fontSize: 12 },
          ]}
        >
          {format(date, "eee").substring(0, 2)}
        </Text>
      </View>
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
    height: 44,
    width: 44,
    borderColor: colors.primary_30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
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
