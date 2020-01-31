import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieListThunk } from "../modules/movie";
import MovieList from "../components/MovieList";
import Loading from "../layout/Loading";
import ErrorPage from "../layout/ErrorPage";

function MovieListContainer({ match }) {
    const { keywords } = match.params;
    const { data, loading, error } = useSelector(
        state => state.movieReducer.list
    );
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(keywords);
        dispatch(getMovieListThunk(keywords));
    }, [keywords, dispatch]);

    if (!data && error) return <ErrorPage />;
    if (loading && !data) return <Loading />;

    return <MovieList movieData={data} />;
}
export default MovieListContainer;
