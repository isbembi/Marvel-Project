import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import './App.css';
import { fetchMarvelCharacters } from "./services/api.js"; // Assuming Marvel API is configured here

function App() {
  const [characters, setCharacters] = useState([]); // Stores the list of characters
  const [searchTerm, setSearchTerm] = useState(""); // Stores the search input
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const [totalPages, setTotalPages] = useState(1);   // Tracks total pages (if pagination)

  const ITEMS_PER_PAGE = 10; // Number of characters per page

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetchMarvelCharacters(searchTerm, ITEMS_PER_PAGE, currentPage);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE)); // Calculate total pages
    };

    fetchCharacters();
  }, [searchTerm, currentPage]);

  return (
    <div>
      <h1>Marvel Characters</h1>
      <SearchBar onSearch={setSearchTerm} />
      <CharacterList characters={characters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
