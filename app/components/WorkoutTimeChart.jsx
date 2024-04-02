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

const _data = [
  { day: "Sunday", workout_time: 60 },
  { day: "Monday", workout_time: 10 },
  { day: "Tuesday", workout_time: 0 },
  { day: "Wednesday", workout_time: 30 },
  { day: "Thursday", workout_time: 90 },
  { day: "Friday", workout_time: 50 },
];

const data = datetimeUtils.getLast7Days().map((x) => ({
  day: format(x, "eee"),
  workout_time: trackingService
    .getWorkoutsByDate(x)
    .reduce(
      (acc, curr) => acc + Math.ceil(getTrackDuration(curr.track) / 60),
      0
    ),
}));

export default function WorkoutTimeChart() {
  const font = useFont(SpaceGrotesk, 12);

  return (
    <View>
      <Text style={typography.titleBase}>Time spent</Text>
      <View style={{ height: 300, marginVertical: 16 }}>
        <CartesianChart
          domainPadding={{
            left: 48,
            right: 48,
          }}
          data={data}
          xKey="day"
          yKeys={["workout_time"]}
          axisOptions={{
            font,
            formatXLabel: (val) => val.substring(0, 3),
            formatYLabel: (val) =>
              val > 60 ? `${Math.floor(val / 60)}h${val % 60}m` : `${val}m`,
            axisSide: { x: "bottom", y: "right" },
            tickCount: 7,
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
    </View>
  );
}

const styles = StyleSheet.create({});
