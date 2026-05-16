import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import WeatherStates from "./components/WeatherStates";
import WeatherCard from "./components/WeatherCard";
import Hourlyforcast from "./components/Hourlyforcast";
import DailyForecast from "./components/Dailyforcast";

function App() {
  // Units State
  const [temperatureUnit, setTemperatureUnit] = useState("c");
  const [windUnit, setWindUnit] = useState("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");

  // Weather State
  const [city, setCity] = useState("Lahore");
  const [weatherData, setWeatherData] = useState(null);

  // Loading + Error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch Weather
  useEffect(() => {
    const fetchWeather = async () => {
      console.log(weatherData);
      try {
        setLoading(true);
        setError("");

        // STEP 1 → Get Coordinates
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        );

        const geoData = await geoRes.json();

        // City Not Found
        if (!geoData.results || geoData.results.length === 0) {
          setError("City not found");
          setWeatherData(null);
          setLoading(false);
          return;
        }

        // Extract Coordinates
        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;

        // STEP 2 → Get Weather
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`
        );

        const weatherJson = await weatherRes.json();

        // Save Data
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

  // Temperature Convert
  const convertTemperature = (temp) => {
    return temperatureUnit === "c"
      ? temp
      : (temp * 9) / 5 + 32;
  };

  // Wind Convert
  const convertWindSpeed = (speed) => {
    return windUnit === "km/h"
      ? speed
      : speed / 1.609;
  };

  // Precipitation Convert
  const convertPrecipitation = (value) => {
    return precipitationUnit === "mm"
      ? value
      : value / 25.4;
  };

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-10">
      <div className="max-w-[1440px] mx-auto space-y-8">

        {/* Navbar */}
        <Navbar
          temperatureUnit={temperatureUnit}
          setTemperatureUnit={setTemperatureUnit}
          windUnit={windUnit}
          setWindUnit={setWindUnit}
          precipitationUnit={precipitationUnit}
          setPrecipitationUnit={setPrecipitationUnit}
        />

        {/* Search */}
        <Searchbar setCity={setCity} />

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm">
            {error}
          </p>
        )}

        {/* Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Side */}
          <div className="flex flex-col gap-6 lg:col-span-8">

            <WeatherCard
              data={weatherData}
              loading={loading}
              convertTemperature={convertTemperature}
              temperatureUnit={temperatureUnit}
            />

            <WeatherStates
              data={weatherData}
              convertWindSpeed={convertWindSpeed}
              convertPrecipitation={convertPrecipitation}
              windUnit={windUnit}
              precipitationUnit={precipitationUnit}
            />

            <DailyForecast
              data={weatherData}
              convertTemperature={convertTemperature}
              temperatureUnit={temperatureUnit}
            />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-4">
            <Hourlyforcast
              data={weatherData}
              convertTemperature={convertTemperature}
              temperatureUnit={temperatureUnit}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;