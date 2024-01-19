import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../styles/colors";
import typography from "../styles/typography";

export const ExerciseDemoCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/seed/1/140/160" }}
        height={160}
        width={160}
      />
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
