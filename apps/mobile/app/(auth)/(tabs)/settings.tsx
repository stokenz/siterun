import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { OpenAPI as OpenAPIConfig } from "@/api/requests/core/OpenAPI";
import { useAuth } from "@/hooks/useAuth";

interface SettingItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  iconColor?: string;
  type: "toggle" | "action" | "link" | "button";
  value?: boolean;
  action?: () => void;
}

interface SettingGroup {
  id: string;
  title?: string;
  items: SettingItem[];
}

export default function SettingsScreen() {
  const user = useAuth();

  async function logout() {
    Alert.alert("Confirm Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign out",
        style: "destructive",
        onPress: () => {
          SecureStore.deleteItemAsync("accessToken");
          OpenAPIConfig.TOKEN = "";
          router.replace("/");
        },
      },
    ]);
  }

  const [settings, setSettings] = useState<SettingGroup[]>([
    {
      id: "notifications",
      title: "Notifications",
      items: [
        {
          id: "push",
          title: "Notifications",
          type: "toggle",
          value: true,
        },
        {
          id: "sound",
          title: "Sounds",
          type: "toggle",
          value: true,
        },
        {
          id: "critical",
          title: "Critical Alerts",
          type: "toggle",
          value: true,
        },
      ],
    },
    {
      id: "account",
      title: "Account",
      items: [
        {
          id: "profile",
          title: "Profile",
          description: `${user.firstName} ${user.lastName}`,
          type: "link",
        },
        {
          id: "security",
          title: "Security",
          type: "link",
        },
        {
          id: "privacy",
          title: "Privacy",
          type: "link",
        },
        {
          id: "signout",
          title: "Sign out",
          type: "action",
          action: logout,
        },
      ],
    },
    {
      id: "about",
      title: "About",
      items: [
        {
          id: "version",
          title: "Version",
          description: "1.0.0",
          type: "link",
        },
        {
          id: "terms",
          title: "Terms of Service",
          type: "link",
        },
        {
          id: "privacy",
          title: "Privacy Policy",
          type: "link",
        },
      ],
    },
  ]);

  const handleToggle = (groupId: string, itemId: string) => {
    setSettings((prevSettings) =>
      prevSettings.map((group) =>
        group.id === groupId
          ? {
              ...group,
              items: group.items.map((item) =>
                item.id === itemId && item.type === "toggle"
                  ? { ...item, value: !item.value }
                  : item,
              ),
            }
          : group,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {settings.map((group) => (
          <View key={group.id} style={styles.section}>
            {group.title && (
              <Text style={styles.sectionHeader}>{group.title}</Text>
            )}
            <View style={styles.sectionContent}>
              {group.items.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.settingItem,
                    index !== group.items.length - 1 &&
                      styles.settingItemBorder,
                  ]}
                  onPress={() => {
                    if (item.type === "toggle") {
                      handleToggle(group.id, item.id);
                    }
                    if (item.type === "action") {
                      item.action?.();
                    }
                  }}
                >
                  <View style={styles.settingItemContent}>
                    <Text style={styles.settingItemTitle}>{item.title}</Text>
                    {item.description && (
                      <Text style={styles.settingItemDescription}>
                        {item.description}
                      </Text>
                    )}
                  </View>
                  {item.type === "toggle" && (
                    <Switch
                      value={item.value}
                      onValueChange={() => handleToggle(group.id, item.id)}
                      trackColor={{ false: "#D1D1D6", true: "#34C759" }}
                      ios_backgroundColor="#D1D1D6"
                    />
                  )}
                  {(item.type === "link" || item.type === "action") && (
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#C7C7CC"
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  content: {
    flex: 1,
    paddingVertical: 24,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6e6e73",
    textTransform: "uppercase",
    marginLeft: 16,
    marginBottom: 6,
  },
  sectionContent: {
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#C6C6C8",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    minHeight: 44,
  },
  settingItemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C6C6C8",
  },
  settingItemContent: {
    flex: 1,
  },
  settingItemTitle: {
    fontSize: 17,
    color: "#000",
  },
  settingItemDescription: {
    fontSize: 17,
    color: "#8E8E93",
    marginTop: 2,
  },
  footer: {
    height: 40,
  },
});
