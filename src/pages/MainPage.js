import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import { test_backdrop, test_list } from "../lib/constant";
import ListLayout from "../layout/ListLayout";

const JumboTron = styled.div`
    background-image: url(${props => props.url});
`;

function MainPage() {
    const [genre, setGenre] = useState([]);

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
                <ListLayout list={test_list} />
                <ListLayout list={test_list} />
            </div>
        </div>
    );
}

export default MainPage;
