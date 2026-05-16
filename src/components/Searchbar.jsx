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
    <div className="space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white">
        How's the sky looking today?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3"
      >
        <input
          type="text"
          placeholder="Search for a place..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-xl bg-[hsl(243,23%,30%)] px-4 py-3 text-white outline-none placeholder:text-gray-400"
        />

        <button
          type="submit"
          className="rounded-xl bg-[hsl(233,67%,56%)] px-6 py-3 text-white font-medium hover:bg-[hsl(233,67%,46%)] transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar;