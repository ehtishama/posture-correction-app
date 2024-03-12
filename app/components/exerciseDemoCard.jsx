import { Image, StyleSheet, Switch, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/colors";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ExerciseDemoCard = ({ poses }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [poseIdx, setPoseIdx] = useState(0);
  let pose = poses[poseIdx];

  useEffect(() => {
    let timerId = setInterval(() => {
      if (poseIdx + 1 < poses.length) setPoseIdx((poseIdx) => poseIdx + 1);
      else setPoseIdx(0);
    }, 800);

    return () => clearInterval(timerId);
  }, [poseIdx, poses]);

  return (
    <View style={styles.container}>
      {pose && (
        <pose.default
          // source={{ uri: "https://picsum.photos/seed/1/140/160" }}
          height={160}
          width={160}
        />
      )}

      {/* sound switch */}

      <View style={styles.actionBtns}>
        <TouchableOpacity onPress={() => setSoundEnabled((val) => !val)}>
          {soundEnabled ? (
            <MaterialCommunityIcons
              name="volume-high"
              size={28}
              color={colors.primary_70}
            />
          ) : (
            <MaterialCommunityIcons
              name="volume-off"
              size={28}
              color={colors.primary_70}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="information-outline"
            size={28}
            color={colors.primary_70}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    backgroundColor: colors.primary_1,
    borderWidth: 2,
    borderBottomWidth: 8,
    borderColor: colors.primary_70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  image: {},
  actionBtns: {
    position: "absolute",
    bottom: 16,
    right: 16,
    gap: 20,
    flexDirection: "row",
  },
});
