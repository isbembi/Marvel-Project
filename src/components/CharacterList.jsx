function CharacterList({ characters }) {
  if (!characters || characters.length === 0) return <p style={{ textAlign: "center" }}>No characters found.</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {characters.map((character) => (
        <div
          key={character.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            margin: "10px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.2rem", color:"white" }}>{character.name}</h2>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <p style={{color: "white"}}>
            {character.description
              ? character.description
              : "No description available."}
          </p>
          {character.comics.items.length > 0 && (
            <div>
              <h4 style={{color:"white"}}>Comics:</h4>
              <ul style={{ textAlign: "left" , color: "white"}}>
                {character.comics.items.slice(0, 3).map((comic, index) => (
                  <li key={index}>{comic.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
