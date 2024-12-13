import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import { fetchMarvelCharacters } from "./services/api.js"; 

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1);   

  const ITEMS_PER_PAGE = 10; 

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetchMarvelCharacters(searchTerm, ITEMS_PER_PAGE, currentPage);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE));
    };

    fetchCharacters();
  }, [searchTerm, currentPage]);

  return (
    <div>
      <div>
      <h1 style={{textAlign: "center", color: "red", fontSize:"50"}}>Marvel Characters</h1>
      </div>
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
