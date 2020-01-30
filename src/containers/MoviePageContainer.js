import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDataThunk } from "../modules/movie";
import MoviePage from "../components/MoviePage";
import reducerUtils from "../lib/movie_util";

function MoviePageContainer({ match }) {
    const dispatch = useDispatch();
    const { imdbID } = match.params;
    const { data, loading, error } = useSelector(
        state => state.movieReducer.movie[imdbID] || reducerUtils.initial()
    );
    useEffect(() => {
        if (data) return;

        dispatch(getMovieDataThunk(imdbID));
    }, [dispatch, imdbID, data]);

    if (loading && !data) return <div>LOADING</div>;
    // 에러 해결: 비동기 처리라서 data 에 값이 없을 때는 props 로 가지 않도록 만들어야 했음
    if (!data) return null;
    return <MoviePage data={data} />;
}

export default MoviePageContainer;
