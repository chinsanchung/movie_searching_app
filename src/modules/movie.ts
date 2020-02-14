import { getMovieList, getMovieData } from "../api";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import movieUtils from "../lib/movie_util";

const GET_LIST = "GET_LIST" as const;
const GET_LIST_SUCCESS = "GET_LIST_SUCCESS" as const;
const GET_LIST_ERROR = "GET_LIST_ERROR" as const;
const GET_DATA = "GET_DATA" as const;
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS" as const;

export const getMovieListThunk = (keywords: string) => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
    try {
        const response = await getMovieList(keywords);
        dispatch({ type: GET_LIST, payload: response.Search });
        if (response.Response === "True") {
            dispatch({ type: GET_LIST_SUCCESS, payload: response.Search });
        } else {
            dispatch({ type: GET_LIST_ERROR });
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_LIST_ERROR });
    }
};

export const getMovieDataThunk = (imdbID: string) => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
    try {
        const response = await getMovieData(imdbID);
        dispatch({ type: GET_DATA, id: imdbID });
        if (response.Response === "True") {
            dispatch({
                type: GET_DATA_SUCCESS,
                id: imdbID,
                payload: response
            });
        } else {
            console.log("no result");
        }
    } catch (error) {
        console.log(error);
    }
};
export type listType<T> = {
    data: T;
    loading: boolean;
    error: boolean;
};
export type MovieType = {
    Title: string;
    Year: string;
    Rated: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
};
type MovieState = {
    list: listType<any>;
    movie: any;
};

const initialState: MovieState = {
    list: movieUtils.initial(),
    movie: movieUtils.initial()
};

type Action =
    | { type: "GET_LIST"; payload: any }
    | { type: "GET_LIST_SUCCESS"; payload: any }
    | { type: "GET_LIST_ERROR"; payload: any }
    | { type: "GET_DATA"; id: string }
    | { type: "GET_DATA_SUCCESS"; id: string; payload: MovieType };

const movieReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: movieUtils.loading(action.payload)
            };
        case GET_LIST_SUCCESS:
            return {
                ...state,
                list: movieUtils.success(action.payload)
            };
        case GET_LIST_ERROR:
            return {
                ...state,
                list: movieUtils.error()
            };
        case GET_DATA:
            return {
                ...state,
                movie: {
                    ...state.movie,
                    [action.id]: movieUtils.loading(
                        state.movie[action.id] && state.movie[action.id].data
                    )
                }
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                movie: {
                    [action.id]: movieUtils.success(action.payload)
                }
            };
        default:
            return state;
    }
};

export default movieReducer;
