import notifee, { RepeatFrequency, TriggerType } from "@notifee/react-native";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../button";
import { Overlay } from "@rneui/themed";
import typography from "../../styles/typography";
import DatePicker from "react-native-date-picker";
import { format } from "date-fns";
import { storageService } from "../../services/storage";
import { updateReminderTime, useAppContext } from "../../context/AppContext";
import { setDailyNotification } from "../../utils/notifications";

export const SetReminderModal = ({ visible, toggleModal }) => {
  const [date, setDate] = useState(new Date());
  const { dispatch } = useAppContext();

  const handleUpdateReminder = async () => {
    // cancel all other trigger notifications
    await notifee.cancelTriggerNotifications();

    await setDailyNotification(date);

    // updating app context
    dispatch(updateReminderTime(date));

    // save the reminder time to storage
    storageService.set("dailyReminder", date.toISOString());

    console.log(
      "Daily Workout Reminder set to:",
      format(date, "hh:mm a"),
      "everyday."
    );

    toggleModal();
  };

  const handleRemoveReminder = async () => {
    await notifee.cancelTriggerNotifications();

    storageService.delete("dailyReminder");
    dispatch(updateReminderTime(null));

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
      <Text style={typography.body}>
        What time would you like to be reminded everyday?
      </Text>
      <DatePicker
        date={date}
        onDateChange={setDate}
        mode="time"
        theme="light"
      />
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
