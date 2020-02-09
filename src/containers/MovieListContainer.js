import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieListThunk } from "../modules/movie";
import MovieList from "../components/MovieList";
import ErrorPage from "../layout/ErrorPage";

function MovieListContainer({ match }) {
    const { keywords } = match.params;
    const { data, loading, error } = useSelector(
        state => state.movieReducer.list
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieListThunk(keywords));
    }, [keywords, dispatch]);

    if (!data && error) return <ErrorPage />;
    if (loading && !data) return null;
    if (data && !loading) return <MovieList data={data} />;

    return <></>;
    // return <MovieList data={data} />;
}
export default MovieListContainer;
