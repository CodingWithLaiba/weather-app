import { useState } from "react";

function Searchbar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setCity(input);
    setInput("");
  };

  return (
    <div className="space-y-4 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
        How's the sky looking today?
      </h1>
      <form 
        onSubmit={handleSubmit}
        className="flex items-center gap-3 w-135"
      >
        <input
          type="text"
          placeholder="Search for a place..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-11 rounded-xl bg-[hsl(243,23%,30%)] px-4 py-3 text-white outline-none placeholder:text-gray-400"
        />

        <button
          type="submit"
          className="rounded-xl h-11 bg-[hsl(233,67%,56%)] px-6 py-3 text-white font-medium hover:bg-[hsl(233,67%,46%)] transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;