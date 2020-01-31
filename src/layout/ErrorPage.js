import React from "react";
import styled from "styled-components";
import { ContainerHome } from "../style/styledComponents";
import Header from "../components/Header";

const ErrorMessage = styled.div`
    margin: 0 auto;
    padding-top: 150px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
`;

function ErrorPage() {
    return (
        <ContainerHome>
            <Header />
            <ErrorMessage>No Result. Please enter another keyword</ErrorMessage>
        </ContainerHome>
    );
}

export default ErrorPage;
