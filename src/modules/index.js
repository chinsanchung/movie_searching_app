import { combineReducers } from "redux";
import movieReducer from "./movie";
import personReducer from "./person";
import bookmarkReducer from "./bookmark";

export const rootReducer = combineReducers({
    movieReducer,
    personReducer,
    bookmarkReducer,
});
