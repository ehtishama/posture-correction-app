import { StyleSheet, Text } from "react-native";
import React from "react";
import Button from "../button";
import { Overlay } from "@rneui/themed";
import typography from "../../styles/typography";

export const SetReminderModal = ({ visible, toggleModal }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleModal}
      overlayStyle={styles.container}
    >
      <Text style={typography.titleLarge}>Hello!</Text>
      <Text>Welcome to React Native Elements</Text>
      <Button text="Set Reminder" onPress={toggleModal} />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 32,
    width: 300,
    gap: 16,
    alignItems: "center",
    borderRadius: 8,
  },
});
