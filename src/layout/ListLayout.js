import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";

function ListLayout({ type, list }) {
    return (
        <div className="row d-flex flex-nowrap list-layout">
            {list.map((item, index) => (
                <ListItem key={index} type={type} item={item} />
            ))}
        </div>
    );
}

export default ListLayout;

/*
{list.map(item =>
                item.poster_path ? (
                    // <Link to={'/content/${item.id}`}>
                    <div className="col-4 col-sm-2 col-md-2 col-lg-2">
                        <div>
                            <img
                                alt="poster_img"
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                className="img-fluid list-image"
                            />
                        </div>
                    </div>
                ) : (
                    // <Link to={'/content/${item.media.id}`}>
                    <div className="col-4 col-sm-2 col-md-2 col-lg-2">
                        <div>
                            <img
                                alt="related_image"
                                src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
                                className="img-fluid list-image"
                            />
                        </div>
                    </div>
                )
            )}
*/
