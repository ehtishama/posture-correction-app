import { View, Text, StyleSheet, FlatList } from "react-native";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { TrendCard } from "../../components/trendCard";
import { ListHeader } from "../../components/listHeader";
import { StatusBar } from "expo-status-bar";
import ScreenLayout from "../screen_layout";
import { tracks } from "../../data";
import { TrackItem } from "../../components/trackItem";
import { getTrackDuration } from "../../data/utils";
import { LinearProgress } from "@rneui/themed";

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Header />

        {/* tracks list */}
        <FlatList
          data={tracks}
          keyExtractor={(track) => track.id}
          renderItem={({ item }) => (
            <TrackItem
              trackId={item.id}
              title={item.title}
              numExercises={item.exercises.length}
              duration={getTrackDuration(item.id)}
              thumbnail={item.thumbnail}
            />
          )}
          ListHeaderComponent={
            <>
              <Hero />
              <TrendCard />
              <ListHeader />
            </>
          }
          contentContainerStyle={{
            paddingBottom: 80,
          }}
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
