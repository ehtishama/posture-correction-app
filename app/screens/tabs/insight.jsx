import { ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenLayout from "../screen_layout";
import WeeklyStreak from "../../components/weeklyStreak";

import { colors } from "../../styles/colors";
import typography from "../../styles/typography";
import WorkoutTimeChart from "../../components/WorkoutTimeChart";
import trackingService from "../../services/tracking";

export default function InsightScreen() {
  const timeExercised = trackingService.totalTimeExercisedLastWeek();

  return (
    <ScreenLayout
      style={styles.container}
      title={"Weekly Insights"}
      back
      scrollview
    >
      <WeeklyStreak />
      <WorkoutTimeChart />
      <WorkoutTimeChart />

      <View style={{ gap: 8 }}>
        <Text style={typography.titleBase}>This week</Text>
        <View style={styles.row}>
          <View style={styles.stat_card}>
            <Text style={[typography.titleLarge, styles.on_primary]}>
              {timeExercised > 60
                ? Math.ceil(timeExercised / 60)
                : timeExercised}
              <Text style={typography.bodyMedium}></Text>
            </Text>
            <Text style={styles.on_primary}>
              {timeExercised > 60 ? "mins" : "seconds"} exercised
            </Text>
          </View>

          <View style={styles.stat_card}>
            <Text style={[typography.titleLarge, styles.on_primary]}>
              {trackingService.totalWorkoutsCompletedLastWeek()}
              <Text style={typography.bodyMedium}> </Text>
            </Text>
            <Text style={styles.on_primary}>workouts completed</Text>
          </View>
        </View>
      </View>
      {/* <View style={{ height: 120 }} /> */}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    gap: 16,
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  stat_card: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: colors.primary_70,
    flex: 1,
  },
  on_primary: {
    color: colors.primary_30,
  },
});
