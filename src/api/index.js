import axios from "axios";

export const getMovieList = async keywords => {
    const URL = `https://www.omdbapi.com/?y=2019&apikey=64bee5dd&s=${keywords}`;
    let source = axios.CancelToken.source();
    try {
        const response = await axios.get(URL, { cancelToken: source.token });
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

export const getMovieData = async imdbID => {
    try {
        return await axios.get(
            `http://www.omdbapi.com/?apikey=64bee5dd&i=${imdbID}`
        );
    } catch (error) {
        console.log(error);
    }
};
