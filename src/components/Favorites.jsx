import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext();
export const FavoritesProvider = ({children}) =>{
    const [favorites, setFavorites] = useState([]);


    const addFavorites = (character) =>{
        if (!favorites.some((fav)=> fav.id=== character.id)){
            setFavorites([...favorites, character]);
        }
    };

    const removeFavorite= (id) =>{
        setFavorites(favorites.filter((fav)=>fav.id !==id));

    };

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
};