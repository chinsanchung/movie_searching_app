import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieListThunk } from "../modules/movie";
import { RootState } from "../modules";
import { RouteComponentProps } from "react-router-dom";
import MovieList from "../components/MovieList";
import ErrorPage from "../layout/ErrorPage";

type KeywordsProps = {
    keywords: string;
};

const MovieListContainer: React.FC<RouteComponentProps<
    KeywordsProps
>> = props => {
    const { match } = props;
    const { keywords } = match.params;
    const { data, loading, error } = useSelector(
        (state: RootState) => state.movieReducer.list
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieListThunk(keywords));
    }, [keywords, dispatch]);

    if (!data && error) return <ErrorPage />;
    if (loading && !data) return null;
    if (data && !loading) return <MovieList data={data} keywords={keywords} />;

    return <></>;
};

export default MovieListContainer;
