import React, { useEffect } from "react";
import PersonDetail from "../pages/PersonDetail";
import { people_data } from "../lib/bradpitt";
import { useDispatch } from "react-redux";

function PersonDetailContainer(props) {
    const dispatch = useDispatch();
    const { match } = props;
    const { id } = match.params;
    useEffect(() => {
        // dispatch(getDetailContentThunk(id));
        console.log(people_data.name);
    }, []);
    // data
    return <PersonDetail data={people_data} />;
}

export default PersonDetailContainer;
