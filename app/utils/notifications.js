import notifee, { RepeatFrequency, TriggerType } from "@notifee/react-native";

export async function setDailyNotification(datetime) {
  const channelId = await notifee.createChannel({
    id: "default",
    name: "Default Channel",
  });

  // if user chose a time before the current time
  // set the reminder from the next day
  if (datetime < new Date()) {
    datetime.setDate(datetime.getDate() + 1);
  }

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: datetime.getTime(),
    repeatFrequency: RepeatFrequency.DAILY,
  };

  await notifee.createTriggerNotification(
    {
      title: "Workout Reminder",
      body: "Got time for a quick workout to fix your back?",
      android: {
        channelId,
      },
    },
    trigger
  );
}
