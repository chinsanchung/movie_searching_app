import React from "react";
import { ContainerHome, ListUl, PosterDiv } from "../style/styledComponents";
import Header from "./Header";
import { Link } from "react-router-dom";

function MovieList({ movieData }) {
    const posterStyle = {
        width: 170,
        height: 220,
        margin: 15
    };

    if (!movieData) return null;

    return (
        <ContainerHome>
            <Header />
            <ListUl>
                {movieData.map(data => (
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
    );
}

export default MovieList;
