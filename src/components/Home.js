import React, { useState, useEffect } from "react";
import Header from "./Header";
import { ContainerHome } from "../style/styledComponents";
import { getMovieList } from "../api";
import ListLayout from "../layout/ListLayout";

function Home() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const shuffle = arr => {
        // 출처: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };
    useEffect(() => {
        const getList = async () => {
            try {
                const res_one = await getMovieList("out");
                const res_two = await getMovieList("man");

                const shuffled_list = shuffle([
                    ...res_one.Search,
                    ...res_two.Search
                ]);
                setList(list => list.concat(shuffled_list));
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        getList();
    }, []);

    if (loading && !list) return null;
    if (!list) return null;

    return (
        <>
            <ContainerHome>
                <Header />
                <ListLayout data={list} />
            </ContainerHome>
        </>
    );
}

export default Home;
