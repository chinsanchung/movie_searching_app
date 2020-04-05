import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ListLayout from "../layout/ListLayout";
import { runtime_change } from "../lib/functions";
import { FaRegCalendar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import styled from "styled-components";

const Backdrop = styled.div`
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
`;

function ContentDetail({ detail, images, credits, videos }) {
    const [media, setMedia] = useState("images");
    useEffect(() => console.log("content"), []);
    return (
        <div>
            <Header />
            <Backdrop
                url={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
                className="container-fluid p-5"
            >
                <div className="row" style={{ textIndent: "-9999px" }}>
                    EMPTY SPACE
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <h3 className="font-weight-bold">
                            {detail.original_title}
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                            alt={detail.original_title}
                            className="img-thumbnail content-poster"
                        />
                    </div>
                    <div className="col-12 col-sm">
                        <div>
                            <p>
                                {detail.genres.map((genre, index) => (
                                    <a
                                        key={index}
                                        href={`/genre/${genre.id}`}
                                        className="mr-3 text-white"
                                    >
                                        {genre.name}
                                    </a>
                                ))}
                            </p>
                            <div className="mb-3">
                                <FaRegCalendar /> {detail.release_date} (US){" "}
                                <IoIosTimer /> {runtime_change(detail.runtime)}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-weight-bold">Overview</h5>
                            <p className="lead">{detail.overview}</p>
                        </div>
                        <div>
                            <h5 className="font-weight-bold">Main Cast</h5>
                            <ListLayout
                                type="profile"
                                list={credits.slice(0, 12)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-1 mr-3">
                                <h4>Media</h4>
                            </div>
                            <div
                                className="col-2 font-weight-bold media--li"
                                onClick={() => setMedia("images")}
                            >
                                Images {images.backdrops.length}
                            </div>
                            <div
                                className="col-2 font-weight-bold media--li"
                                onClick={() => setMedia("posters")}
                            >
                                Posters {images.posters.length}
                            </div>
                            <div
                                className="col-2 font-weight-bold media--li"
                                onClick={() => setMedia("videos")}
                            >
                                Videos {videos.length}
                            </div>
                        </div>
                        {(() => {
                            switch (media) {
                                case "images":
                                    return (
                                        <ListLayout
                                            type="file"
                                            list={images.backdrops}
                                        />
                                    );
                                case "posters":
                                    return (
                                        <ListLayout
                                            type="file"
                                            list={images.posters}
                                        />
                                    );
                                case "videos":
                                    return (
                                        <ListLayout
                                            type="video"
                                            list={videos}
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })()}
                        <div className="row mt-3">
                            <h5 className="font-weight-bold">
                                Recommandations
                            </h5>
                            {/* <ListLayout type="poster" list={recommandations} /> */}
                        </div>
                    </div>
                </div>
            </Backdrop>
        </div>
    );
}

export default ContentDetail;
