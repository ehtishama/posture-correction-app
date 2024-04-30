import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../button";
import { Overlay } from "@rneui/themed";
import typography from "../../styles/typography";
import DatePicker from "react-native-date-picker";
import notifee, { RepeatFrequency, TriggerType } from "@notifee/react-native";
import { format } from "date-fns";

export const SetReminderModal = ({ visible, toggleModal }) => {
  const [date, setDate] = useState(new Date(Date.now()));

  const handleUpdateReminder = async () => {
    // cancel all trigger notifications
    await notifee.cancelTriggerNotifications();

    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel",
    });


    // if the date is a past date add 1 day to it
    if (date < new Date(Date.now())) {
      date.setDate(date.getDate() + 1);
    }

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.DAILY,
    };

    notifee.createTriggerNotification(
      {
        title: "Workout Reminder",
        body: "Got time for a quick workout to fix your back?",
        android: {
          channelId,
        },
      },
      trigger
    );

    console.log(
      "Daily Workout Reminder set to:",
      format(date, "hh:mm a"), "everyday."
    );
    toggleModal();
  };

  const handleRemoveReminder = async () => {
    await notifee.cancelTriggerNotifications();
    console.log("Daily Workout Reminder removed");
    toggleModal();
  };

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleModal}
      overlayStyle={styles.container}
    >
      <Text style={typography.titleLarge}>Set Reminder</Text>
      <Text style={typography.body}>What time would you like to be reminded everyday?</Text>
      <DatePicker date={date} onDateChange={setDate} mode="time" />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button text="Update Reminder" primary onPress={handleUpdateReminder} />
        <Button text="Turn off Reminder" onPress={handleRemoveReminder} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 32,
    width: 300,
    gap: 8,
    alignItems: "center",
    borderRadius: 8,
  },
});
