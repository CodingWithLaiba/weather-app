import { useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";

function Searchbar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setCity(input);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
        How&apos;s the sky looking today?
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] flex flex-col md:flex-row gap-3"
      >

        {/* Input */}
        <div className="relative flex-1">
          <img
            src={SearchIcon}
            alt="Search Icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          />

          <input
            type="text"
            placeholder="Search for a place..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-12 rounded-2xl bg-[hsl(243,23%,30%)] border border-white/5 pl-12 pr-4 text-white outline-none placeholder:text-gray-400 focus:border-[#5B5BF7] transition-all duration-300"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="h-12 px-6 rounded-2xl bg-[hsl(233,67%,56%)] text-white font-medium hover:bg-[hsl(233,67%,50%)] transition-all duration-300 cursor-pointer"
        >
          Search
        </button>

      </form>
    </div>
  );
}

export default Searchbar;