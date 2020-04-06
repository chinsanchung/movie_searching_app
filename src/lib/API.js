import axios from "axios";
import { API_KEY } from "./constant";

const getRequetsedData = async (url) => {
    try {
        const response = await axios.get(url);
        // console.log("api ", response.data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
// All: Movie + TV Shows
export const searchAllData = async (query) => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&include_adult=false`;
    const response = await getRequetsedData(url);
    return response;
};

export const searchPersonDetail = async (id) => {
    const detail_url = ` https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`;
    const filmo_url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`;
    const image_url = ` https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`;
    const tagged_url = ` https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${API_KEY}&language=en-US&page=1`;

    const detail_response = await getRequetsedData(detail_url);
    const filmo_response = await getRequetsedData(filmo_url);
    const image_response = await getRequetsedData(image_url);
    const tagged_response = await getRequetsedData(tagged_url);

    return {
        detail: detail_response,
        filmography: filmo_response.cast,
        images: image_response.profiles,
        tagged_images: tagged_response.results,
    };
};

// axios.all: https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
// url 출처: https://www.themoviedb.org/talk/59fcec1fc3a368689300071d?language=ko-KR
export const searchMoviesFromGenre = async (id) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7&with_genres=${id}`;
    const response = await getRequetsedData(url);
    return response;
};

export const searchMovieRecoommands = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&page=1`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const searchMovieDetail = async (id) => {
    const detail_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const credit_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
    // const recomm_url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&page=1`;
    const image_url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=en`;
    const video_url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
    const detail_response = await getRequetsedData(detail_url);
    const credit_response = await getRequetsedData(credit_url);
    const image_response = await getRequetsedData(image_url);
    const video_response = await getRequetsedData(video_url);

    return {
        detail: detail_response,
        images: image_response,
        credits: credit_response.cast,
        videos: video_response.results,
    };
    /*
    const detail_response = axios.get(detail_url);
    const credit_response = axios.get(credit_url);
    const image_response = axios.get(image_url);
    const video_response = axios.get(video_url);

    axios
        .all([detail_response, credit_response, image_response, video_response])
        .then(
            axios.spread((...responses) => {
                return {
                    detail: responses[0],
                    credits: responses[1].cast,
                    images: responses[2],
                    videos: responses[3].results,
                };
            })
        )
        .catch((error) => console.log(error));*/
};
