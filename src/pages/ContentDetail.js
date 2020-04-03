import React, { useEffect } from "react";
import Header from "../components/Header";
import ListLayout from "../layout/ListLayout";

function ContentDetail({ data }) {
    return (
        <div>
            <Header />
            <div className="container-fluid p-5">
                <div className="row" style={{ textIndent: "-9999px" }}>
                    EMPTY SPACE
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="font-weight-bold">{data.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentDetail;
