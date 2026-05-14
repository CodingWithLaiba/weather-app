function Hourlyforcast({ data }) {
  if (!data?.hourly) return null;

  return (
    <div>
      {data.hourly.time.slice(0, 6).map((time, i) => (
        <div key={i}>
          {time} - {data.hourly.temperature_2m[i]}°
        </div>
      ))}
    </div>
  );
}

export default Hourlyforcast
