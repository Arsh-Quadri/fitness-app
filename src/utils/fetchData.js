import axios from 'axios';

export const exercisesOptions = {
    method: 'GET',
    // url: process.env.RAPID_API_KEY,
    headers: {
        'X-RapidAPI-Key': 'a6f5651026msh6591c3b9c4064a9p1edcf1jsne4593f6b4b81',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    headers: {
        'X-RapidAPI-Key': 'a6f5651026msh6591c3b9c4064a9p1edcf1jsne4593f6b4b81',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const responce = await fetch(url, options);
    const data = await responce.json();
    console.log(data)

    return data;

}

export const fetchDataById = async (id) => {
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
            'X-RapidAPI-Key': 'a6f5651026msh6591c3b9c4064a9p1edcf1jsne4593f6b4b81',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log('Response:', response);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
(async () => {
    try {
        const response = await axios.request(youtubeOptions);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
})();