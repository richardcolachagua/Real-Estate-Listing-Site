import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'b3dd72f6dbmsh95bbf8a55ef2b53p190f0fjsn0dd538ebb8d7'
  },
});
    
return data;
}