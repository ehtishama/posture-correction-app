import { View, Text } from "react-native";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { TrackItem } from "../components/trackItem";
import { ListHeader } from "../components/listHeader";
import { StatusBar } from "expo-status-bar";
import { TrendCard } from "../components/trendCard";

export default function Page() {
  return (
    <View>
      <Header />
      <Hero />
      <TrendCard />
      <ListHeader />
      <TrackItem />
    </View>
  );
}
