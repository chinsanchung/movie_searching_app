import { combineReducers } from "redux";
import movieReducer from "./movie";
import bookmarkReducer from "./bookmark";

export const rootReducer = combineReducers({
    movieReducer,
    bookmarkReducer
});
