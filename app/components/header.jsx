import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import typography from "../styles/typography";

export const Header = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="user" size={24} color="white" />

      <Text style={typography.titleMedium}>Posture Perfect</Text>
      <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    // elevation: 4,
    borderBottomColor: "rgba(0,0,0,.1)",
    borderBottomWidth: 1,
  },
  logo: {
    fontWeight: "800",
    fontSize: 20,
  },
  profileImage: {
    borderRadius: 30,
    height: 30,
    width: 30,
  },
});
