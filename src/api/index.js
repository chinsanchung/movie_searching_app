// PROBLEM: api 따로 분리해서 thunk 를 하려 했지만, 비동기 처리가 제대로 되질 않음. 원인을 모름
// => try catch 문에 return axios.get 만 치고, 함수를 부른 곳에서 Promise 를 사용하자, 또는 async/await
// 출처: https://tuhbm.github.io/2019/03/21/axios/
import axios from "axios";

export const getMovieList = async keywords => {
    try {
        return await axios.get(
            `https://www.omdbapi.com/?y=2019&apikey=64bee5dd&s=${keywords}`
        );
    } catch (error) {
        console.log(error);
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

// http://www.omdbapi.com/?apikey=64bee5dd&t=knives+out
// http://www.omdbapi.com/?apikey=64bee5dd&i=tt8946378
