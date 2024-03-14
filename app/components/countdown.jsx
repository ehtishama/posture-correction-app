import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import typography from "../styles/typography";
import { colors } from "../styles/colors";
import * as Progress from "react-native-progress";
import { Audio } from "expo-av";

const ticSound = require("../../assets/sounds/tic.wav");
const COUNTDOWN_DELAY = 1000;

async function playTicSound() {
  const { sound } = await Audio.Sound.createAsync(ticSound);
  await sound.playAsync();
}

const Countdown = ({
  duration,
  onCompleted,
  reset,
  running = true,
  sound = false,
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  // reset timer
  useEffect(() => {
    setTimeElapsed(0);
  }, [reset]);

  useEffect(() => {
    if (!running) return;

    if (timeElapsed >= duration) {
      onCompleted && onCompleted();
      return;
    }

    const tick = () => {
      setTimeElapsed((timeElapsed) => timeElapsed + 1);
      if (sound) playTicSound();
    };

    const intervalId = setInterval(tick, COUNTDOWN_DELAY);

    // clean up
    return () => clearInterval(intervalId);
  }, [timeElapsed, duration, onCompleted, running]);

  return (
    <View style={styles.container}>
      <Progress.Circle
        progress={1 - (timeElapsed / duration).toFixed(2)}
        color={colors.primary_30}
        borderColor={colors.primary_1}
        size={180}
        borderWidth={8}
        thickness={8}
        showsText
        strokeCap="round"
        formatText={() => duration - timeElapsed}
        textStyle={typography.titleXLarge}
      />
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {},
});
