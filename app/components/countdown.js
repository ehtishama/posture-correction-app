import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import typography from "../styles/typography";
import { colors } from "../styles/colors";
import * as Progress from "react-native-progress";
import { Audio } from "expo-av";

const ticSound = require("../../assets/sounds/tic.wav");

const Countdown = ({ duration, onDone, reset, isPlaying = true }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  async function playTicSound() {
    const { sound } = await Audio.Sound.createAsync(ticSound);
    await sound.playAsync();
  }

  // reset timer
  useEffect(() => {
    setTimeElapsed(0);
  }, [reset, setTimeElapsed]);

  useEffect(() => {
    if (timeElapsed >= duration) return;

    const intervalId = setInterval(() => {
      if (!isPlaying) {
        clearInterval(intervalId);
        return;
      }

      setTimeElapsed((timeElapsed) => {
        if (timeElapsed + 1 >= duration) {
          clearInterval(intervalId);
          onDone && onDone();
        }
        playTicSound();
        return timeElapsed + 1;
      });
    }, 1000);

    // clean up
    return () => clearInterval(intervalId);
  }, [timeElapsed, setTimeElapsed, duration, onDone, isPlaying]);

  return (
    <View style={styles.container}>
      <Progress.Circle
        progress={1 - timeElapsed / duration}
        color={colors.primary_30}
        borderColor={colors.primary_1}
        size={180}
        borderWidth={8}
        thickness={8}
        showsText
        strokeCap="round"
        formatText={(progress) => duration - timeElapsed}
        textStyle={typography.titleXLarge}
      />
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {},
});
