import React, { useEffect } from "react";
import ContentDetail from "../pages/ContentDetail";
import { useDispatch, useSelector } from "react-redux";
import { result } from "../lib/madmax";
import stateUtil from "../lib/state_util";
import { getMovieDetailThunk } from "../modules/movie";

function ContentDetailContainer(props) {
    const dispatch = useDispatch();
    const { match } = props;
    const id = match.params.id;
    const { data, loading, error } = useSelector(
        state => state.movieReducer.content[id] || stateUtil.initial()
    );
    useEffect(() => {
        dispatch(getMovieDetailThunk(id));
    }, [dispatch, id]);
    if (!data) return null;
    return (
        <ContentDetail
            detail={data.detail}
            images={data.images}
            credits={data.credits}
            recommandations={data.recommandations}
            videos={data.videos}
        />
    );
}

export default ContentDetailContainer;

// data: {
//     detail: {
//         // 영화 디테일
//     },
//     cast: {
//         // 영화 캐스트
//     },
//     poster: {
//         포스터
//     },
//     images: {

//     },
//     releated

// }
