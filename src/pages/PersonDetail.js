import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ListLayout from "../layout/ListLayout";
import PropTypes from "prop-types";
import Filmography from "../layout/Filmography";

function PersonDetail({ detail, filmography, images, tagged_images }) {
    const biography = detail.biography.split("\n")[0];
    const [image_status, setStatus] = useState(true);
    const [sortedFilmo, setFilmo] = useState(null);

    useEffect(() => {
        const descFilmo = () => {
            const filmo_filtered = filmography.filter(
                (item) => item.release_date !== ""
            );
            const result = filmo_filtered.sort(
                (a, b) =>
                    parseFloat(b.release_date.split("-")[0]) -
                    parseFloat(a.release_date.split("-")[0])
            );
            setFilmo(result);
        };
        descFilmo();
    }, [filmography]);

    if (!sortedFilmo) return null;
    return (
        <div>
            <Header />
            <div className="container-fluid p-5">
                <div className="row" style={{ textIndent: "-9999px" }}>
                    EMPTY SPACE
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="font-weight-bold">{detail.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <img
                            alt={detail.name}
                            src={`https://image.tmdb.org/t/p/w500/${detail.profile_path}`}
                            className="img-thumbnail mb-2"
                        />
                        <div>
                            <strong>Birthday</strong>
                            <p>{detail.birthday}</p>
                        </div>
                        <div>
                            <strong>Place of Birth</strong>
                            <p>{detail.place_of_birth}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm">
                        <div>
                            <h5 className="font-weight-bold pd-4">Biography</h5>
                            <p className="lead">{biography}</p>
                        </div>
                        <div>
                            <div>
                                <h5 className="font-weight-bold pd-2">
                                    Filmography
                                </h5>
                            </div>
                            <Filmography filmography={sortedFilmo} />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="row">
                            <div
                                className="col-3 col-sm-2 font-weight-bold media--li"
                                onClick={() => setStatus(true)}
                            >
                                Images {images.length}
                            </div>
                            <div
                                className="col-3 col-sm-2 font-weight-bold media--li"
                                onClick={() => setStatus(false)}
                            >
                                Tagged Images {tagged_images.length}
                            </div>
                        </div>
                        {image_status ? (
                            <ListLayout type="file" list={images} />
                        ) : (
                            <ListLayout type="file" list={tagged_images} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonDetail;
