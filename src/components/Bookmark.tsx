import React, { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { MdBookmark } from "react-icons/md";
import { WATCH_LIST } from "../api";
import { useDispatch } from "react-redux";
import { addBookmark, deleteBookmark } from "../modules/bookmark";
import axios from "axios";

type BookmarkProps = {
    checked: boolean;
};

const BookmarkIcon = styled.div`
    position: absolute;
    top: 7px;
    left: 10px;
    padding: 5px;
    box-sizing: border-box;
    opacity: 0.5;
    font-size: 1.8em;
    color: #e5e5e5;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
    ${(props: BookmarkProps) =>
        props.checked &&
        css`
            color: #cc3300;
            opacity: 1;
            &:hover {
                color: #cc3300;
            }
        `}
`;
type PropsType = {
    imdbID: string;
    poster: string;
    title: string;
};
type WatchlistItem = {
    id: string;
    imdbID: string;
    Title: string;
    Poster: string;
};
const Bookmark = ({ imdbID, poster, title }: PropsType) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const checkBookmark = useCallback(async () => {
        try {
            const response = await axios.get(WATCH_LIST);
            const found = response.data.find(
                (element: WatchlistItem) => element.imdbID === imdbID
            );
            if (found) {
                return true;
            }
            return false;
        } catch (error) {
            alert(error);
        }
    }, [imdbID]);
    const postData = (data: WatchlistItem) => {
        axios
            .post(WATCH_LIST, data)
            .then(response => console.log(response.data));
    };
    const deleteData = () => {
        const URL = `http://localhost:4000/watchlist/${imdbID}`;
        axios.delete(URL);
    };
    const onClickBookmark = async () => {
        const checkedAnswer = await checkBookmark();
        if (checkedAnswer === true) {
            console.log("true");
            setChecked(checked => !checked);
            dispatch(deleteBookmark(imdbID));
            deleteData();
        } else {
            const movieData: WatchlistItem = {
                id: imdbID,
                imdbID,
                Title: title,
                Poster: poster
            };
            console.log("false");
            setChecked(checked => !checked);
            dispatch(addBookmark(movieData));
            postData(movieData);
        }
    };
    useEffect(() => {
        const getBookmark = async () => {
            const response = await checkBookmark();
            if (response) {
                setChecked(checked => !checked);
            }
        };
        getBookmark();
    }, [checkBookmark]);

    return (
        <BookmarkIcon onClick={onClickBookmark} checked={checked}>
            <MdBookmark />
        </BookmarkIcon>
    );
};

export default Bookmark;
