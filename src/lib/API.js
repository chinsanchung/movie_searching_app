import axios from "axios";
import { API_KEY, GENRE_LIST } from "./constant";

// All: Movie + TV Shows
export const searchAllData = async query => {
    const url = ` https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&include_adult=false`;
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
// TODO: genre 로 출력하기
export const getDataFromGenre = async query => {
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
