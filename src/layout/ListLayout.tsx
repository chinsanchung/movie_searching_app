import React from "react";
import { Link } from "react-router-dom";
import { ListUl, Poster } from "../style/styledComponents";
import Bookmark from "../components/Bookmark";

function ListLayout(props: any) {
    const { list } = props;
    return (
        <>
            <ListUl>
                {list.map((data: any) => (
                    <li key={data.imdbID} style={{ position: "relative" }}>
                        <Bookmark
                            imdbID={data.imdbID}
                            poster={data.Poster}
                            title={data.Title}
                        />
                        <Link to={`/movie/${data.imdbID}`}>
                            <Poster
                                poster={data.Poster}
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
