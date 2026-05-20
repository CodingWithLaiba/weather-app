import sunIcon from "../assets/images/icon-sunny.webp";
import rainIcon from "../assets/images/icon-rain.webp";
import stromIcon from "../assets/images/icon-storm.webp";
import snowIcon from "../assets/images/icon-snow.webp";
import partly_cloudyIcon from "../assets/images/icon-partly-cloudy.webp";
import fogIcon from "../assets/images/icon-fog.webp";
import drizzleIcon from "../assets/images/icon-drizzle.webp";
function DailyForecast({
  data,
  convertTemperature,
  temperatureUnit,
}) {
  // No Data
  if (!data || !data.daily) return null;

  // Daily Data
  const days = data.daily.time;
  const maxTemps = data.daily.temperature_2m_max;
  const minTemps = data.daily.temperature_2m_min;
  const weatherCodes = data.daily.weather_code;

  // Weather Icon Function
  const getWeatherIcon = (code) => {
    if (code === 0) return sunIcon;

    if (code >= 1 && code <= 3) {
      return partly_cloudyIcon;
    }

    if (code >= 4 && code <= 9) {
      return drizzleIcon;
    }

    if (code >= 10 && code <= 19) {
      return rainIcon;
    }

    if (code >= 20 && code <= 29) {
      return fogIcon;
    }

    if (code >= 30 && code <= 39) {
      return snowIcon;
    }

    if (code >= 40 && code <= 49) {
      return stromIcon;
    }

    return sunIcon;
  };

  return (
    <div>
      {/* Heading */}
      <h2 className="text-white text-lg font-semibold mb-4">
        Daily forecast
      </h2>

      {/* Forecast Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">

        {days.map((day, i) => {
          // Day Name
          const dayName = new Date(day).toLocaleDateString(
            "en-US",
            {
              weekday: "short",
            }
          );

          return (
            <div
              key={i}
              className="bg-[hsl(243,23%,30%)] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-between min-h-[140px] hover:bg-[hsl(243,23%,34%)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Day */}
              <p className="text-sm text-gray-300 font-medium">
                {dayName}
              </p>

              {/* Icon */}
              <img
                src={getWeatherIcon(weatherCodes[i])}
                alt="Weather Icon"
                className="w-10 h-10 object-contain"
              />

              {/* Temperatures */}
              <div className="flex items-center gap-2 text-sm">
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