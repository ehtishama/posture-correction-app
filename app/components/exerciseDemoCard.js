import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/colors";

export const ExerciseDemoCard = ({ poses }) => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    backgroundColor: colors.primary_1,
    borderWidth: 2,
    borderBottomWidth: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  image: {},
});
