import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { STACK_ROUTES } from "../navigation/Routes";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TrackItem = ({
  trackId,
  title,
  numExercises,
  duration,
  thumbnail,
  difficulty = 3,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
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
            <View style={styles.row}>
              <Ionicons name="barbell-outline" size={16} />
              <Text>{numExercises} exercises </Text>
            </View>

            {/* <Entypo name="dot-single" size={16} color="black" /> */}

            <View style={styles.row}>
              <MaterialIcons name="timer" size={16} />
              <Text>{Math.ceil(duration / 60)} mins</Text>
            </View>
          </View>
          <View style={[styles.row, { marginTop: 8 }]}>
            {[...Array(difficulty)].map((_, i) => (
              <MaterialCommunityIcons key={i} name="star-outline" size={16} />
            ))}
          </View>
        </View>
        <Animated.Image style={styles.cardImage} source={thumbnail} />
      </View>
    </TouchableOpacity>
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
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardImage: {
    width: 96,
    height: 96,
    borderRadius: 20,
    margin: 8,
    shadowColor: "#000",
  },
  desc: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
