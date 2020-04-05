import stateUtil from "../lib/state_util";
import {
    searchAllData,
    searchMovieDetail,
    searchMoviesFromGenre,
} from "../lib/API";

const GET_GENRE_LIST = "GET_GENRE_LIST";
const GET_GENRE_SUCCESS = "GET_GENRE_SUCCESS";
const GET_LIST = "GET_LIST";
const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
const GET_LIST_ERROR = "GET_LIST_ERROR";
const GET_DETAIL = "GET_DETAIL";
const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
const GET_DETAIL_ERROR = "GET_DETAIL_ERROR";

export const getGenreListThunk = (id) => async (dispatch) => {
    try {
        const response = await searchMoviesFromGenre(id);
        dispatch({ type: GET_GENRE_LIST, id: id, payload: response.results });
        if (response.results.length > 0) {
            dispatch({
                type: GET_GENRE_SUCCESS,
                id: id,
                payload: response.results,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
export const getMovieListThunk = (query) => async (dispatch) => {
    const response = await searchAllData(query);
    dispatch({ type: GET_LIST, payload: response.results });
};
export const getMovieDetailThunk = (id) => async (dispatch) => {
    try {
        const response = await searchMovieDetail(id);
        dispatch({ type: GET_DETAIL, id });
        if (!response.status_code) {
            // if (response !== null) {
            dispatch({ type: GET_DETAIL_SUCCESS, id: id, payload: response });
        } else {
            dispatch({ type: GET_DETAIL_ERROR });
        }
    } catch (error) {
        console.log(error);
    }
};

const initialState = {
    genre: stateUtil.initial(),
    list: stateUtil.initial(),
    content: stateUtil.initial(),
};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRE_LIST:
            return {
                ...state,
                gerne: {
                    ...state.genre,
                    [action.id]: stateUtil.loading(
                        state.genre[action.id] && state.genre[action.id].data
                    ),
                },
            };
        case GET_GENRE_SUCCESS:
            return {
                ...state,
                genre: {
                    ...state.genre,
                    [action.id]: stateUtil.success(action.payload),
                },
            };
        case GET_LIST:
            return {
                ...state,
                list: stateUtil.loading(action.payload),
            };
        case GET_LIST_SUCCESS:
            return {
                ...state,
                list: stateUtil.success(action.payload),
            };
        case GET_DETAIL:
            return {
                ...state,
                content: {
                    ...state.content,
                    [action.id]: stateUtil.loading(
                        state.content[action.id] &&
                            state.content[action.id].data
                    ),
                },
            };
        case GET_DETAIL_SUCCESS:
            return {
                ...state,
                content: {
                    [action.id]: stateUtil.success(action.payload),
                },
            };
        default:
            return state;
    }
};

export default movieReducer;
