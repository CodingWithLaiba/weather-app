
export default function NotFound({city}) {
  return (
    <div className="bg-[hsl(243,23%,30%)] border border-white/5 rounded-3xl min-h-[350px] flex flex-col items-center justify-center text-center px-6">

      {/* Title */}
      <h2 className="text-white text-3xl font-semibold">
        No Search results found for {city}!
      </h2>
      </div>
  )
}
