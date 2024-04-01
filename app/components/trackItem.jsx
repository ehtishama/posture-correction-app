import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { STACK_ROUTES } from "../navigation/Routes";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

export const TrackItem = ({
  trackId,
  title,
  numExercises,
  duration,
  thumbnail,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(STACK_ROUTES.SESSION_SCREEN, {
          trackId,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.desc}>
            <Ionicons name="barbell-outline" size={16} />
            <Text>{numExercises} exercises </Text>
            <Entypo name="dot-single" size={16} color="black" />
            <MaterialIcons name="timer" size={16} />
            <Text>{Math.ceil(duration / 60)} mins</Text>
          </View>
        </View>
        <Animated.Image
          style={styles.cardImage}
          source={thumbnail}
          sharedTransitionTag="tag"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 12,
    overflow: "hidden",
    borderBottomWidth: 8,
    backgroundColor: "#FDEFEC",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  content: {
    alignSelf: "center",
    padding: 16,
    gap: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardImage: {
    width: 120,
    height: 120,
  },
  desc: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
