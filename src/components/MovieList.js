import React, { useState, useEffect } from "react";
import { ContainerHome, ListUl, PosterDiv } from "../style/styledComponents";
import Header from "./Header";
import { Link } from "react-router-dom";
import LoadingSpinner from "../layout/LoadingSpinner";

function MovieList({ data }) {
    const posterStyle = {
        width: 170,
        height: 220,
        margin: 15
    };
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
                                    {data.Poster === "N/A" ? (
                                        <PosterDiv
                                            url={data.Poster}
                                            style={{
                                                ...posterStyle,
                                                background: "rgb(205, 205, 205)"
                                            }}
                                            aria-labelledby={data.Title}
                                            role="listitem"
                                        />
                                    ) : (
                                        <PosterDiv
                                            url={data.Poster}
                                            style={posterStyle}
                                            aria-labelledby={data.Title}
                                            role="listitem"
                                        />
                                    )}
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
