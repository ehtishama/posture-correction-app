import { View, Text, StyleSheet } from "react-native";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

import { TrendCard } from "../components/trendCard";
import TracksList from "../components/tracksList";
import { ListHeader } from "../components/listHeader";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />

      <TracksList
        header={
          <>
            <Hero />
            <TrendCard />
            <ListHeader />
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
