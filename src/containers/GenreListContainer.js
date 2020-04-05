import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenreListThunk } from "../modules/movie";
import ListLayout from "../layout/ListLayout";
import stateUtil from "../lib/state_util";

/*
credit--id, name, profile_path
images--id X, title X, file_path
recommandations-- id, title, poster_path
videos---key, name, 

genre-- id, title, poster_path
*/

function GenreListContainer({ id }) {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(
        (state) => state.movieReducer.genre[id] || stateUtil.initial()
    );
    useEffect(() => {
        dispatch(getGenreListThunk(id));
    }, [dispatch, id]);

    if (!data) return null;
    if (error) return null;
    if (loading && !data) return null;
    return <ListLayout type="poster" list={data} />;
}

export default GenreListContainer;
