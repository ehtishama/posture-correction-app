import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import typography from "../styles/typography";
import { colors } from "../styles/colors";
import * as Progress from "react-native-progress";
import { Audio } from "expo-av";

const ticSound = require("../../assets/sounds/tic.wav");
const bellSound = require("../../assets/sounds/bike-bell-ring.wav");

const COUNTDOWN_DELAY = 1000;

const Countdown = ({
  duration,
  onCompleted,
  reset,
  running = true,
  sound = false,
  renderProgress = null,
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [soundObject, setSoundObject] = useState(null);

  async function playTicSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(ticSound);
    setSoundObject(sound);

    console.log("Playing Sound 1");
    await sound.playAsync();
  }

  useEffect(() => {
    return soundObject
      ? () => {
          soundObject.unloadAsync();
          console.log("Sound Unloaded");
        }
      : undefined;
  }, [soundObject]);

  // reset timer
  useEffect(() => {
    setTimeElapsed(0);
  }, [reset]);

  useEffect(() => {
    if (!running) return;

    if (timeElapsed >= duration) {
      // play countdown completed sound
      Audio.Sound.createAsync(bellSound, { shouldPlay: true });

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
      {
        // render custom progress bar
        renderProgress ? (
          renderProgress({
            progress: 1 - (timeElapsed / duration).toFixed(2),
          })
        ) : (
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
        )
      }
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});
