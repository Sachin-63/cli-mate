import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RealoadIcon({ load }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={35}
        color="#FFC107"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 45,
    right: 20,
  },
});
