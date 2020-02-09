const LOAD_BOOKMARK = "LOAD_BOOKMARK";
const ADD_BOOKMARK = "ADD_BOOKMARK";
const DELETE_BOOKMARK = "DELETE_BOOKMARK";

export const loadBookmark = data => ({ type: LOAD_BOOKMARK, payload: data });
export const addBookmark = data => ({ type: ADD_BOOKMARK, payload: data });
export const deleteBookmark = imdbID => ({
    type: DELETE_BOOKMARK,
    payload: imdbID
});

const initialState = [];

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BOOKMARK:
            return action.payload;
        case ADD_BOOKMARK:
            return state.concat(action.payload);
        case DELETE_BOOKMARK:
            return state.filter(item => item.imdbID !== action.payload);
        default:
            return state;
    }
};

export default bookmarkReducer;
