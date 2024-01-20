import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import typography from "../styles/typography";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/seed/696/60/60" }}
        height={40}
        width={40}
        style={styles.profileImage}
      />
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
    elevation: 4
  },
  logo: {
    fontWeight: "800",
    fontSize: 20,
  },
  profileImage: {
    borderRadius: 30,
  },
});
