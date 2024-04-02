import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import typography from "../styles/typography";
import { useNavigation } from "@react-navigation/native";

export default function ScreenLayout({
  children,
  style,
  title,
  scrollview = false,
  back = false,
}) {
  const navigation = useNavigation();
  const handleBackPress = () => navigation.canGoBack() && navigation.goBack();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {back && (
        <View style={_styles.backContainer}>
          <TouchableOpacity
            style={_styles.backButton}
            onPress={handleBackPress}
          >
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={24}
              color={colors.primary_70}
            />
          </TouchableOpacity>
          {title && <Text style={typography.titleXLarge}>{title}</Text>}
        </View>
      )}
      {scrollview ? (
        <ScrollView style={[_styles.container, style]}>{children}</ScrollView>
      ) : (
        <View style={[_styles.container, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  },
});
