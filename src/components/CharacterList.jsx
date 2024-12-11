import { useEffect, useState } from 'react';
import { fetchMarvelCharacters, } from '../services/api';

const CharacterList = ({apiKey}) => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const marvelCharacters = await fetchMarvelCharacters(apiKey);
      setCharacters([...marvelCharacters]);
    };
    fetchData();
  }, [apiKey]);

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="character-list">
        {filteredCharacters.map((character) => (
          <div key={character.id} className="character-card">
            <img
              src={character.thumbnail?.path + '.' + character.thumbnail?.extension || ''}
              alt={character.name}
            />
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
