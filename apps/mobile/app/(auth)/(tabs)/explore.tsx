import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import TypesenseProvider from "@/components/TypesenseProvider";
import SitesLayer from "@/components/MapSitesLayer";
import { SiteOutputDto } from "@/api/requests";
import SearchBar from "@/components/SearchBar";

const INITIAL_REGION = {
  latitude: 165.954319,
  longitude: -47.436123,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function ExploreScreen() {
  const [selectedSite, setSelectedSite] = useState<SiteOutputDto | null>(null);

  const bottomSheetAnim = useRef(new Animated.Value(0)).current;
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (selectedSite) {
      Animated.spring(bottomSheetAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();

      mapRef.current?.animateToRegion(
        {
          latitude: selectedSite.latitude,
          longitude: selectedSite.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000,
      );
    }
  }, [selectedSite]);

  const hideBottomSheet = () => {
    Animated.spring(bottomSheetAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsCompass
      >
        <TypesenseProvider
          indexName="sites"
          queryBy="tags"
          geoLocationField="coordinates"
          perPage={250}
          disablePaginationSearchParams
        >
          <SitesLayer onPress={setSelectedSite} />
        </TypesenseProvider>
      </MapView>

      <Animated.View
        style={[
          styles.bottomSheet,
          selectedSite && {
            transform: [
              {
                translateY: bottomSheetAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [300, 0],
                }),
              },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={["#fff", "#f8f9fa"]}
          style={styles.bottomSheetContent}
        >
          <View style={styles.bottomSheetHeader}>
            <Text style={styles.siteCode}>
              {selectedSite?.code}{" "}
              <Text style={styles.siteName}>{selectedSite?.name}</Text>
            </Text>

            <TouchableOpacity
              onPress={hideBottomSheet}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.siteInfo}>
            <View style={styles.cellStatusContainer}>
              <Text style={styles.cellStatus}>5G</Text>
              <Ionicons name="square" size={24} color="green" />
              <Ionicons name="square" size={24} color="green" />
              <Ionicons name="square" size={24} color="green" />
              <Ionicons name="square" size={24} color="green" />
              <Ionicons name="square" size={24} color="green" />
            </View>
          </View>

          <View style={styles.siteInfo}>
            <View style={styles.ratingContainer}>
              <Ionicons name="checkmark-circle" size={24} color="green" />
              <Text style={styles.rating}>No alarms</Text>
            </View>

            <View style={styles.ratingContainer}>
              <Ionicons name="warning" size={24} color="orange" />
              <Text style={styles.rating}>Upcoming outage</Text>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <Ionicons name="information-circle" size={24} color="gray" />
            <Text style={styles.rating}>Batteries replaced 10/24.</Text>
          </View>

          <TouchableOpacity style={styles.directionsButton}>
            <Text style={styles.directionsText}>See more</Text>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>

      <TypesenseProvider queryBy="code,name" indexName="sites" infix="always">
        <SearchBar onHitPress={setSelectedSite} />
      </TypesenseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  markerContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
  bottomSheetContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  siteName: {
    fontSize: 20,
    color: "#333",
    fontWeight: "normal",
    flex: 1,
  },
  siteCode: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  siteInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  rating: {
    marginLeft: 5,
    color: "#666",
    fontSize: 16,
  },
  cellStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  cellStatus: {
    color: "#666",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  siteType: {
    color: "#666",
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    marginBottom: 10,
  },
  directionsButton: {
    backgroundColor: "rgb(34, 139, 230)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  directionsText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
