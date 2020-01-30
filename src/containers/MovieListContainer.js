import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieListThunk } from "../modules/movie";
import MovieList from "../components/MovieList";

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

    if (!data) return null;
    if (loading && !data) return <div>Loading</div>;
    if (error) return <p>No Result. Please Input other keywords</p>;
    return <MovieList movieData={data} />;
}
export default MovieListContainer;
