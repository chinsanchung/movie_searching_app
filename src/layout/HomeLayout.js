import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ListUl, PosterDiv } from "../style/styledComponents";
import { Link } from "react-router-dom";
import { getMovieList } from "../api";

const LayoutStyledComponent = styled.div``;

function HomeLayout() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const shuffle = arr => {
        // 출처: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };
    useEffect(() => {
        const getList = async () => {
            try {
                const res_one = await getMovieList("out");
                const res_two = await getMovieList("man");

                const shuffled_list = shuffle([
                    ...res_one.Search,
                    ...res_two.Search
                ]);
                setList(list => list.concat(shuffled_list));
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        getList();
    }, []);

    if (loading && !list) return <div>LOADING</div>;
    if (!list) return null;

    return (
        <LayoutStyledComponent>
            <ListUl>
                {list.map(item => (
                    <li key={item.imdbID}>
                        <Link to={`/movie/${item.imdbID}`}>
                            <PosterDiv
                                url={item.Poster}
                                width="170px"
                                height="220px"
                                aria-labelledby={item.Title}
                                role="listitem"
                            />
                        </Link>
                    </li>
                ))}
            </ListUl>
        </LayoutStyledComponent>
    );
}

export default HomeLayout;
