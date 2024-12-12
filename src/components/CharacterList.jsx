function CharacterList({ characters }) {
  if (characters.length === 0) return <p>No characters found.</p>;

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
