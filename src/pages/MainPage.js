import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { test_backdrop, test_list } from "../lib/constant";
import ListLayout from "../layout/ListLayout";
import { genre_list } from "../lib/genre_list";

const JumboTron = styled.div`
    background-image: url(${props => props.url});
`;

function MainPage() {
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
                {genre_list.map(genre => (
                    <div className="p-2">
                        <h4 className="font-weight-bold">{genre.name}</h4>
                        <ListLayout list={test_list} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;
