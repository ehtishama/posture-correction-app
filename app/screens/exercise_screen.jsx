import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ExerciseDemoCard } from "../components/exerciseDemoCard";
import Button from "../components/button";

import Countdown from "../components/countdown";
import TakeRestModal from "../components/takeRestModal";
import { Feather } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { getExerciseById } from "../data/utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import ScreenLayout from "./screen_layout";
import { STACK_ROUTES } from "../navigation/Routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const playExerciseMessage = (onDone, isFirstExercise = false) => {
  let message;
  if (!isFirstExercise)
    message = "Get ready for your next exercise. The countdown will start now.";
  else
    message = "Get ready for your first exercise. The countdown will start now";

  Speech.stop();
  Speech.speak(message, {
    onDone,
  });
};

export default function ExerciseScreen() {
  const navigation = useNavigation();

  const {
    params: { exercises, trackId },
  } = useRoute();

  const [currExerciseIdx, setCurrExerciseIdx] = useState(0);
  const [isRestModalVisible, setIsRestModalVisible] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [isSilent, setIsSilent] = useState(false);
  const [infoSheetIdx, setInfoSheetIdx] = useState(-1);
  const { exercise_id, duration } = exercises[currExerciseIdx];
  const currExerciseModel = getExerciseById(exercise_id);

  const handleSilentMode = (isSilent) => {
    Speech.stop();
    setIsSilent(isSilent);
  };

  const handleInfoClick = () => {
    setInfoSheetIdx(0);
  };

  const startExercise = () => {
    setIsPause(false);
  };

  const nextExercise = () => {
    if (currExerciseIdx + 1 < exercises.length) {
      setCurrExerciseIdx((idx) => idx + 1);
    } else
      navigation.replace(STACK_ROUTES.SESSION_COMPLETE_SCREEN, { trackId });
  };

  const prevExercise = () => {
    if (currExerciseIdx > 0)
      setCurrExerciseIdx((exerciseIdx) => exerciseIdx - 1);
  };

  // Starts the exercise countdown on navigations, and idx change
  // If idx 0, play first exercise message
  useEffect(() => {
    // return; // temporarily disable auto start

    if (isSilent) startExercise();
    else playExerciseMessage(startExercise, currExerciseIdx == 0);
  }, [currExerciseIdx]);

  return (
    <ScreenLayout style={styles.container}>
      <ExerciseDemoCard
        title={currExerciseModel.title}
        poses={currExerciseModel.demo_poses}
        onSilentModeChange={handleSilentMode}
        onInfoClick={handleInfoClick}
      />

      <View style={styles.content}>
        {currExerciseModel.instructions.map((item, idx) => (
          <View
            key={idx}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <MaterialCommunityIcons
              name={`numeric-${idx + 1}`}
              size={28}
              color={colors.primary_60}
            />

            <Text>{item}</Text>
          </View>
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "auto",
        }}
      >
        <Countdown
          duration={duration}
          onCompleted={() => setIsRestModalVisible(true)}
          // reset the countdown when the current exercise changes
          // 🔴 TODO :: (A better approach is to use seprate countdowns for each exercise, on exercise change destroy the current countdown, create new one)
          reset={currExerciseModel}
          running={!isPause}
        />
      </View>

      <View style={styles.actions}>
        <Button onPress={prevExercise}>
          <Feather name="arrow-left" size={24} color="black" />
        </Button>

        <Button primary onPress={() => setIsPause((x) => !x)}>
          {isPause ? (
            <Feather name="play" size={24} color="black" />
          ) : (
            <Feather name="pause" size={24} color="black" />
          )}
        </Button>

        <Button onPress={nextExercise}>
          <Feather name="arrow-right" size={24} color="black" />
        </Button>
      </View>

      {isRestModalVisible && (
        <TakeRestModal
          onRestComplete={() => {
            setIsRestModalVisible(false);
            setIsPause(true);
            nextExercise();
          }}
          isSilent={isSilent}
        />
      )}

      <BottomSheet
        snapPoints={["60%", "90%"]}
        enablePanDownToClose
        index={infoSheetIdx}
        onClose={() => setInfoSheetIdx(-1)}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetScrollView style={styles.bottom_sheet}>
          <Text>{currExerciseModel.description}</Text>
        </BottomSheetScrollView>
      </BottomSheet>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "flex-start",
    gap: 8,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  title: {
    textAlign: "center",
  },
  actions: {
    // marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  bottom_sheet: {
    padding: 16,
  },
});
