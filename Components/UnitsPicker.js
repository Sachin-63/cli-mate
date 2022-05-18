import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
        dropdownIconColor="#FFC107"
        style={{ color: "#FFC107" }}
      >
        <Picker.Item label="°C" value="metric" style={{ color: "#FFC107" }} />
        <Picker.Item label="°F" value="imperial" style={{ color: "#FFC107" }} />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 35,
      },
    }),

    left: 20,
    height: 70,
    width: 100,
  },
});
