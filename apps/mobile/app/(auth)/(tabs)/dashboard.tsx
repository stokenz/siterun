import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useAuth } from "@/hooks/useAuth";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Alert {
  id: string;
  service: string;
  status: "critical" | "warning" | "info" | "resolved";
  message: string;
  timestamp: string;
  metric?: string;
  value?: string;
}

export default function DashboardScreen() {
  const user = useAuth();

  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "critical" | "warning" | "info"
  >("all");
  const [alerts] = useState<Alert[]>([
    {
      id: "1",
      service: "AC Mains Fail",
      status: "critical",
      message: "A1APB Albany Bypass",
      timestamp: "2 min ago",
      metric: "Estimated Runtime",
      value: "30m",
    },
    {
      id: "2",
      service: "Rectifier Fail",
      status: "warning",
      message: "S1WKM Warrnambool",
      timestamp: "5 min ago",
      metric: "",
      value: "",
    },
    {
      id: "3",
      service: "Battery Test Start",
      status: "info",
      message: "W1WEL Wellington Central",
      timestamp: "10 min ago",
      metric: "",
      value: "",
    },
    // {
    //   id: "4",
    //   service: "AC Mains Fail [Resolved]",
    //   status: "resolved",
    //   message: "A1APB Albany Bypass",
    //   timestamp: "15 min ago",
    //   metric: "",
    //   value: "",
    // },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "#ff4757";
      case "warning":
        return "#ffa502";
      case "info":
        return "#2e86de";
      case "resolved":
        return "#2ed573";
      default:
        return "#2e86de";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "critical":
        return "alert-circle";
      case "warning":
        return "alert";
      case "info":
        return "information";
      case "resolved":
        return "check-circle";
      default:
        return "information";
    }
  };

  const filteredAlerts = alerts.filter((alert) =>
    selectedFilter === "all" ? true : alert.status === selectedFilter
  );

  const metrics = {
    total: alerts.length,
    critical: alerts.filter((a) => a.status === "critical").length,
    warning: alerts.filter((a) => a.status === "warning").length,
    info: alerts.filter((a) => a.status === "info").length,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons
            name="search"
            size={24}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search alerts..."
            value=""
            onChangeText={() => {}}
            placeholderTextColor="#666"
            onFocus={() => {}}
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            autoComplete="off"
          />
        </View>
      </View>

      <View style={styles.filterContainerParent}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {(["all", "critical", "warning", "info"] as const).map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.filterButtonActive,
                selectedFilter === filter && {
                  backgroundColor:
                    filter === "all" ? "#2e86de" : getStatusColor(filter),
                },
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.filterTextActive,
                ]}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)} (
                {filter === "all" ? metrics.total : metrics[filter]})
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.alertList}>
        {filteredAlerts.map((alert) => (
          <TouchableOpacity
            key={alert.id}
            style={styles.alertCard}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.statusBar,
                { backgroundColor: getStatusColor(alert.status) },
              ]}
            />
            <View style={styles.alertContent}>
              <View style={styles.alertHeader}>
                <View style={styles.serviceContainer}>
                  <MaterialCommunityIcons
                    name={getStatusIcon(alert.status)}
                    size={24}
                    color={getStatusColor(alert.status)}
                  />
                  <Text style={styles.serviceName}>{alert.service}</Text>
                </View>
                <Text style={styles.timestamp}>{alert.timestamp}</Text>
              </View>

              <Text style={styles.message}>{alert.message}</Text>

              {alert.metric && (
                <View style={styles.metricContainer}>
                  <Text style={styles.metricText}>{alert.metric}: </Text>
                  <Text
                    style={[
                      styles.metricValue,
                      { color: getStatusColor(alert.status) },
                    ]}
                  >
                    {alert.value}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  header: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  metricItem: {
    alignItems: "center",
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  metricLabel: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
    marginTop: 4,
  },
  filterContainerParent: {
    backgroundColor: "#fff",
    width: "100%",
  },
  filterContainer: {
    flexDirection: "row",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: "#f5f6fa",
  },
  filterButtonActive: {
    backgroundColor: "#2e86de",
  },
  filterText: {
    textAlign: "center",
    fontSize: 14,
    color: "#576574",
  },
  filterTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  alertList: {
    flex: 1,
    padding: 15,
  },
  alertCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  statusBar: {
    width: 4,
  },
  alertContent: {
    flex: 1,
    padding: 15,
  },
  alertHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  serviceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d3436",
    marginLeft: 8,
  },
  timestamp: {
    fontSize: 12,
    color: "#636e72",
  },
  message: {
    fontSize: 14,
    color: "#2d3436",
    marginBottom: 8,
  },
  metricContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  metricText: {
    fontSize: 14,
    color: "#636e72",
  },
  searchContainer: {
    paddingTop: 0,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 18,
  },
  searchIcon: {
    paddingLeft: 15,
    marginRight: 10,
  },
  searchInput: {
    paddingRight: 15,
    flex: 1,
    width: "100%",
    height: "100%",
    fontSize: 16,
    color: "#333",
  },
});
