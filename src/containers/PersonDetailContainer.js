import React, { useEffect } from "react";
import PersonDetail from "../pages/PersonDetail";
import { useDispatch, useSelector } from "react-redux";
import { getPersonDetailThunk } from "../modules/person";
import stateUtil from "../lib/state_util";

function PersonDetailContainer(props) {
    const dispatch = useDispatch();
    const { match } = props;
    const id = match.params.id;
    const { data, loading, error } = useSelector(
        (state) => state.personReducer[id] || stateUtil.initial()
    );

    useEffect(() => {
        dispatch(getPersonDetailThunk(id));
    }, [dispatch, id]);

    if (!data) return null;
    if (loading & !data) return null;
    if (error) return null;

    return (
        <PersonDetail
            detail={data.detail}
            filmography={data.filmography}
            images={data.images}
            tagged_images={data.tagged_images}
        />
    );
}

export default PersonDetailContainer;
