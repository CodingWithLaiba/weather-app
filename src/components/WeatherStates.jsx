function WeatherStates({
  data,
  convertWindSpeed,
  convertTemperature,
  convertHumidity,
  convertPrecipitation,
  windUnit,
  temp,
  humidityUnit,
  precipitationUnit,
}) {
  // No data yet
  if (!data || !data.current) {
    return (
      <div className="rounded-2xl bg-[hsl(243,23%,30%)] p-6 text-white">
        Loading weather states...
      </div>
    );
  }

  // Safe values
  const windSpeed = data.current.wind_speed_10m;
  const feelsLike = data.current.apparent_temperature;
  const humidity = data.current.relative_humidity_2m;
  const precipitation = data.current.precipitation;

  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="border border-white/5 bg-[hsl(243,23%,30%)] rounded-2xl p-5">
          <p className=" text-3xl font-semibold text-white text-sm text-gray-400">Feels Like</p>
          <h3 className="text-lg font-semibold">
            {convertTemperature(temp).toFixed(0)}°
          </h3>
        </div>
        <div
          className="border border-white/5 bg-[hsl(243,23%,30%)] rounded-2xl p-5">
          <p className=" text-3xl font-semibold text-white text-sm text-gray-400">Humidity</p>
          <h3 className="text-lg font-semibold">
            {convertHumidity(humidity).toFixed(1)} {humidityUnit}
          </h3>
        </div>
        <div
          className="border border-white/5 bg-[hsl(243,23%,30%)] rounded-2xl p-5">
          <p className=" text-3xl font-semibold text-white text-sm text-gray-400">Wind</p>
          <h3 className="text-lg font-semibold">
            {convertWindSpeed(windSpeed).toFixed(1)} {windUnit}
          </h3>
        </div>
        <div
          className="border border-white/5 bg-[hsl(243,23%,30%)] rounded-2xl p-5">
          <p className=" text-3xl font-semibold text-white text-sm text-gray-400">Preciptation</p>
          <h3 className="text-lg font-semibold">
            {convertPrecipitation(precipitation).toFixed(1)} {precipitationUnit}
          </h3>
        </div>
          </div>
    
      
  );
}

export default WeatherStates;
