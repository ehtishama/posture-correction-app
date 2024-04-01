import { StyleSheet, Text, View } from "react-native";
import ScreenLayout from "../screen_layout";
import WeeklyStreak from "../../components/weeklyStreak";

import { colors } from "../../styles/colors";
import typography from "../../styles/typography";
import WorkoutTimeChart from "../../components/WorkoutTimeChart";
import trackingService from "../../services/tracking";

export default function InsightScreen() {
  // useEffect(() => {
  //   const completedWorkouts = trackingService.getAllCompletedWorkouts();

  //   console.log(completedWorkouts);
  // }, []);

  return (
    <ScreenLayout style={styles.container}>
      <Text style={typography.titleXLarge}>Weekly Insights</Text>
      <WeeklyStreak />
      <WorkoutTimeChart />

      <View>
        <Text style={typography.titleBase}>This week</Text>
        <View style={styles.row}>
          <View style={styles.stat_card}>
            <Text style={[typography.titleLarge, styles.on_primary]}>
              137<Text style={typography.bodyMedium}> </Text>
            </Text>
            <Text style={styles.on_primary}>mins exercised</Text>
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
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "white",
  },
});
