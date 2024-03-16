import {
  Modal,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Countdown from "./countdown";
import Button from "./button";
import typography from "../styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import * as Speech from "expo-speech";

const TakeRestModal = ({ onRestComplete, isSilent }) => {
  const [countdownRunning, setCountdownRunning] = useState(false);

  useEffect(() => {
    if (countdownRunning) return;

    if (isSilent) {
      Speech.stop();
      setCountdownRunning(true);
    } else {
      Speech.speak(
        "It's time to take some rest. The 10 seconds rest count down will start now.",
        {
          onDone: () => setCountdownRunning(true),
        }
      );
    }
  }, [countdownRunning]);

  return (
    <Modal visible={true}>
      <TouchableOpacity onPress={onRestComplete}>
        <MaterialCommunityIcons
          name="close"
          size={28}
          color="black"
          style={styles.closeButton}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={typography.titleLarge}>Take Rest</Text>
          <Text style={[typography.bodyBase, { textAlign: "center" }]}>
            Well Done! now take some well deserved rest. The next exercise will
            start in a few seconds.
          </Text>
        </View>
        <Countdown
          duration={30}
          onCompleted={onRestComplete}
          running={countdownRunning}
        />
        <Button onPress={onRestComplete} text="Skip Rest" />
      </View>
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
    backgroundColor: colors.primary_1,
    color: colors.primary_50,
    padding: 8,
    borderRadius: 4,
  },
});
