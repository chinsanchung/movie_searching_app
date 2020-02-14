import axios from "axios";

export const WATCH_LIST = "http://localhost:4000/watchlist";

export const getMovieList = async (keywords: String) => {
    const LIST_URL = `https://www.omdbapi.com/?apikey=64bee5dd&s=${keywords}`;
    let source = axios.CancelToken.source();
    try {
        const response = await axios.get(LIST_URL, {
            cancelToken: source.token
        });
        if (response.data.Response === "True") {
            return response.data;
        } else {
            source.cancel();
            return response.data.Response;
        }
    } catch (error) {
        console.log(error);
        source.cancel();
    }
};

export const getMovieData = async (imdbID: String) => {
    const URL = `http://www.omdbapi.com/?apikey=64bee5dd&i=${imdbID}`;
    try {
        const response = await axios.get(URL);
        if (response.data.Response === "True") {
            return response.data;
        } else {
            return response.data.Response;
        }
    } catch (error) {
        console.log(error);
    }
};
