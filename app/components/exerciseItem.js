import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import typography from "../styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ExerciseItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/seed/1/80/80" }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={typography.titleMedium}>Exercise Item</Text>
        <View style={styles.desc}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={20}
            color="black"
          />
          <Text>00:50</Text>
        </View>
      </View>
    </View>
  );
};

export default ExerciseItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: "white",
  },
  image: {
    height: 80,
    width: 80,
  },
  content: {},
  desc: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginTop: 4,
  },
});
