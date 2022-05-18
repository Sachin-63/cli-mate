import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  //   const windSpeed=unitsSystem==='metric'?

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: "#bdbdbd",
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={27} color="#FFC107" />
            <View>
              <Text style={{ color: "#002651" }}>Feels Like :</Text>
              <Text>
                {feels_like}
                {unitsSystem === "metric" ? ` °C` : ` °F`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={35} color="#FFC107" />
            <View>
              <Text style={{ color: "#002651" }}>Humidity :</Text>
              <Text>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopColor: "#bdbdbd",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: "#bdbdbd",
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={27}
              color="#FFC107"
            />
            <View>
              <Text style={{ color: "#002651" }}>Wind Speed :</Text>
              <Text>
                {speed}
                {unitsSystem === "metric" ? ` m/s` : ` miles/h`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={35}
              color="#FFC107"
            />
            <View>
              <Text style={{ color: "#002651" }}>Pressure :</Text>
              <Text>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 10,
    margin: 15,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
});
