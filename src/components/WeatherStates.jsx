function WeatherStates({
  data,
  convertWindSpeed,
  convertPrecipitation,
  windUnit,
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
  

  return (
    <div className="rounded-2xl bg-[hsl(243,23%,30%)] p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">
        Weather States
      </h2>

      <div className="space-y-2">
        <p>
          Wind Speed:
          {" "}
          {convertWindSpeed(windSpeed).toFixed(1)}
          {" "}
          {windUnit}
        </p>

        <p>
          Precipitation:
          {" "}
          {convertPrecipitation(10).toFixed(1)}
          {" "}
          {precipitationUnit}
        </p>
      </div>
    </div>
  );
}

export default WeatherStates;