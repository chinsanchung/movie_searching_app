// PROBLEM: 왜 로딩바가 안나올까

import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
const Loader = styled.div`
    margin: 20% auto;
    width: 50px;
    height: 50px;
    border: 5px solid #fff;
    border-radius: 50%;
    border-top: 5px solid #2e2e2e;
    animation: ${spin} 1.5s linear infinite;
`;

function Loading() {
    return <Loader />;
}

export default Loading;
