import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { test_backdrop } from "../lib/constant";
import { genre_list } from "../lib/genre_list";
import ListLayout from "../layout/ListLayout";
import axios from "axios";
import GenreListContainer from "../containers/GenreListContainer";

const JumboTron = styled.div`
    background-image: url(${(props) => props.url});
`;

function MainPage() {
    const [loading, setLoading] = useState(true);
    const getRecomm = () => {
        // PROBLEM: network 상에는 200으로 제대로 뜨는데 왜 여기서는 undefined?
        axios
            .get(
                "https://api.themoviedb.org/3/movie/76341/recommendations?api_key=abf55e994773bfc10c3de30ec5debec6&page=1"
            )
            .then((response) => response.data.results)
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    if (loading) return <div>LOADING</div>;
    return (
        <div>
            <Header />
            <JumboTron className="jumbotron" url={test_backdrop}>
                <div className="container pb-sm-3 pb-md-3">
                    <h2 className="display-5">MovSearch</h2>
                    <p className="lead">
                        Find your Movie, TV Show with MovSearch!
                    </p>
                    <div className="row"></div>
                </div>
            </JumboTron>
            <div className="container-fluid">
                {/* TODO: 스크롤마다 추가하는 방식이 필요할듯 */}
                {genre_list.slice(0, 2).map((genre) => (
                    <div className="p-2">
                        <h4 className="font-weight-bold">{genre.name}</h4>
                        <GenreListContainer id={genre.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;
