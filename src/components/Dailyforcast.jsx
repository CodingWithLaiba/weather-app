function DailyForecast({ data }) {
  if (!data?.daily) return null;

  return (
    <div>
      {data.daily.time.map((day, i) => (
        <div key={i}>
          {day} - {data.daily.temperature_2m_max[i]}° /
          {data.daily.temperature_2m_min[i]}°
        </div>
      ))}
    </div>
  );
}
export default DailyForecast