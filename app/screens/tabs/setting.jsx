import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenLayout from "../screen_layout";
import typography from "../../styles/typography";
import { colors } from "../../styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Spacer from "../../components/spacer";
import { STACK_ROUTES } from "../../navigation/Routes";
import { useNavigation } from "@react-navigation/native";

const SECTIONS = [
  {
    header: "Support",
    items: [
      { type: "link", label: "Report an Issue", icon: "bug-outline" },
      {
        type: "link",
        label: "Contact us",
        icon: "email-outline",
        route: STACK_ROUTES.FEEDBACK_SCREEN,
      },
    ],
  },
];

export default function SettingScreen() {
  return (
    <ScreenLayout style={styles.container}>
      <Text style={typography.titleLarge}>Settings</Text>
      <ScrollView style={styles.sections_list}>
        {SECTIONS.map((section, idx) => (
          <View key={idx}>
            <Text style={[typography.bodySmall, styles.section_header]}>
              {section.header}
            </Text>
            <Spacer space={8} />
            {section.items.map((item, idx) => (
              <SettingItem
                key={idx}
                item={item}
                isLast={idx + 1 >= section.items.length}
              />
            ))}
          </View>
        ))}

        <Spacer />
        <Text>App version 1.0.0</Text>
      </ScrollView>
    </ScreenLayout>
  );
}

const SettingItem = ({ item, isLast }) => {
  const navigation = useNavigation();
  const isLink = item.type === "link";

  const handlePress = () => {
    if (isLink) {
      navigation.navigate(item.route);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.item} onPress={handlePress}>
        <MaterialCommunityIcons name={item.icon} size={24} />
        <Text style={typography.titleBase}>{item.label}</Text>
        {isLink && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            style={{ marginLeft: "auto" }}
          />
        )}
      </TouchableOpacity>
      {!isLast && <View style={styles.divider} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 8,
  },
  sections_list: {
    gap: 8,
  },
  item: {
    backgroundColor: colors.primary_1,
    padding: 16,
    flexDirection: "row",
    gap: 2,
  },
  section_header: {
    color: "#0008",
    textTransform: "uppercase",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: colors.primary_10,
  },
});
