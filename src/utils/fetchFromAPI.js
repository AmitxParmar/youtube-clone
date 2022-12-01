import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        regionCode: 'US',
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async url => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

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
