const LOAD_BOOKMARK: String = "LOAD_BOOKMARK" as const;
const ADD_BOOKMARK: String = "ADD_BOOKMARK" as const;
const DELETE_BOOKMARK: String = "DELETE_BOOKMARK" as const;

interface BookmarkParams {
    id: string;
    imdbID: string;
    Title: string;
    Poster: string;
}
interface BookmarkListParams {
    watchlist: BookmarkParams[];
}

export const loadBookmark = (data: BookmarkParams) => ({
    type: LOAD_BOOKMARK,
    payload: data
});
export const addBookmark = (data: BookmarkParams) => ({
    type: ADD_BOOKMARK,
    payload: data
});
export const deleteBookmark = (imdbID: string) => ({
    type: DELETE_BOOKMARK,
    payload: imdbID
});

type Action =
    | { type: "LOAD_BOOKMARK"; payload: BookmarkListParams }
    | { type: "ADD_BOOKMARK"; payload: any }
    | { type: "DELETE_BOOKMARK"; payload: String };

const initialState: BookmarkParams[] = [];

const bookmarkReducer = (state = initialState, action: Action) => {
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
