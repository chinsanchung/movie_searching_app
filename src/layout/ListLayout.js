import React from "react";
import { test_poster } from "../lib/constant";
import SimpleBar from "simplebar-react";

function ListLayout({ list }) {
    return (
        <div className="p-2">
            <h4 className="">Action</h4>
            <div className="row d-flex flex-nowrap list-layout">
                {list.map(item => (
                    <div className="col-4 col-sm-2 col-md-2 col-lg-2">
                        <div>
                            <img
                                alt="img"
                                src={test_poster}
                                className="img-fluid list-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListLayout;
