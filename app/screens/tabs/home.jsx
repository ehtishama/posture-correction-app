import { View, Text, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";

import { TrendCard } from "../../components/trendCard";
import TracksList from "../../components/tracksList";
import { ListHeader } from "../../components/listHeader";
import { StatusBar } from "expo-status-bar";
import ScreenLayout from "../screen_layout";

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <StatusBar translucent={true} />
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
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
