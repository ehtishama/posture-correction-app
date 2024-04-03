import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import typography from "../styles/typography";
import { colors } from "../styles/colors";
import { useNavigation } from "@react-navigation/native";

export default function BackButton({ title, containerStyles = {} }) {
  const navigation = useNavigation();
  const handleBackPress = () => navigation.canGoBack() && navigation.goBack();

  return (
    <View style={[styles.backContainer, containerStyles]}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={24}
          color={colors.primary_70}
        />
      </TouchableOpacity>
      {title && <Text style={typography.titleXLarge}>{title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: colors.primary_1,
    padding: 12,
    alignSelf: "flex-start",
    borderRadius: 50,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderBottomColor: colors.primary_5,
    borderBottomWidth: 1,
  },
});
