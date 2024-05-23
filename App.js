import "react-native-gesture-handler";
import RootNavigation from "./app/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import notifee, { EventType } from "@notifee/react-native";
import { useEffect, useState } from "react";
import mobileAds from "react-native-google-mobile-ads";
import { AppContextProvider } from "./app/context/AppContext";
import { storageService } from "./app/services/storage";
import { setDailyNotification } from "./app/utils/notifications";

// Initialize the Google Mobile Ads SDK
mobileAds().initialize();

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification } = detail;

  // Check if the user pressed notification when the app is in background
  if (type === EventType.PRESS) {
    console.log("onBackgroundEvent: Notification Pressed");

    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});

notifee.onForegroundEvent(async ({ type, detail }) => {
  const { notification } = detail;

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.PRESS) {
    console.log("onForegroundEvent: Notification Pressed");

    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});

export default function App() {
  const [loading, setLoading] = useState(true);

  // Check if the app was opened by a notification
  async function bootstrap() {
    const initialNotification = await notifee.getInitialNotification();

    if (initialNotification) {
      console.log(
        "Notification caused application to open",
        initialNotification.notification
      );
      console.log(
        "Press action used to open the app",
        initialNotification.pressAction
      );
    }

    // if the app is launched for the first time
    if (!storageService.exists("alreadyLaunched")) {
      storageService.set("alreadyLaunched", true);

      // set the reminder time to 8:00 AM
      const date = new Date();
      date.setHours(8, 0, 0, 0);

      // save the reminder time to storage
      await setDailyNotification(date);

      storageService.set("dailyReminder", date.toISOString());

      console.log("App Launched for the first time.");
      console.log("Daily Workout Reminder set 8:00 AM everyday.");
    }
  }

  useEffect(() => {
    bootstrap().finally(() => setLoading(false));
  });

  if (loading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppContextProvider>
          <RootNavigation />
        </AppContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
