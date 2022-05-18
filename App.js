import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./Components/WeatherInfo";
import UnitsPicker from "./Components/UnitsPicker";
import RealoadIcon from "./Components/RealoadIcon";
import WeatherDetails from "./Components/WeatherDetails";
import { WEATHER_API_KEY } from "@env";

// const WEATHER_API_KEY = "6d184b2a024647e2a39f8687ea8f71d7";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState("metric");

  useEffect(() => {
    load();
  }, [unitsSystem]);

  async function load() {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage("Access to location is needed to run the app.");
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      // alert(`Latitude : ${latitude} and Longitude : ${longitude}`);

      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);

      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker
            unitsSystem={unitsSystem}
            setUnitsSystem={setUnitsSystem}
          />
          <RealoadIcon load={load} />
          <WeatherInfo
            currentWeather={currentWeather}
            unitsSystem={unitsSystem}
          />
        </View>
        <WeatherDetails
          currentWeather={currentWeather}
          unitsSystem={unitsSystem}
        />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <RealoadIcon load={load} />
        <Text style={{ textAlign: "center", color: "#FFC107" }}>
          {errorMessage}
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FFC107" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
