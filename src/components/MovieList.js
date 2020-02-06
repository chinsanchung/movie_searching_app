import React, { useState, useEffect } from "react";
import { ContainerHome, ListUl, PosterDiv } from "../style/styledComponents";
import Header from "./Header";
import { Link } from "react-router-dom";
import LoadingSpinner from "../layout/LoadingSpinner";

function MovieList({ data }) {
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        setSpinner(spinner => !spinner);
        setTimeout(() => {
            setSpinner(spinner => !spinner);
        }, 1500);
    }, []);

    if (!data) return null;

    return (
        <>
            {spinner ? (
                <LoadingSpinner />
            ) : (
                <ContainerHome>
                    <Header />
                    <ListUl>
                        {data.map(data => (
                            <li key={data.imdbID}>
                                <Link to={`/movie/${data.imdbID}`}>
                                    <PosterDiv
                                        url={data.Poster}
                                        width="170px"
                                        height="220px"
                                        aria-labelledby={data.Title}
                                        role="listitem"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ListUl>
                </ContainerHome>
            )}
        </>
    );
}

export default MovieList;
