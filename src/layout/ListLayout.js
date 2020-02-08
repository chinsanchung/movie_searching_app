import React from "react";
import { ListUl } from "../style/styledComponents";
import Poster from "../components/Poster";
import { Link } from "react-router-dom";

function ListLayout({ data }) {
    return (
        <>
            <ListUl>
                {data.map(data => (
                    <li key={data.imdbID}>
                        <Link to={`/movie/${data.imdbID}`}>
                            <Poster
                                poster={data.Poster}
                                title={data.Title}
                                imdbID={data.imdbID}
                                width="170px"
                                height="220px"
                                aria-labelledby={data.Title}
                                role="movie-poster"
                            />
                        </Link>
                    </li>
                ))}
            </ListUl>
        </>
    );
}

export default ListLayout;
