import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Countdown from "./countdown";
import Button from "./button";
import typography from "../styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import * as Speech from "expo-speech";
import { getExerciseById } from "../data/utils";
import ExerciseItem from "./exerciseItem";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import values from "../values";

const TakeRestModal = ({
  onRestComplete,
  isSilent,
  nextExerciseId,
  restDuration = 30,
}) => {
  const [countdownRunning, setCountdownRunning] = useState(false);

  const exercise = getExerciseById(nextExerciseId);

  //
  useEffect(() => {
    if (isSilent) {
      Speech.stop();
      setCountdownRunning(true);
    } else {
      Speech.speak(`Take rest for ${restDuration} second.`, {
        onDone: () => setCountdownRunning(true),
      });
    }

    return Speech.stop;
  }, []);

  // effect that runs after X seconds
  useEffect(() => {
    if (!nextExerciseId) return;

    const timeout = setTimeout(() => {
      Speech.speak(`Your next exercise is ${exercise.title}.`);
    }, 10 * 1000);

    return () => {
      clearTimeout(timeout);
      Speech.stop();
    };
  }, []);

  return (
    <Modal visible={true} onRequestClose={onRestComplete}>
      <TouchableOpacity onPress={onRestComplete} style={styles.closeButton}>
        <MaterialCommunityIcons
          name="close"
          size={28}
          style={styles.closeButtonIcon}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={typography.titleLarge}>Take Rest</Text>
          <Text style={[typography.bodyBase, { textAlign: "center" }]}>
            Well Done! now take some well deserved rest. The next exercise will
            start shortly after.
          </Text>
        </View>
        <Countdown
          duration={restDuration}
          onCompleted={onRestComplete}
          running={countdownRunning}
        />

        <Button onPress={onRestComplete} text="Skip Rest" />
      </View>

      <View style={styles.footer}>
        <Text style={[typography.titleBase, styles.badge]}>Next Exercise</Text>
        <ExerciseItem exercise_id={nextExerciseId} />
      </View>

      {/* <AdMobBanner /> */}
      <BannerAd
        unitId={values.admob.banner}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        onAdFailedToLoad={(error) => console.error(error)}
      />
    </Modal>
  );
};

export default TakeRestModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    gap: 32,
  },
  content: {
    gap: 8,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 24,
    right: 24,
    zIndex: 1,
    padding: 8,
    backgroundColor: colors.primary_1,
  },
  closeButtonIcon: {
    // backgroundColor: colors.primary_1,
    color: colors.primary_50,
  },
  footer: {
    position: "relative",
    padding: 16,
  },
  badge: {
    backgroundColor: colors.primary_10,
    borderRadius: 999,
    color: colors.primary_70,
    width: 100,
    textAlign: "center",
    fontSize: 12,
    position: "absolute",
    //top: 40,
    right: 16,
    bottom: 20,
    zIndex: 1,
  },
});
