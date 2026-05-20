import sunIcon from "../assets/images/icon-sunny.webp";
import rainIcon from "../assets/images/icon-rain.webp";
import stromIcon from "../assets/images/icon-storm.webp";
import snowIcon from "../assets/images/icon-snow.webp";
import partly_cloudyIcon from "../assets/images/icon-partly-cloudy.webp";
import fogIcon from "../assets/images/icon-fog.webp";
import drizzleIcon from "../assets/images/icon-drizzle.webp";
function DailyForecast({ data, convertTemperature }) {
  // No Data
  if (!data || !data.daily) return null;

  // Daily Data
  const days = data.daily.time;
  const maxTemps = data.daily.temperature_2m_max;
  const minTemps = data.daily.temperature_2m_min;
  const weatherCodes = data.daily.weather_code;

  // Weather Icon Function
  const getWeatherIcon = (code) => {
    // Clear Sky
    if (code === 0) {
      return sunIcon;
    }

    // Partly Cloudy
    if ([1, 2, 3].includes(code)) {
      return partly_cloudyIcon;
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

    // Thunderstorm
    if ([95, 96, 99].includes(code)) {
      return stromIcon;
    }

    // Default
    return partly_cloudyIcon;
  };

  return (
    <div>
      {/* Heading */}
      <h2 className="text-white text-lg font-semibold mb-4">Daily forecast</h2>

      {/* Forecast Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {days.map((day, i) => {
          // Day Name
          const dayName = new Date(day).toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <div
              key={i}
              className="bg-[hsl(243,23%,20%)] border border-white/35 rounded-2xl p-4 flex flex-col items-center justify-between min-h-[140px] hover:bg-[hsl(243,23%,34%)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Day */}
              <p className="text-md text-gray-300 font-medium">{dayName}</p>

              {/* Icon */}
              <img
                src={getWeatherIcon(weatherCodes[i])}
                alt="Weather Icon"
                className="w-10 h-10 object-contain"
              />

              {/* Temperatures */}
              <div className="flex items-center  gap-10 text-sm">
                <span className="text-white font-semibold">
                  {convertTemperature(maxTemps[i]).toFixed(0)}°
                </span>

                <span className="text-gray-400">
                  {convertTemperature(minTemps[i]).toFixed(0)}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyForecast;
