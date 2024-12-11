import { FavoritesProvider } from './contexts/Favorites';
import CharacterList from './components/CharacterList';

const App = () => {
  const MARVEL_API_KEY = 'your-marvel-api-key';

  return (
    <FavoritesProvider>
      <div className="app">
        <h1>Marvel & Star Wars Characters</h1>
        <CharacterList apiKey={MARVEL_API_KEY} />
      </div>
    </FavoritesProvider>
  );
};

export default App;
