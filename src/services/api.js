import axios from 'axios';

const MARVEL_API_URL  = 'https://gateway.marvel.com/v1/public/characters';

export const fetchMarvelCharacters = async (apiKey)=>{
    const response = await axios.get(MARVEL_API_URL, {params:{apikey: apiKey}});
    return response.data.data.results;
};
