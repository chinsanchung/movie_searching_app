import React from "react";
import styled from "styled-components";
import { ContainerHome } from "../style/styledComponents";
import Header from "../components/Header";
import { MdNotInterested } from "react-icons/md";

const ErrorMessage = styled.div`
    margin: 0 auto;
    padding-top: 40px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
`;
const NoSign = styled.div`
    margin-top: 150px;
    font-size: 5em;
    color: rgb(255, 72, 51);
`;

const ErrorPage = () => {
    return (
        <ContainerHome>
            <Header />
            <div>
                <NoSign>
                    <MdNotInterested />
                </NoSign>
                <ErrorMessage>
                    <span>No Result. Please enter another keyword</span>
                </ErrorMessage>
            </div>
        </ContainerHome>
    );
};

export default ErrorPage;
