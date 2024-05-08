import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ExerciseScreen from "../screens/exercise_screen";
import SessionScreen from "../screens/session_screen";
import SessionCompleteScreen from "../screens/session_complete_screen";
import TabNavigator from "./TabNavigator";
import ExerciseScreen from "../screens/exercise_screen";
import { STACK_ROUTES } from "./Routes";
import FeedbackScreen from "../screens/feeback_screen";

const Stack = createNativeStackNavigator();

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
      <Stack.Screen
        name={STACK_ROUTES.FEEDBACK_SCREEN}
        component={FeedbackScreen}
        options={{
          contentStyle: { backgroundColor: "white" },
        }}
      />
    </Stack.Navigator>
  );
}
