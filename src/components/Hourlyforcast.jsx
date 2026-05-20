import sunIcon from "../assets/images/icon-sunny.webp";
import rainIcon from "../assets/images/icon-rain.webp";
import stormIcon from "../assets/images/icon-storm.webp";
import snowIcon from "../assets/images/icon-snow.webp";
import partlyCloudyIcon from "../assets/images/icon-partly-cloudy.webp";
import fogIcon from "../assets/images/icon-fog.webp";
import drizzleIcon from "../assets/images/icon-drizzle.webp";

function HourlyForecast({ data, convertTemperature }) {
  // No Data
  if (!data || !data.hourly) return null;

  // Hourly Data
  const times = data.hourly.time.slice(0, 8);
  const temperatures = data.hourly.temperature_2m.slice(0, 8);
  const weatherCodes = data.hourly.weather_code.slice(0, 8);

  // Weather Icon Function
  const getWeatherIcon = (code) => {
    // Clear
    if (code === 0) {
      return sunIcon;
    }

    // Partly Cloudy
    if ([1, 2, 3].includes(code)) {
      return partlyCloudyIcon;
    }

    // Fog
    if ([45, 48].includes(code)) {
      return fogIcon;
    }

    // Drizzle
    if ([51, 53, 55, 56, 57].includes(code)) {
      return drizzleIcon;
    }

    // Rain
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
      return rainIcon;
    }

    // Snow
    if ([71, 73, 75, 77, 85, 86].includes(code)) {
      return snowIcon;
    }

    // Storm
    if ([95, 96, 99].includes(code)) {
      return stormIcon;
    }

    return partlyCloudyIcon;
  };

  return (
    <div className="bg-[hsl(243,23%,20%)] border border-white/5 rounded-3xl p-6 h-full">
      {/* Heading */}
      <h2 className="text-white text-lg font-semibold mb-6">Hourly Forecast</h2>

      {/* Hourly Rows */}
      <div className="space-y-3">
        {times.map((time, i) => {
          // Format Time
          const formattedTime = new Date(time).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true,
          });

          return (
            <div
              key={i}
              className={`flex bg-white/5 items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white/10 
                `}
            >
              <div className=" flex gap-2 items-center">
                {/* Weather Icon */}
                <img
                  src={getWeatherIcon(weatherCodes[i])}
                  alt="Weather Icon"
                  className="w-11 h-11 object-contain"
                />
                {/* Time */}
                <p className="text-sm text-gray-200 min-w-[55px]">
                  {formattedTime}
                </p>
              </div>

              {/* Temperature */}
              <p className="text-white font-semibold text-lg">
                {convertTemperature(temperatures[i]).toFixed(0)}°
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyForecast;
