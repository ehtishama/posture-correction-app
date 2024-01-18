import { Stack } from "expo-router";

export default function Page() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: false,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="session_screen"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
