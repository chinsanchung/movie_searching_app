import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDataThunk } from "../modules/movie";
import { RootState } from "../modules";
import { RouteComponentProps } from "react-router-dom";
import MoviePage from "../components/MoviePage";
import movieUtils from "../lib/movie_util";

type Props = {
    imdbID: string;
};
const MoviePageContainer: React.FC<RouteComponentProps<Props>> = props => {
    const dispatch = useDispatch();
    const { match } = props;
    const { imdbID } = match.params;
    const { data, loading, error } = useSelector(
        (state: RootState) =>
            state.movieReducer.movie[imdbID] || movieUtils.initial()
    );

    useEffect(() => {
        dispatch(getMovieDataThunk(imdbID));
    }, [dispatch, imdbID]);

    // 해결: 비동기 처리라서 data 에 값이 없을 때는 props 로 가지 않도록 만들어야 했음
    if (!data) return null;
    if (error) return null;
    if (loading && !data) return null;

    return <MoviePage data={data} loading={loading} />;
};

export default MoviePageContainer;
