import { StyleSheet, Text, View } from "react-native";
import ScreenLayout from "../screen_layout";
import WeeklyStreak from "../../components/weeklyStreak";
import { CartesianChart, Bar } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import { colors } from "../../styles/colors";
import SpaceGrotesk from "../../../assets/fonts/SpaceGrotesk_700Bold.ttf";
import typography from "../../styles/typography";

const _data = [
  { day: "Sunday", workout_time: 60 },
  { day: "Monday", workout_time: 10 },
  { day: "Tuesday", workout_time: 0 },
  { day: "Wednesday", workout_time: 30 },
  { day: "Thursday", workout_time: 90 },
  { day: "Friday", workout_time: 50 },
];

export default function InsightScreen() {
  const font = useFont(SpaceGrotesk, 12);
  // useEffect(() => {
  //   const completedWorkouts = trackingService.getAllCompletedWorkouts();

  //   console.log(completedWorkouts);
  // }, []);

  return (
    <ScreenLayout style={styles.container}>
      <Text style={typography.titleXLarge}>Your weekly report</Text>
      <WeeklyStreak />

      <View style={{ height: 300, marginVertical: 16 }}>
        <CartesianChart
          domainPadding={{
            left: 48,
            right: 48,
          }}
          data={_data}
          xKey="day"
          yKeys={["workout_time"]}
          axisOptions={{
            font,
            formatXLabel: (val) => val.substring(0, 3),
            formatYLabel: (val) =>
              val > 60 ? `${Math.floor(val / 60)}h${val % 60}m` : `${val}m`,
            axisSide: { x: "bottom", y: "right" },
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

      <View style={styles.row}>
        <View style={styles.stat_card}>
          <Text style={[typography.titleLarge, styles.on_primary]}>
            137<Text style={typography.bodyMedium}> </Text>
          </Text>
          <Text style={styles.on_primary}>mins exercised</Text>
        </View>

        <View style={styles.stat_card}>
          <Text style={[typography.titleLarge, styles.on_primary]}>
            9<Text style={typography.bodyMedium}> </Text>
          </Text>
          <Text style={styles.on_primary}>workouts completed</Text>
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
