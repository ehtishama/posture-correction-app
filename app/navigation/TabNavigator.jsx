import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BottomTab from "../components/bottomTab";
import HomeScreen from "../screens/tabs/home";
import InsightScreen from "../screens/tabs/insight";
import SettingScreen from "../screens/tabs/setting";

const tabs = [
  {
    name: "Home",
    icon: (props) => <MaterialCommunityIcons name="home-outline" {...props} />,
    component: HomeScreen,
  },
  {
    name: "Insights",
    icon: (props) => (
      <MaterialCommunityIcons name="chart-bell-curve" {...props} />
    ),
    component: InsightScreen,
  },
  {
    name: "Settings",
    icon: (props) => <MaterialCommunityIcons name="cog-outline" {...props} />,
    component: SettingScreen,
  },
];

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTab {...props} />}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      {tabs.map((tab, idx) => (
        <Tab.Screen
          key={idx}
          component={tab.component}
          name={tab.name}
          options={{
            tabBarIcon: tab.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
