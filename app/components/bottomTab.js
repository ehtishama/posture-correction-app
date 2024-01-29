import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import BottomTabItem from "./bottomTabItem";
import { LinearGradient } from "expo-linear-gradient";

export default function BottomTab({ state, descriptors, navigation }) {
  return (
    <LinearGradient
      colors={["transparent", "rgba(255, 255, 255, 1)"]}
      locations={[0.1, 0.6]}
      style={styles.fadeWrapper}
    >
      <View style={[styles.container]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const tabBarIcon =
            options.tabBarIcon !== undefined ? options.tabBarIcon : undefined;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <BottomTabItem
              key={route.name}
              {...{ tabBarIcon, isFocused, onPress, onLongPress, options }}
            />
          );
        })}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  fadeWrapper: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: "row",
    position: "relative",
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 2,
    borderBottomWidth: 8,
    borderRadius: 32,
    backgroundColor: colors.primary_20,
    justifyContent: "space-around",
    elevation: 2,
  },
});
