import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import typography from "../styles/typography";
import Button from "../components/button";
import { colors } from "../styles/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import trackingService from "../services/tracking";

const SessionCompleteScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const trackId = params?.trackId;

  useEffect(() => {
    if (trackId) {
      console.log(`Track ${trackId} completed. Recording progress.`);
      const workout = {
        id: Date.now(),
        track: trackId,
        createdAt: Date.now(),
      };
      trackingService.addCompletedWorkout(workout);
    }
  }, []);

  /**
   * logic for knowing what session/workout has got completed
   */

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={typography.titleLarge}>Congratulations !</Text>

        <Text style={typography.bodyBase}>
          You've completed the session for today. Come back later for another
          quick session.
        </Text>
        <Button text="OK" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

export default SessionCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_10,
    padding: 16,
    justifyContent: "center",
  },
  content: {
    gap: 24,
    alignItems: "center",
  },
});
