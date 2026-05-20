import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import WeatherStates from "./components/WeatherStates";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";

function App() {
  // =========================
  // Units State
  // =========================
  const [temperatureUnit, setTemperatureUnit] = useState("c");
  const [windUnit, setWindUnit] = useState("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");

  // =========================
  // Location + Weather State
  // =========================
  const [city, setCity] = useState("Lahore");
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  // =========================
  // Loading + Error
  // =========================
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Fetch Weather Data
  // =========================
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        // =========================
        // STEP 1 → Get Coordinates
        // =========================
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        );

        const geoData = await geoRes.json();

        // City Not Found
        if (!geoData.results || geoData.results.length === 0) {
          setError("City not found");
          setWeatherData(null);
          setLocationData(null);
          return;
        }

        // Save City Info
        const cityInfo = geoData.results[0];
        setLocationData(cityInfo);

        const latitude = cityInfo.latitude;
        const longitude = cityInfo.longitude;

        // =========================
        // STEP 2 → Fetch Weather
        // =========================
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`
        );

        const weatherJson = await weatherRes.json();

        // Save Weather Data
        setWeatherData(weatherJson);

      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  // =========================
  // Temperature Conversion
  // =========================
  const convertTemperature = (temp) => {
    return temperatureUnit === "c"
      ? temp
      : (temp * 9) / 5 + 32;
  };

  // =========================
  // Wind Speed Conversion
  // =========================
  const convertWindSpeed = (speed) => {
    return windUnit === "km/h"
      ? speed
      : speed / 1.609;
  };

  // =========================
  // Precipitation Conversion
  // =========================
  const convertPrecipitation = (value) => {
    return precipitationUnit === "mm"
      ? value
      : value / 25.4;
  };

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-10">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* =========================
            Navbar
        ========================== */}
        <Navbar
          temperatureUnit={temperatureUnit}
          setTemperatureUnit={setTemperatureUnit}
          windUnit={windUnit}
          setWindUnit={setWindUnit}
          precipitationUnit={precipitationUnit}
          setPrecipitationUnit={setPrecipitationUnit}
        />

        {/* =========================
            Search Bar
        ========================== */}
        <Searchbar setCity={setCity} />

        {/* =========================
            Error Message
        ========================== */}
        {error && (
          <p className="text-red-400 text-sm">
            {error}
          </p>
        )}

        {/* =========================
            Main Layout
        ========================== */}
        {weatherData && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* =========================
                LEFT SIDE
            ========================== */}
            <div className="flex flex-col gap-6 lg:col-span-8">

              {/* Weather Card */}
              <WeatherCard
                data={weatherData}
                loading={loading}
                location={locationData}
                convertTemperature={convertTemperature}
                temperatureUnit={temperatureUnit}
              />

              {/* Weather States */}
              <WeatherStates
                data={weatherData}
                convertWindSpeed={convertWindSpeed}
                convertTemperature={convertTemperature}
                convertPrecipitation={convertPrecipitation}
                windUnit={windUnit}
                precipitationUnit={precipitationUnit}
              />

              {/* Daily Forecast */}
              <DailyForecast
                data={weatherData}
                convertTemperature={convertTemperature}
                temperatureUnit={temperatureUnit}
              />

            </div>

            {/* =========================
                RIGHT SIDE
            ========================== */}
            <div className="lg:col-span-4">

              {/* Hourly Forecast */}
              <HourlyForecast
                data={weatherData}
                convertTemperature={convertTemperature}
                temperatureUnit={temperatureUnit}
              />

            </div>

          </section>
        )}

      </div>
    </div>
  );
}

export default App;