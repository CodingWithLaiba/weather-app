import { useState } from "react"

function Searchbar({setCity}) {
  const [input, setInput] = useState("");
  const handleSerach = () =>{
    if(!input.trim()) return;
    setCity(input); 
  }
  return (
    <div>searchbar</div>
  )
}

export default Searchbar