function WeatherStates({
  data,
  convertWindSpeed,
  convertTemperature,
  convertPrecipitation,
  windUnit,
  precipitationUnit,
}) {
  // Loading State
  if (!data || !data.current) {
    return (
      <div className="rounded-2xl bg-[hsl(243,23%,30%)] p-6 text-white">
        Loading weather states...
      </div>
    );
  }

  // Current Weather Data
  const windSpeed = data.current.wind_speed_10m;
  const feelsLike = data.current.apparent_temperature;
  const humidity = data.current.relative_humidity_2m;
  const precipitation = data.current.precipitation;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {/* Feels Like */}
      <div className="bg-[hsl(243,23%,30%)] border border-white/5 rounded-2xl p-5 backdrop-blur-sm hover:bg-[hsl(243,23%,34%)] transition-all duration-300">
        <p className="text-sm text-gray-400 mb-3">
          Feels Like
        </p>

        <h3 className="text-3xl font-semibold text-white">
          {convertTemperature(feelsLike).toFixed(0)}°
        </h3>
      </div>

      {/* Humidity */}
      <div className="bg-[hsl(243,23%,30%)] border border-white/5 rounded-2xl p-5 backdrop-blur-sm hover:bg-[hsl(243,23%,34%)] transition-all duration-300">
        <p className="text-sm text-gray-400 mb-3">
          Humidity
        </p>

        <h3 className="text-3xl font-semibold text-white">
          {humidity}%
        </h3>
      </div>

      {/* Wind */}
      <div className="bg-[hsl(243,23%,30%)] border border-white/5 rounded-2xl p-5 backdrop-blur-sm hover:bg-[hsl(243,23%,34%)] transition-all duration-300">
        <p className="text-sm text-gray-400 mb-3">
          Wind
        </p>

        <h3 className="text-3xl font-semibold text-white">
          {convertWindSpeed(windSpeed).toFixed(0)}
          {" "}
          {windUnit}
        </h3>
      </div>

      {/* Precipitation */}
      <div className="bg-[hsl(243,23%,30%)] border border-white/5 rounded-2xl p-5 backdrop-blur-sm hover:bg-[hsl(243,23%,34%)] transition-all duration-300">
        <p className="text-sm text-gray-400 mb-3">
          Precipitation
        </p>

        <h3 className="text-3xl font-semibold text-white">
          {convertPrecipitation(precipitation).toFixed(0)}
          {" "}
          {precipitationUnit}
        </h3>
      </div>

    </div>
  );
}

export default WeatherStates;