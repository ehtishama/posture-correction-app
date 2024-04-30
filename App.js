import "react-native-gesture-handler";
import RootNavigation from "./app/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import notifee, { EventType } from "@notifee/react-native";
import { useEffect, useState } from "react";

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
        <RootNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
