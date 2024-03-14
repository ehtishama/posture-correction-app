import { Image, StyleSheet, Switch, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/colors";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import typography from "../styles/typography";

export const ExerciseDemoCard = ({
  title = "Cat Cow",
  poses,
  onSilentModeChange,
}) => {
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

  useEffect(() => {
    onSilentModeChange(!soundEnabled);
  }, [soundEnabled]);

  return (
    <View style={styles.container}>
      {pose && (
        <pose.default
          // source={{ uri: "https://picsum.photos/seed/1/140/160" }}
          height={160}
          width={160}
        />
      )}

      <View style={styles.footer}>
        <Text style={[typography.titleLarge, { color: colors.primary_70 }]}>
          {title}
        </Text>
        <View style={styles.action_buttons}>
          <TouchableOpacity
            onPress={() => setSoundEnabled((enabled) => !enabled)}
          >
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
    // position:
  },
  image: {},
  footer: {
    position: "absolute",
    flexGrow: 1,
    bottom: 16,
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  action_buttons: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
});
