import React from "react";
import { Text, View } from "react-native";

export default function OfflineBanner() {
  return (
    <View
      style={{
        backgroundColor: "red",
        padding: 16,
      }}
    >
      <Text style={{ fontWeight: "bold", color: "white" }}>
        You are offline!
      </Text>
    </View>
  );
}
