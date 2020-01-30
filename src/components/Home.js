import React from "react";
import Header from "./Header";
import HomeLayout from "../layout/HomeLayout";
import { ContainerHome } from "../style/styledComponents";

function Home() {
    return (
        <>
            <ContainerHome>
                <Header />
                <HomeLayout />
            </ContainerHome>
        </>
    );
}

export default Home;
