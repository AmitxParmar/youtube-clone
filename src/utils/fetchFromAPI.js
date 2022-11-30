import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    params: {
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '10',
        order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': '35b2e6c0b6msh60ccd50b324b73cp110cfejsnfce41ca49b7b',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async url => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    .catch((err) => console.log(err) );
    
    return data;
};




/* const axios = require('axios');


const BASE_URL = "https://www.googleapis.com/youtube/v3/";

const options = {
    params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        key: process.env.REACT_APP_RAPID_API_KEY
    }
}

export async function fetchFromAPI(url) {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    .catch((err) => console.log(err) );
    
    return data;
}; */
