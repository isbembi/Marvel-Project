import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input.trim()); 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };


  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search characters by name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "10px 20px", backgroundColor:"red", color:"white" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
