import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import BottomTabItem from "./bottomTabItem";

export default function BottomTab({ state, descriptors, navigation }) {
  return (
    <View style={[{ flexDirection: "row" }, styles.container]}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 4,
    left: 16,
    right: 16,
    borderWidth: 2,
    borderBottomWidth: 8,
    borderRadius: 32,
    backgroundColor: colors.primary_10,
    justifyContent: "space-around",
  },
});
// ...

{
  /* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  {...}
</Tab.Navigator> */
}
