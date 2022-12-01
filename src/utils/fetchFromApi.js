import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": "7d8c31d6bamshed8f1d0064e70b2p1c7380jsn9f2a70c1600d",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${baseUrl}/${url}`, options);
    return data;
};
