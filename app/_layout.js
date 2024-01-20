import { Stack } from "expo-router";

export default function Page() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: false,
        statusBarStyle: "dark",
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="session_screen"
        options={{
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="exercise_screen"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
