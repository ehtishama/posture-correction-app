import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { STACK_ROUTES } from "../navigation/StackNavigator";


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
            <Text>{numExercises} exercises </Text>
            {/* <Entypo name="dot-single" size={16} color="black" /> */}
            {/* <Text>{duration} mins</Text> */}
          </View>
        </View>
        <Image style={styles.cardImage} source={thumbnail} />
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
  },
});
