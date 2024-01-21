import { Tabs } from "expo-router";
import BottomTab from "../components/bottomTab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          position: "absolute",
          bottom: 12,
          left: 16,
          right: 16,
          borderRadius: 40,
          height: 70,
          backgroundColor: colors.primary_20,
          elevation: 0,
          borderWidth: 2,
          borderBottomWidth: 8,
        },
        tabBarShowLabel: false,
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
    </Tabs>
  );
}
