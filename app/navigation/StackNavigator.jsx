import { createStackNavigator } from "@react-navigation/stack";
// import ExerciseScreen from "../screens/exercise_screen";
import SessionScreen from "../screens/session_screen";
import SessionCompleteScreen from "../screens/session_complete_screen";
import TabNavigator from "./TabNavigator";
import ExerciseScreen from "../screens/exercise_screen";

const Stack = createStackNavigator();

export const STACK_ROUTES = {
  TAB_NAVIGATOR: "TabNavigator",
  EXERCISE_SCREEN: "ExerciseScreen",
  SESSION_SCREEN: "SessionScreen",
  SESSION_COMPLETE_SCREEN: "SessionCompleteScreen",
};

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={STACK_ROUTES.TAB_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={STACK_ROUTES.EXERCISE_SCREEN}
        component={ExerciseScreen}
      />
      <Stack.Screen
        name={STACK_ROUTES.SESSION_SCREEN}
        component={SessionScreen}
      />
      <Stack.Screen
        name={STACK_ROUTES.SESSION_COMPLETE_SCREEN}
        component={SessionCompleteScreen}
      />
    </Stack.Navigator>
  );
}