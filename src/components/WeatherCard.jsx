import weatherBgLarge from "../assets/images/bg-today-large.svg";
import weatherBgSmall from "../assets/images/bg-today-small.svg";
import sunIcon from "../assets/images/icon-sunny.webp";

function WeatherCard({
  data,
  location,
  convertTemperature,
}) {
  // No Data
  if (!data || !data.current) return null;

  const temp = data.current.temperature_2m;

  // Current Date
  const currentDate = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[28px]
        w-full
        min-h-[280px]
        sm:min-h-[320px]
        lg:min-h-[340px]
        shadow-[0_10px_40px_rgba(76,81,255,0.45)]
      "
    >

      {/* MOBILE BACKGROUND */}
      <img
        src={weatherBgSmall}
        alt="Weather Background"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* DESKTOP BACKGROUND */}
      <img
        src={weatherBgLarge}
        alt="Weather Background"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5A5AF6]/50 via-[#4545E6]/60 to-[#2929C7]/80" />

      {/* GLOW */}
      <div className="absolute -top-20 -right-16 w-44 h-44 bg-violet-400/20 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          h-full
          px-6
          py-7
          sm:px-8
          sm:py-8
          lg:px-10
        "
      >

        {/* LEFT SIDE */}
        <div className="md:max-w-none">

  {/* LOCATION */}
  <h2
    className="
      text-white
      font-bold
      leading-tight
      tracking-tight
      text-[28px]
      sm:text-[34px]
      lg:text-[42px]
      whitespace-nowrap
    "
  >
    {location?.name}, {location?.country}
  </h2>

  {/* DATE */}
  <p className="text-white/75 text-sm sm:text-base mt-3">
    {currentDate}
  </p>

</div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            justify-center
            md:justify-end
            mt-9
            md:mt-0
            pt-2
            md:pt-0
          "
        >

          {/* WEATHER ICON */}
          <img
            src={sunIcon}
            alt="Weather Icon"
            className="
              w-14 h-14
              sm:w-16 sm:h-16
              lg:w-24 lg:h-24
              object-contain
              mr-2
              sm:mr-4
              mb-3
            "
          />

          {/* TEMPERATURE */}
          <h1
            className="
              text-white
              font-bold
              leading-none
              tracking-[-3px]
              text-[72px]
              sm:text-[88px]
              lg:text-[110px]
            "
          >
            {convertTemperature(temp).toFixed(0)}°
          </h1>

        </div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-5 right-5 w-3 h-3 bg-orange-400 rounded-full opacity-90"></div>

      <div className="absolute left-5 bottom-14 w-5 h-5 bg-orange-300 rounded-full blur-[1px] opacity-90"></div>

      <div className="absolute bottom-0 left-0 w-40 h-20 bg-white/5 rounded-tr-full"></div>

      <div className="absolute bottom-0 right-0 w-32 h-16 bg-white/5 rounded-tl-full"></div>

    </div>
  );
}

export default WeatherCard;