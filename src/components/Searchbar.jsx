import { useState } from "react"

function Searchbar({setCity}) {
  const [input, setInput] = useState("");
  const handleSearch = () =>{
    if(!input.trim()) return;
    setCity(input); 
  }
   return (
    <div className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city..."
        className="px-4 py-2 rounded-lg w-full"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}

export default Searchbar;