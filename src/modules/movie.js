import stateUtil from "../lib/state_util";
import { searchAllData, searchMovieDetail } from "../lib/API";

const GET_LIST = "GET_LIST";
// const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
const GET_DETAIL = "GET_DETAIL";
// const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";

export const getMovieListThunk = query => async dispatch => {
    const response = await searchAllData(query);
    dispatch({ type: GET_LIST, payload: response.results });
};
export const getMovieDetailThunk = id => async dispatch => {
    const response = await searchMovieDetail(id);
    dispatch({ type: GET_DETAIL, id: id, payload: response });
};

const initialState = {
    list: stateUtil.initial(),
    content: stateUtil.initial()
};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                list: stateUtil.success(action.payload)
            };
        case GET_DETAIL:
            return {
                ...state,
                content: {
                    ...state.content,
                    [action.id]: stateUtil.success(action.payload)
                }
            };
        default:
            return state;
    }
};

export default movieReducer;
