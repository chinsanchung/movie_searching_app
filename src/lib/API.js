import axios from "axios";
import { API_KEY } from "./constant";

const getData = async (url, source) => {
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
// All: Movie + TV Shows
export const searchAllData = async query => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&include_adult=false`;
    let source = axios.CancelToken.source();
    getData(url, source);
};

// 출처: https://www.themoviedb.org/talk/59fcec1fc3a368689300071d?language=ko-KR
// https://api.themoviedb.org/3/discover/movie?api_key=###&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28
export const searchDataFromGenre = async genre_id => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7&with_genres=${genre_id}`;
    let source = axios.CancelToken.source();
    getData(url, source);
};

export const searchPersonFilmgraphy = async id => {
    const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`;
    let source = axios.cancelToken.source();
    getData(url, source);
};

export const searchPersonImage = async id => {
    const url = ` https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`;
    let source = axios.cancelToken.source();
    getData(url, source);
};
