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
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [sortOrder, setSortOrder] = useState("nameAsc"); // Сортировка для всех персонажей
  const [showFavorites, setShowFavorites] = useState(false); // Для показа только избранных

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const fetchCharactersData = async () => {
      const data = await fetchMarvelCharacters(searchTerm, ITEMS_PER_PAGE, currentPage);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE));
    };

    fetchCharactersData();
  }, [searchTerm, currentPage]);

  // Функция для сортировки всех персонажей
  const sortCharacters = (characters, sortOrder) => {
    switch (sortOrder) {
      case "nameAsc":
        return characters.sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return characters.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return characters;
    }
  };

  // Функция для сортировки избранных персонажей
  const sortFavorites = (favorites, sortOrder) => {
    switch (sortOrder) {
      case "nameAsc":
        return favorites.sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return favorites.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return favorites;
    }
  };

  const toggleFavorite = (character) => {
    const newFavorites = [...favorites];
    const index = newFavorites.findIndex((fav) => fav.id === character.id);
    if (index !== -1) {
      newFavorites.splice(index, 1); 
    } else {
      newFavorites.push(character); 
    }
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const sortedFavorites = sortFavorites(favorites, sortOrder);
  const sortedCharacters = sortCharacters(characters, sortOrder);

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
    setCurrentPage(1); 
  };

  return (
    <div>
        <h1 style={{ textAlign: "center", color: "red", fontSize: "50" }}>Marvel Characters</h1>
        <SearchBar onSearch={setSearchTerm} />

        <div style={{ textAlign: "center"}}>
          <button onClick={handleShowFavorites} style={{ marginRight: "10px",backgroundColor:"#c40000",color:"white", fontSize: "18px", padding: "12px 25px", borderRadius: "8px",cursor: "pointer", position: "relative",overflow: "hidden",
    boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)"}}>
            {showFavorites ? "Show All Characters" : "Show Favorites"}
          </button>
        </div>
      {/* Сортировка */}
      <div style={{ textAlign: "center" }}>
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="nameAsc">Sort by Name (Asc)</option>
          <option value="nameDesc">Sort by Name (Desc)</option>
        </select>
      </div>

      {/* Если отображаем только избранных */}
      {showFavorites ? (
        <>
          <h2 style={{ textAlign: "center" }}>Favorites</h2>
          <CharacterList
            characters={sortedFavorites}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>All Characters</h2>
          <CharacterList
            characters={sortedCharacters}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </>
      )}

      {/* Пагинация (только для всех персонажей) */}
      {!showFavorites && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;
