import React from "react";
import ListItem from "../components/ListItem";

function ListLayout({ type, list }) {
    return (
        <div className="row d-flex flex-nowrap mt-3 list-layout">
            {list.map((item, index) => (
                <ListItem key={index} type={type} item={item} />
            ))}
        </div>
    );
}

export default ListLayout;
