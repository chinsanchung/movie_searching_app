import React from "react";
import { Link } from "react-router-dom";
/*
credit--id, name, profile_path
images--id X, title X, file_path
recommandations-- id, title, poster_path
videos---key, name, 

genre-- id, title, poster_path
*/
function ListItem({ type, item }) {
    switch (type) {
        case "profile":
            return (
                <div className="col-3 col-sm-2 col-md-2 col-lg-2">
                    <Link to={`/person/${item.id}`}>
                        <img
                            alt={item.name}
                            title={item.name}
                            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                            className="img-fluid list-image"
                        />
                    </Link>
                </div>
            );
        case "file":
            return (
                //TODO: image file_path는 클릭 시 큰 창이 나오도록
                <div className="col-4 col-sm-2 col-md-2 col-lg-2">
                    <div>
                        <img
                            alt="poster_img"
                            src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
                            className="img-fluid list-image"
                        />
                    </div>
                </div>
            );
        case "poster":
            return (
                <div className="col-4 col-sm-2 col-md-2 col-lg-2">
                    <Link to={`/content/${item.id}`}>
                        {item.poster_path !== null ? (
                            <img
                                alt="poster_img"
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                className="img-fluid list-image"
                            />
                        ) : (
                            <img
                                alt="poster_img"
                                src={""}
                                className="img-fluid list-image"
                            />
                        )}
                    </Link>
                </div>
            );
        // TODO: video타입
        default:
            return null;
    }
}

export default ListItem;
