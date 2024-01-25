import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import typography from "../styles/typography";
import { colors } from "../styles/colors";

const Countdown = ({ duration, onDone, reset, isPlaying = true }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

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
        return timeElapsed + 1;
      });
    }, 1000);

    // clean up
    return () => clearInterval(intervalId);
  }, [timeElapsed, setTimeElapsed, duration, onDone, isPlaying]);

  return (
    <View style={styles.container}>
      <Text style={typography.title2XLarge}>{duration - timeElapsed}</Text>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_1,
  },
});
