import React from "react";
import styled from "styled-components";

const LayoutStyledComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    box-sizing: border-box;
`;
const Image = styled.img`
    width: 170px;
    height: 220px;
    background: no-repeat url("http://bitly.kr/kcqr3Ljn");
    background-size: cover;
    margin: 15px;
    align-content: center;
    box-sizing: border-box;
`;

function HomeLayout() {
    return (
        <LayoutStyledComponent>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
        </LayoutStyledComponent>
    );
}

export default HomeLayout;
