import { combineReducers } from "redux";
import movieReducer from "./movie";
import bookmarkReducer from "./bookmark";

export default combineReducers({
    movieReducer,
    bookmarkReducer
});
