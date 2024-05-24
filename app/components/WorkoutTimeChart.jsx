import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CartesianChart, Bar } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import SpaceGrotesk from "../../assets/fonts/SpaceGrotesk_700Bold.ttf";
import typography from "../styles/typography";
import { colors } from "../styles/colors";
import { datetimeUtils } from "../utils/datetime";
import { format } from "date-fns";
import trackingService from "../services/tracking";
import { getTrackDuration } from "../data/utils";
import { useAppContext } from "../context/AppContext";

const _data = [
  { day: "Sunday", workout_time: 60 },
  { day: "Monday", workout_time: 60 },
  { day: "Tuesday", workout_time: 60 },
  { day: "Wednesday", workout_time: 60 },
  { day: "Thursday", workout_time: 60 },
  { day: "Friday", workout_time: 60 },
];

const totalTimeSpent = trackingService.totalTimeExercisedLastWeek();

export default function WorkoutTimeChart() {
  const {
    appContext: { activity },
  } = useAppContext();

  const data = datetimeUtils.getLast7Days().map((x) => ({
    day: format(x, "eee"),
    workout_time: trackingService
      .getWorkoutsByDate(activity.completedWorkouts, x)
      .reduce(
        (acc, curr) => acc + Math.ceil(getTrackDuration(curr.track) / 60),
        0
      ),
  }));

  const font = useFont(SpaceGrotesk, 12);

  return (
    <View style={{ gap: 8 }}>
      <Text style={typography.titleBase}>Time spent</Text>
      {totalTimeSpent > 0 ? (
        <View style={{ height: 240, marginVertical: 16 }}>
          <CartesianChart
            padding={{ right: 16 }}
            domainPadding={{
              left: 48,
              right: 48,
            }}
            data={data}
            xKey="day"
            yKeys={["workout_time"]}
            axisOptions={{
              font,
              formatYLabel: (val) =>
                val > 60 ? `${Math.floor(val / 60)}h${val % 60}m` : `${val}m`,
              formatXLabel: (val) => val || "",
              axisSide: { x: "bottom", y: "right" },
              tickCount: { x: 6, y: 7 },
            }}
          >
            {({ points, chartBounds }) => (
              <Bar
                chartBounds={chartBounds} // 👈 chartBounds is needed to know how to draw the bars
                points={points.workout_time} // 👈 points is an object with a property for each yKey
                roundedCorners={{ topLeft: 4, topRight: 4 }}
                color={colors.primary_70}
              />
            )}
          </CartesianChart>
        </View>
      ) : (
        <Text
          style={[typography.bodyMedium, { textAlign: "center", padding: 16 }]}
        >
          You haven't worked out in the last 7 days. Start now! 🏋️‍♂ ️
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
