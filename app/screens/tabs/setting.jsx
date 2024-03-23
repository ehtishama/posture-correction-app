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

const SECTIONS = [
  {
    header: "Support",
    items: [
      { type: "link", label: "Report an Issue", icon: "bug-outline" },
      { type: "link", label: "Contact us", icon: "email-outline" },
    ],
  },
];

export default function SettingScreen() {
  return (
    <ScreenLayout style={styles.container}>
      <Text style={typography.titleLarge}>Settings</Text>
      <ScrollView style={styles.sections_list}>
        {SECTIONS.map((section) => (
          <View>
            <Text style={[typography.bodyBase, styles.section_header]}>
              {section.header}
            </Text>
            {section.items.map((item, idx) => (
              <>
                <TouchableOpacity style={styles.item}>
                  <MaterialCommunityIcons name={item.icon} size={24} />
                  <Text style={typography.titleBase}>{item.label}</Text>
                  {item.type === "link" && (
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={24}
                      style={{ marginLeft: "auto" }}
                    />
                  )}
                </TouchableOpacity>
                {idx + 1 < section.items.length && (
                  <View style={styles.divider} />
                )}
              </>
            ))}
          </View>
        ))}

        <Text>App version 1.0.0</Text>
      </ScrollView>
    </ScreenLayout>
  );
}

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
