import { View, Text } from "react-native";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

export default function Page() {
  return (
    <View>
      <Header />
      <Hero />
    </View>
  );
}
