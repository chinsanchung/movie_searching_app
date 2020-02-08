import React, { useState, useEffect } from "react";
import { ContainerHome } from "../style/styledComponents";
import Header from "./Header";
import LoadingSpinner from "../layout/LoadingSpinner";
import ListLayout from "../layout/ListLayout";

function MovieList({ data }) {
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
                    <ListLayout data={data} />
                </ContainerHome>
            )}
        </>
    );
}

export default MovieList;
