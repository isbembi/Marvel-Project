import axios from 'axios';
import md5 from 'md5';

const publicKey = import.meta.env.VITE_MARVEL_API_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_API_PRIVATE_KEY;
const baseUrl = 'https://gateway.marvel.com/v1/public/';


const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);  
console.log(hash);

export const fetchMarvelCharacters = async (searchTerm = '') => {
  try {
    const response = await axios.get(`${baseUrl}characters`, {
      params: {
        apikey: publicKey,
        ts,
        hash,
        nameStartsWith: searchTerm,  
        limit: 10,
      },
    });
    return response.data.data.results;  // Marvel's API returns an object with this structure
  } catch (error) {
    console.error('Error fetching Marvel characters:', error);
  }
};
