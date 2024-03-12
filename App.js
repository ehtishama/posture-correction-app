import "react-native-gesture-handler";
import RootNavigation from "./app/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </>
  );
}
