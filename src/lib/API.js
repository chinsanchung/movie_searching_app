import axios from "axios";
import { API_KEY } from "./constant";

const getRequetsedData = async url => {
    try {
        const response = await axios.get(url);
        // console.log("api ", response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
// All: Movie + TV Shows
export const searchAllData = async query => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&include_adult=false`;
    const response = await getRequetsedData(url);
    return response;
};

// 출처: https://www.themoviedb.org/talk/59fcec1fc3a368689300071d?language=ko-KR
// https://api.themoviedb.org/3/discover/movie?api_key=###&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28
export const searchMoviesFromGenre = async genre_id => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7&with_genres=${genre_id}`;
    return url;
};

export const searchPersonDetail = async id => {
    const filmo_url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`;
    const image_url = ` https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`;
    return { filmo_url, image_url };
};

export const searchMovieDetail = async id => {
    const detail_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    // TODO: 메인 크레딧만 나오게 12명정도만 출력하도록
    const credit_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
    const recomm_url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&page=1`;
    // images: backdrops + posters
    const image_url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=en`;
    const video_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

    const detail_response = await getRequetsedData(detail_url);
    const credit_response = await getRequetsedData(credit_url);
    const recomm_response = await getRequetsedData(recomm_url);
    const image_response = await getRequetsedData(image_url);
    const video_response = await getRequetsedData(video_url);

    return {
        detail: detail_response,
        images: image_response,
        credits: credit_response.cast,
        recommendations: recomm_response.results,
        videos: video_response.results
    };
};
