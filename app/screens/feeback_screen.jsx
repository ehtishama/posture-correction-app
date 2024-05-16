import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "./screen_layout";
import Button from "../components/button";
import { colors } from "../styles/colors";
import Spacer from "../components/spacer";
import typography from "../styles/typography";
import { useFormspark } from "@formspark/use-formspark";
import * as yup from "yup";

const FORMSPARK_FORM_ID = "fGCMTHwW7";

const feedbackSchema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email!")
    .required("Email is required!"),
  message: yup.string().required("You need to write something!"),
});

export default function FeedbackScreen() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSend = async () => {
    try {
      await feedbackSchema.validate({ email, message });
    } catch (err) {
      Alert.alert("Error", err.message, [{ text: "OK" }]);
      return;
    }

    await submit({ email, message });
    Alert.alert(
      "Message Sent",
      "Thank you for your valuable feedback. We will carefully review it and respond to you shortly.",
      [{ text: "OK" }]
    );

    clearForm();
  };

  const clearForm = () => {
    setEmail("");
    setMessage("");
  };
  return (
    <ScreenLayout style={styles.container} title={"Contact"} back>
      <Text style={typography.titleLarge}>Reach out now!</Text>
      <Text>Got something to say? Use the form below to reach out!</Text>
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
    padding: 20,

    gap: 12,
  },
  text_input: {
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: 4,
    borderRadius: 4,
  },
});
