function LoadingScreen() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-pulse">

      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6 lg:col-span-8">

        {/* Weather Card Skeleton */}
        <div className="bg-[hsl(243,23%,30%)] rounded-3xl h-[280px] flex items-center justify-center">

          <div className="flex flex-col items-center gap-4">

            {/* Dots */}
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-white/70"></span>
              <span className="w-2 h-2 rounded-full bg-white/70"></span>
              <span className="w-2 h-2 rounded-full bg-white/70"></span>
            </div>

            <p className="text-white/70 text-sm">
              Loading...
            </p>

          </div>
        </div>

        {/* Weather States */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-[hsl(243,23%,30%)] rounded-2xl h-[90px]"
            />
          ))}

        </div>

        {/* Daily Forecast */}
        <div>

          <div className="h-4 w-28 bg-[hsl(243,23%,30%)] rounded mb-4"></div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">

            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="bg-[hsl(243,23%,30%)] rounded-2xl h-[120px]"
              />
            ))}

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-4">

        <div className="bg-[hsl(243,23%,30%)] rounded-3xl p-5 h-full">

          {/* Title */}
          <div className="flex items-center justify-between mb-5">

            <div className="h-4 w-28 rounded bg-white/10"></div>

            <div className="h-7 w-10 rounded bg-white/10"></div>

          </div>

          {/* Hourly Items */}
          <div className="space-y-3">

            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="bg-white/5 rounded-xl h-[52px]"
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;