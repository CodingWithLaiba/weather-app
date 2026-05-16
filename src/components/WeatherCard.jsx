import sunnyIcon from "../assets/images/icon-sunny.webp";

function WeatherCard({ data, convertTemperature, temperatureUnit, loading }) {
  // Loading state
  if (loading) {
    return (
      <div className="rounded-2xl bg-[hsl(243,23%,30%)] p-6 text-white">
        Loading weather...
      </div>
    );
  }

  // No data state
  if (!data || !data.current_weather) {
    return (
      <div className="rounded-2xl bg-[hsl(243,23%,30%)] p-6 text-white">
        No weather data found
      </div>
    );
  }

  // Current temperature
  const temp = data.current_weather.temperature;
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-[hsl(233,67%,56%)] to-[hsl(248,70%,36%)] p-8 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-2">Berlin, Germany</h2>
        <p className="text-lg opacity-90 mb-6">{formatDate(new Date().toISOString())}</p>
        
        <div className="flex items-center gap-4">
          <img src={sunnyIcon} alt="Sunny" className="w-16 h-16" />
          <span className="text-7xl font-bold">
            {Math.round(convertTemperature(temp))}°{temperatureUnit.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
