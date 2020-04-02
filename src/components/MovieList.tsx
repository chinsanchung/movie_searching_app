import React, { useState, useEffect } from "react";
import { ContainerHome } from "../style/styledComponents";
import Header from "./Header";
import LoadingSpinner from "../layout/LoadingSpinner";
import ListLayout from "../layout/ListLayout";
import styled from "styled-components";

const ResultLayout = styled.div`
    margin: 10px;
    line-height: 1.5;
    .list-keywords {
        font-size: 1.2em;
        font-style: italic;
    }
    .list-length {
        font-size: 0.9em;
    }
`;
type MovieListProps = {
    data: any;
    keywords: string;
};
const MovieList = ({ data, keywords }: MovieListProps) => {
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
                    <ResultLayout>
                        <p className="list-keywords">
                            Search results for "{keywords}"
                        </p>
                        <p className="list-length">{data.length} titles</p>
                    </ResultLayout>
                    <ListLayout list={data} />
                </ContainerHome>
            )}
        </>
    );
};

export default MovieList;
