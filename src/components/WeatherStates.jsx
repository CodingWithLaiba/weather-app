

function WeatherStates(data, convertWindSpeed,windUnit) {
    if(!data) return null;
    
  return (
    <div>
      <p>
        Wind: {convertWindSpeed(data.current_weather.windspeed).toFixed(1)} {windUnit}
      </p>
    </div>
  )
}

export default WeatherStates