import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ScreenLayout from "./screen_layout";
import Button from "../components/button";
import { colors } from "../styles/colors";
import Spacer from "../components/spacer";
import typography from "../styles/typography";

export default function FeedbackScreen() {
  return (
    <ScreenLayout style={styles.container}>
      <Text style={typography.titleLarge}>Reach out now!</Text>
      <Text>Got something to say? Use the form below to reach us out!</Text>
      <Spacer space={8} />
      <TextInput
        placeholder="Email"
        style={styles.text_input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Write your message here"
        style={styles.text_input}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
      />
      <Spacer />
      <Button text="Send" primary />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 4,
  },
  text_input: {
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: 4,
    borderRadius: 4,
  },
});
