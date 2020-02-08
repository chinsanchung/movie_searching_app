import React from "react";
import { WATCH_LIST } from "../api";
import { PosterDiv } from "../style/styledComponents";
import axios from "axios";

function Poster({ imdbID, poster, title, width, height }) {
    const checkExisted = async () => {
        try {
            const response = await axios.get(WATCH_LIST);
            const found = response.data.find(
                element => element.imdbID === imdbID
            );
            if (found) {
                return true;
            }
            return false;
        } catch (error) {
            alert(error);
        }
    };
    const postData = () => {
        axios
            .post(WATCH_LIST, {
                imdbID,
                title,
                poster
            })
            .then(response => console.log(response.data));
    };
    const deleteData = () => {
        const URL = `http://localhost:4000/wishList/${imdbID}`;
        axios.delete(URL);
    };
    const onClickPoster = async () => {
        const checkedAnswer = await checkExisted();
        if (checkedAnswer === true) {
            console.log("true");
            // deleteData();
        } else {
            console.log("false");
            // postData();
        }
    };
    return (
        <>
            <PosterDiv
                onClick={onClickPoster}
                poster={poster}
                width={width}
                height={height}
            />
        </>
    );
}

export default Poster;
