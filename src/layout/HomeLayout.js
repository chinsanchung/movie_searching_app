import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ListUl, PosterDiv } from "../style/styledComponents";
import { Link } from "react-router-dom";
import { getMovieList } from "../api";

const LayoutStyledComponent = styled.div``;
const posterStyle = {
    width: 170,
    height: 220,
    margin: 15
};

function HomeLayout() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovieList("out").then(response => {
            setList(list => list.concat(response.data.Search));
        });
        getMovieList("man").then(response => {
            setList(list => list.concat(response.data.Search));
            setLoading(false);
        });
    }, []);

    if (loading && !list) return <div>LOADING</div>;
    if (!list) return null;

    return (
        <LayoutStyledComponent>
            <ListUl>
                {list.map(item => (
                    <li key={item.imdbID}>
                        <Link to={`/movie/${item.imdbID}`}>
                            {item.Poster === "N/A" ? (
                                <PosterDiv
                                    url={item.Poster}
                                    style={{
                                        ...posterStyle,
                                        background: "rgb(205, 205, 205)"
                                    }}
                                    aria-labelledby={item.Title}
                                    role="listitem"
                                />
                            ) : (
                                <PosterDiv
                                    url={item.Poster}
                                    style={posterStyle}
                                    aria-labelledby={item.Title}
                                    role="listitem"
                                />
                            )}
                        </Link>
                    </li>
                ))}
            </ListUl>
        </LayoutStyledComponent>
    );
}

export default HomeLayout;
