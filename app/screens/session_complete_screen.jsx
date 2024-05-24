import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import typography from "../styles/typography";
import Button from "../components/button";
import { colors } from "../styles/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import trackingService from "../services/tracking";
import { addWorkout, useAppContext } from "../context/AppContext";

const SessionCompleteScreen = () => {
  const { dispatch } = useAppContext();

  const navigation = useNavigation();
  const { params } = useRoute();
  const animation = React.useRef(null);
  const [animationFinished, setAnimationFinished] = useState(false);

  const trackId = params?.trackId;

  useEffect(() => {
    if (trackId) {
      console.log(`Track ${trackId} completed. Recording progress.`);
      const workout = {
        id: Date.now(),
        track: trackId,
        createdAt: Date.now(),
      };

      //record the workout in the app context
      dispatch(addWorkout(workout));
      trackingService.addCompletedWorkout(workout);
    }
  }, []);

  /**
   * logic for knowing what session/workout has got completed
   */

  return (
    <View style={styles.container}>
      {!animationFinished && (
        <LottieView
          autoPlay
          loop={false}
          ref={animation}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: 1,
          }}
          source={require("../../assets/lottie-animations/confetti.json")}
          onAnimationFinish={() => setAnimationFinished(true)}
        />
      )}

      <View style={styles.content}>
        <Text style={typography.titleLarge}>Congratulations !</Text>

        <Text style={[typography.bodyBase, { textAlign: "center" }]}>
          Great job completing your workout! Take a break and come back later
          for another quick session. Keep up the good work!
        </Text>
        <Button text="OK" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

export default SessionCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_10,
    padding: 20,
    justifyContent: "center",
  },
  content: {
    gap: 24,
    alignItems: "center",
  },
});
