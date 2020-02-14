import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { WATCH_LIST } from "../api";
import ListLayout from "./ListLayout";
import Header from "../components/Header";
import { ContainerHome } from "../style/styledComponents";
import { loadBookmark } from "../modules/bookmark";
import image from "../assets/watchlist_image.jpg";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { RootState } from "../modules";

const EmptyLayout = styled.div`
    margin-top: 30px;
`;
const DecorationImage = styled.img`
    width: 400px;
    margin: 15px;
`;

const WatchList = () => {
    const [loading, setLoading] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const bookmarkList = useSelector(
        (state: RootState) => state.bookmarkReducer
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const getList = async () => {
            try {
                const response = await axios.get(WATCH_LIST);
                dispatch(loadBookmark(response.data));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getList();

        setSpinner(spinner => !spinner);
        setTimeout(() => {
            setSpinner(spinner => !spinner);
        }, 1200);
    }, [dispatch]);

    if (loading && !bookmarkList) return <div></div>;

    return (
        <>
            {spinner ? (
                <LoadingSpinner />
            ) : (
                <ContainerHome>
                    <Header />
                    <EmptyLayout>
                        {bookmarkList.length > 0 ? (
                            <></>
                        ) : (
                            <>
                                <DecorationImage src={image} />
                                <h1>
                                    Use the bookmark icon to add movies or TV
                                    Shows to your WatchList.
                                </h1>
                            </>
                        )}
                    </EmptyLayout>
                    <ListLayout list={bookmarkList} />
                </ContainerHome>
            )}
        </>
    );
};

export default WatchList;
