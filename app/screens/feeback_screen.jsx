import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "./screen_layout";
import Button from "../components/button";
import { colors } from "../styles/colors";
import Spacer from "../components/spacer";
import typography from "../styles/typography";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "fGCMTHwW7";

export default function FeedbackScreen() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSend = async () => {
    if (email && message) {
      await submit({ email, message });
      Alert.alert(
        "Message Sent",
        "Thanks for valueable feedback. We'll be looking into it soon, and get back to you",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <ScreenLayout style={styles.container}>
      <Text style={typography.titleLarge}>Reach out now!</Text>
      <Text>Got something to say? Use the form below to reach us out!</Text>
      <Spacer space={8} />
      <TextInput
        placeholder="Email"
        style={styles.text_input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Write your message here"
        style={styles.text_input}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
        value={message}
        onChangeText={setMessage}
      />
      <Spacer />
      <Button text="Send" primary onPress={handleSend} />
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
