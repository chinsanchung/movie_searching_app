import React, { useEffect, useState } from "react";
import axios from "axios";
import { WATCH_LIST } from "../api";
import ListLayout from "./ListLayout";
import Header from "../components/Header";
import { ContainerHome } from "../style/styledComponents";

function WatchList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            try {
                const response = await axios.get(WATCH_LIST);
                setList(list => list.concat(response.data));
            } catch (error) {
                console.log(error);
            }
        };
        // TODO: 리스트 출력이 안됨
        getList();
    }, []);

    if (!list) return null;
    return (
        <>
            <ContainerHome>
                <Header />
                <h1>WISH LIST</h1>
                <ListLayout data={list} />
            </ContainerHome>
        </>
    );
}

export default WatchList;
