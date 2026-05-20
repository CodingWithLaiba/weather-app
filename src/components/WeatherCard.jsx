import weatherBg from "../assets/images/bg-today-large.svg";
import sunIcon from "../assets/images/icon-sunny.webp";

function WeatherCard({
  data,
  location,
  convertTemperature,
}) 
{


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
      className="shadow-[0_0_40px_rgba(91,91,247,0.35)] backdrop-blur-sm relative overflow-hidden rounded-3xl p-8 md:p-10 min-h-80 bg-cover bg-center"
      style={{
        backgroundImage: `url(${weatherBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B5BF7]/40 to-[#2E2ECF]/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-start">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
            {location?.name}, {location?.country}
          </h2>

          <p className="text-gray-200 text-sm mt-3">{currentDate}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Weather Icon */}
          <img
            src={sunIcon}
            alt="Weather Icon"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />

          {/* Temperature */}
          <h1 className="text-white text-7xl md:text-8xl font-bold tracking-tight leading-none">
            {convertTemperature(temp).toFixed(0)}°
            {/* <span className="text-4xl md:text-5xl relative -top-4 ml-1"> */}
              {/* {temperatureUnit.toUpperCase()} */}
            {/* </span> */}
          </h1>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-5 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 left-20 w-3 h-3 bg-orange-400 rounded-full opacity-40"></div>
      <div className="absolute top-16 right-28 w-2 h-2 bg-yellow-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-8 right-16 w-2 h-2 bg-purple-300 rounded-full opacity-40"></div>
    </div>
  );
}

export default WeatherCard;
