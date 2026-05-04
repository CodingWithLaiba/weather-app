import { useState } from 'react'
import "./App.css";
import Navbar from "../src/components/Navbar";
import Searchbar from "../src/components/Searchbar";
import WeatherStates from "../src/components/WeatherStates";
import WeatherCard from "../src/components/WeatherCard";
import Dailyforcast from "../src/components/Dailyforcast";
import Hourlyforcast from "../src/components/Hourlyforcast";
function App() {
  const [temperatureUnit, setTemperatureUnit] = useState("c");
  const [windUnit, setWindUnit] = useState("km/h");
  const [precipitationUnit, setPrecipitationUnit] = useState("mm");
  const [city, setCity]= useState("Lahore");
  const [weatherDate, setWeatherDate] = useState(null);

  
  return (
    <>
      <div className="min-h-screen px-4 py-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col gap-6">
            <Navbar />
            <Searchbar />
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 col-span-2">
              <WeatherCard />
              <WeatherStates />
              <Dailyforcast />
            </div>
            <div className="col-span-1">
              <Hourlyforcast />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
