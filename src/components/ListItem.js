import React from "react";
import Link from "react-router-dom";
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
                <div className="col-4 col-sm-2 col-md-2 col-lg-2">
                    <div>
                        <img
                            alt="poster_img"
                            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                            className="img-fluid list-image"
                        />
                    </div>
                </div>
            );
        case "file":
            return (
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
                    <div>
                        <img
                            alt="poster_img"
                            src={`https://image.tmdb.org/t/p/w500$${item.poster_path}`}
                            className="img-fluid list-image"
                        />
                    </div>
                </div>
            );
        // TODO: video타입
        default:
            return null;
    }
    // return (
    //     <div className="col-4 col-sm-2 col-md-2 col-lg-2">
    //         <div>
    //             <img
    //                 alt="poster_img"
    //                 src={`https://image.tmdb.org/t/p/w500$`}
    //                 className="img-fluid list-image"
    //             />
    //         </div>
    //     </div>
    // );
}

export default ListItem;
