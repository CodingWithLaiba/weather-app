import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import WeatherStates from "./components/WeatherStates";
import WeatherCard from "./components/WeatherCard";
import Dailyforcast from "./components/Dailyforcast";
import Hourlyforcast from "./components/Hourlyforcast";

function App() {
  const [temperatureUnit, setTemperatureUnit] = useState("c");
  const [windUnit, setWindUnit] = useState("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");

  const [city, setCity] = useState("Lahore");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=31.52&longitude=74.35&current_weather=true`
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, [city]);

  const convertTemperature = (temp) =>
    temperatureUnit === "c" ? temp : (temp * 9) / 5 + 32;

  const convertWindSpeed = (speed) =>
    windUnit === "km/h" ? speed : speed / 1.609;

  const convertPrecipitation = (value) =>
    precipitationUnit === "mm" ? value : value / 25.4;

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <Navbar
          temperatureUnit={temperatureUnit}
          setTemperatureUnit={setTemperatureUnit}
          windUnit={windUnit}
          setWindUnit={setWindUnit}
          precipitationUnit={precipitationUnit}
          setPrecipitationUnit={setPrecipitationUnit}
        />

        <Searchbar setCity={setCity} />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6 col-span-2">
            
            <WeatherCard
              data={weatherData}
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

            <Dailyforcast data={weatherData} />
          </div>

          <Hourlyforcast data={weatherData} />
        </section>
      </div>
    </div>
  );
}

export default App;