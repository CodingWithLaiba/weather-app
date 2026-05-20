import weatherBg from "../assets/images/bg-today-large.svg";
import sunIcon from "../assets/images/icon-sunny.webp";

function WeatherCard({
  data,
  location,
  loading,
  convertTemperature,
  temperatureUnit,
}) {
  if (loading) {
    return (
      <div className="rounded-3xl p-8 md:p-10 bg-[#1E213A] text-white">
        Loading...
      </div>
    );
  }

  if (!data || !data.current) return null;

  const temp = data.current.temperature_2m;

  // Current Date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-8 md:p-10 min-h-80 flex flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(${weatherBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D5FEF]/20 via-[#4B4DF0]/10 to-[#2D2FE0]/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top */}
        <div className="flex justify-between items-start">
          {/* Location */}
          <div>
            <h2 className="text-white text-3xl font-bold">
              {location?.name}, {location?.country}
            </h2>

            <p className="text-gray-200 text-sm  mt-2 ">{currentDate}</p>
          </div>

          {/* Weather Icon */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <img src={sunIcon} alt="Weather Icon" className="w-16 h-16" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto flex justify-end">
          <h1 className="text-white text-7xl md:text-8xl tracking-tight font-bold leading-none">
            {convertTemperature(temp).toFixed(0)}°
            <span className="text-4xl align-top">
              {temperatureUnit.toUpperCase()}
            </span>
          </h1>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-5 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-10 left-20 w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute top-16 right-28 w-2 h-2 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-8 right-16 w-2 h-2 bg-purple-300 rounded-full opacity-40"></div>
    </div>
  );
}

export default WeatherCard;
