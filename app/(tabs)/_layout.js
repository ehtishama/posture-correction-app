import { Tabs } from "expo-router";
import BottomTab from "../components/bottomTab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTab {...props} />}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="home-outline" {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="chart-bell-curve" {...props} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="cog-outline" {...props} />
          ),
        }}
      />
    </Tabs>
  );
}
