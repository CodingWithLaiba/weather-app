import { useState, useEffect, useCallback } from "react";
import "./App.css";

import LoadingScreen from "./components/LodingScreen";
import ApiError from "./components/ApiError";
import NotFound from "./components/NotFound";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import WeatherStates from "./components/WeatherStates";
import WeatherCard from "./components/WeatherCard";
import Hourlyforcast from "./components/Hourlyforcast";
import DailyForcast from "./components/Dailyforcast";

function App() {
  /*  UNITS STATE  */

  const [temperatureUnit, setTemperatureUnit] = useState("c");
  const [windUnit, setWindUnit] = useState("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");

  /*  WEATHER STATE  */

  const [city, setCity] = useState("Lahore");

  const [locationData, setLocationData] = useState(null);

  const [weatherData, setWeatherData] = useState(null);

  /*  LOADING + ERROR  */

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  /*  FETCH WEATHER  */

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);

      setError("");

      /*      STEP 1 → GEO LOCATION
      ========================= */

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
      );

      if (!geoRes.ok) {
        throw new Error("API_ERROR");
      }

      const geoData = await geoRes.json();

      /*      CITY NOT FOUND
      ========================= */

      if (!geoData.results || geoData.results.length === 0) {
        setError("CITY_NOT_FOUND");

        setWeatherData(null);

        setLocationData(null);

        return;
      }

      /*      SAVE LOCATION
      ========================= */

      const cityInfo = geoData.results[0];

      setLocationData(cityInfo);

      const latitude = cityInfo.latitude;

      const longitude = cityInfo.longitude;

      /*      STEP 2 → WEATHER DATA
      ========================= */

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto`,
      );

      if (!weatherRes.ok) {
        throw new Error("API_ERROR");
      }

      const weatherJson = await weatherRes.json();

      setWeatherData(weatherJson);
    } catch (err) {
      console.error(err);

      setError("API_ERROR");

      setWeatherData(null);

      setLocationData(null);
    } finally {
      setLoading(false);
    }
  }, [city]);

  /*  FETCH ON CITY CHANGE  */

  useEffect(() => {
    const loadWeather = async () => {
      await fetchWeather();
    };

    loadWeather();
  }, [fetchWeather]);
  /*  TEMPERATURE CONVERSION  */

  const convertTemperature = (temp) => {
    return temperatureUnit === "c" ? temp : (temp * 9) / 5 + 32;
  };

  /*  WIND CONVERSION  */

  const convertWindSpeed = (speed) => {
    return windUnit === "km/h" ? speed : speed / 1.609;
  };

  /*PRECIPITATION CONVERSION*/

  const convertPrecipitation = (value) => {
    return precipitationUnit === "mm" ? value : value / 25.4;
  };

  return (
    <div className="min-h-screen px-4 py-6 md:px-8 md:py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/*        NAVBAR*/}

        <Navbar
          temperatureUnit={temperatureUnit}
          setTemperatureUnit={setTemperatureUnit}
          windUnit={windUnit}
          setWindUnit={setWindUnit}
          precipitationUnit={precipitationUnit}
          setPrecipitationUnit={setPrecipitationUnit}
        />

        {/*SEARCHBAR*/}

        <Searchbar setCity={setCity} />

        {/*LOADING SCREEN*/}

        {loading ? (
          <LoadingScreen />
        ) : error === "API_ERROR" ? (
          /* API ERROR*/

          <ApiError retry={fetchWeather} />
        ) : error === "CITY_NOT_FOUND" ? (
          /* CITY NOT FOUND*/

          <NotFound city={city} />
        ) : weatherData ? (
          /*MAIN LAYOUT*/

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/*LEFT SIDE*/}

            <div className="flex flex-col gap-6 lg:col-span-8">
              {/* WEATHER CARD */}

              <WeatherCard
                data={weatherData}
                location={locationData}
                convertTemperature={convertTemperature}
                temperatureUnit={temperatureUnit}
              />

              {/* WEATHER STATES */}

              <WeatherStates
                data={weatherData}
                convertWindSpeed={convertWindSpeed}
                convertTemperature={convertTemperature}
                convertPrecipitation={convertPrecipitation}
                windUnit={windUnit}
                precipitationUnit={precipitationUnit}
              />

              {/* DAILY FORECAST */}

              <DailyForcast
                data={weatherData}
                convertTemperature={convertTemperature}
                temperatureUnit={temperatureUnit}
              />
            </div>

            {/*RIGHT SIDE*/}

            <div className="lg:col-span-4">
              {/* HOURLY FORECAST */}

              <Hourlyforcast
                data={weatherData}
                convertTemperature={convertTemperature}
                temperatureUnit={temperatureUnit}
              />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default App;
