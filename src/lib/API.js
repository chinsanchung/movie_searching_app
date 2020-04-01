import axios from "axios";

const API_KEY = "abf55e994773bfc10c3de30ec5debec6";

export const getMovieList = async query => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`;
    let source = axios.CancelToken.source();
    try {
        const response = await axios.get(url, {
            cancelToken: source.token
        });
        return response.data;
    } catch (err) {
        console.log(err);
        source.cancel();
    }
};

export const getTVList = async query => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&include_adult=false`;
    let source = axios.CancelToken.source();
    try {
        const response = await axios.get(url, {
            cancelToken: source.token
        });
        return response.data;
    } catch (err) {
        console.log(err);
        source.cancel();
    }
};
