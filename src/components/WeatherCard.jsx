function WeatherCard({
  data,
  location,
  loading,
  convertTemperature,
  temperatureUnit,
}) {
  if (loading) {
    return (
      <div className="bg-[#1E213A] rounded-2xl p-6">
        Loading...
      </div>
    );
  }

  if (!data) return null;

  const temp = data.current.temperature_2m;

  return (
    <div className="bg-[#1E213A] rounded-2xl p-6 flex flex-col gap-6">
      
      {/* Location */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            {location?.name}
          </h2>

          <p className="text-gray-400 text-sm">
            {location?.country}
          </p>
        </div>

        <p className="text-sm text-gray-400">
          Today
        </p>
      </div>

      {/* Temperature */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-7xl font-bold">
            {convertTemperature(temp).toFixed(1)}°
          </h1>

          <p className="text-gray-400 mt-2">
            {temperatureUnit.toUpperCase()}
          </p>
        </div>

        {/* Weather Icon */}
        <div className="text-6xl">
          ☀️
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;