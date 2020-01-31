import { getMovieList, getMovieData } from "../api";
import reducerUtils from "../lib/movie_util";

const GET_LIST = "GET_LIST";
const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
const GET_LIST_ERROR = "GET_LIST_ERROR";
const GET_DATA = "GET_DATA";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const getMovieListThunk = keywords => async dispatch => {
    await getMovieList(keywords)
        .then(response => {
            dispatch({
                type: GET_LIST,
                payload: response.data.Search
            });
            if (response.data.Response === "True") {
                dispatch({
                    type: GET_LIST_SUCCESS,
                    payload: response.data.Search
                });
            } else {
                console.log("no result");
                dispatch({ type: GET_LIST_ERROR });
            }
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: GET_LIST_ERROR });
        });
};

export const getMovieDataThunk = imdbID => async dispatch => {
    await getMovieData(imdbID).then(response => {
        dispatch({ type: GET_DATA, id: imdbID });
        if (response.data.Response === "True") {
            dispatch({
                type: GET_DATA_SUCCESS,
                id: imdbID,
                payload: response.data
            });
        } else {
            console.log("no result");
        }
    });
};
const initialState = {
    list: { data: null, loading: null, error: false },
    movie: { data: null, loading: null, error: false }
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: reducerUtils.loading(action.payload)
            };
        case GET_LIST_SUCCESS:
            return {
                ...state,
                list: reducerUtils.success(action.payload)
            };
        case GET_LIST_ERROR:
            return {
                ...state,
                list: reducerUtils.error(action.payload)
            };
        case GET_DATA:
            return {
                ...state,
                movie: {
                    ...state.movie,
                    [action.id]: reducerUtils.loading(
                        state.movie[action.id] && state.movie[action.id].data
                    )
                }
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                movie: {
                    [action.id]: reducerUtils.success(action.payload)
                }
            };
        default:
            return state;
    }
};

export default movieReducer;
