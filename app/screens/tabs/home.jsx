import { View, Text, StyleSheet, FlatList } from "react-native";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { TrendCard } from "../../components/trendCard";
import { ListHeader } from "../../components/listHeader";
import { StatusBar } from "expo-status-bar";
import ScreenLayout from "../screen_layout";
import { tracks } from "../../data";
import { TrackItem } from "../../components/trackItem";
import { getTrackDuration } from "../../data/utils";
import { Button, LinearProgress } from "@rneui/themed";
import notifee from "@notifee/react-native";

async function onDisplayNotification() {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default Channel",
  });

  // Display a notification
  await notifee.displayNotification({
    title: "Notification Title",
    body: "Main body content of the notification",
    android: {
      channelId,
      // smallIcon: "name-of-a-small-icon", // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: "default",
      },
    },
  });
}

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <StatusBar style="dark" translucent={false} />
      <View style={styles.container}>
        <Button onPress={() => onDisplayNotification()}>
          Display Notification
        </Button>

        <Header />

        {/* tracks list */}
        <FlatList
          data={tracks}
          keyExtractor={(track) => track.id}
          renderItem={({ item }) => (
            <TrackItem
              trackId={item.id}
              title={item.title}
              numExercises={item.exercises.length}
              duration={getTrackDuration(item.id)}
              thumbnail={item.thumbnail}
            />
          )}
          ListHeaderComponent={
            <>
              <Hero />
              <TrendCard />
              <ListHeader />
            </>
          }
          contentContainerStyle={{
            paddingBottom: 80,
          }}
        />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
