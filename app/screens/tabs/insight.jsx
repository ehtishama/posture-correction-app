import { useEffect } from "react";
import { StyleSheet } from "react-native";
import trackingService from "../../services/tracking";
import ScreenLayout from "../screen_layout";
import WeeklyStreak from "../../components/weeklyStreak";

export default function InsightScreen() {
  // useEffect(() => {
  //   const completedWorkouts = trackingService.getAllCompletedWorkouts();

  //   console.log(completedWorkouts);
  // }, []);

  return (
    <ScreenLayout style={styles.container}>
      <WeeklyStreak />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
