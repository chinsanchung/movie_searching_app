import React, { useEffect } from "react";
import Header from "../components/Header";
import ListLayout from "../layout/ListLayout";
import { test_list } from "../lib/constant";
import { image_list } from "../lib/bradpittImage";

function PersonDetail({ data }) {
    const biography = data.biography.split("\n")[0];

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
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <img
                            alt={data.name}
                            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
                            className="img-thumbnail mb-2"
                        />
                        <div>
                            <strong>Born</strong>
                            <p>{`${data.birthday} in ${data.place_of_birth}`}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm">
                        {/* <button
                            className="btn btn-info d-block d-sm-none"
                            data-toggle="collapse"
                            data-target="#collapse-biography"
                            aria-expanded="false"
                            aria-controls="collapse-biography"
                        >
                            Read biography
                        </button> */}
                        <div></div>
                        <div>
                            <h5 className="font-weight-bold pd-4">Biography</h5>
                            <p>{biography}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h5 className="font-weight-bold pd-2">Tagged Images</h5>
                        <ListLayout list={image_list.results} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h5 className="font-weight-bold pd-2">Filmography</h5>
                        <ListLayout list={test_list} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonDetail;
