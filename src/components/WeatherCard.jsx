function WeatherCard({ data, convertTemperature, temperatureUnit }) {
  if (!data) return <p>Loading...</p>;

  const temp = data.current_weather.temperature;

  return (
    <div>
      <h1>
        {convertTemperature(temp).toFixed(1)}°{temperatureUnit.toUpperCase()}
      </h1>
    </div>
  );
}
export default WeatherCard;
