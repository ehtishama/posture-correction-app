import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import trackingService from "../../services/tracking";
import { colors } from "../../styles/colors";
import ScreenLayout from "../screen_layout";

export default function InsightScreen() {
  useEffect(() => {
    const completedWorkouts = trackingService.getAllCompletedWorkouts();

    console.log(completedWorkouts);
  }, []);

  return (
    <ScreenLayout style={styles.container}>
      <View style={styles.dates_weekly}>
        {[...Array(7)].map((_, idx) => (
          <View style={styles.date_item} key={idx}>
            <Text style={styles.date_text}>20</Text>
          </View>
        ))}
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  dates_weekly: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
  date_item: {
    height: 40,
    width: 40,
    // backgroundColor: colors.primary_30,
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
});
