import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Link, useNavigation } from "expo-router";

export const TrackItem = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("session_screen")}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Basic</Text>
          <View style={styles.desc}>
            <Text>12 exercises </Text>
            <Entypo name="dot-single" size={16} color="black" />
            <Text>20 mins</Text>
          </View>
        </View>
        <Image
          style={styles.cardImage}
          source={{ uri: "https://picsum.photos/seed/1/140/160" }}
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
    borderColor: "black",
    borderRadius: 12,
    overflow: "hidden",
    borderBottomWidth: 8,
    backgroundColor: "#FDEFEC",
    marginHorizontal: 16,
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
