import stateUtil from "../lib/state_util";
import { searchPersonDetail } from "../lib/API";

const GET_PERSON = "GET_PERSON";
const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
const GET_PERSON_ERROR = "GET_PERSON_ERROR";

export const getPersonDetailThunk = (id) => async (dispatch) => {
    try {
        const response = await searchPersonDetail(id);
        dispatch({ type: GET_PERSON, id });
        if (!response.status_code) {
            dispatch({ type: GET_PERSON_SUCCESS, id: id, payload: response });
        }
    } catch (error) {
        dispatch({ type: GET_PERSON_ERROR });
    }
};

const initialState = {};

const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PERSON:
            return {
                ...state,
                [action.id]: stateUtil.loading(
                    state[action.id] && state[action.id].data
                ),
            };
        case GET_PERSON_SUCCESS:
            return {
                ...state,
                [action.id]: stateUtil.success(action.payload),
            };
        case GET_PERSON_ERROR:
            return {
                ...state,
                [action.id]: stateUtil.error(),
            };
        default:
            return state;
    }
};

export default personReducer;
