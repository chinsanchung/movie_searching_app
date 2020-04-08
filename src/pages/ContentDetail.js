import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ListLayout from "../layout/ListLayout";
import { runtime_change } from "../util/functions";
import { FaRegCalendar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { FaVoteYea } from "react-icons/fa";
import styled from "styled-components";
import PropTypes from "prop-types";

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
        background: rgba(52, 58, 64, 0.3);
    }
`;

function ContentDetail({ detail, images, credits, videos }) {
    const [media, setMedia] = useState("images");
    useEffect(() => console.log("content"), []);
    return (
        <>
            <Header />
            <div className="container-fluid pt-5">
                <Backdrop
                    url={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
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
                                    <span className="mr-3">
                                        <FaRegCalendar /> {detail.release_date}{" "}
                                        (US)
                                    </span>
                                    <span className="mr-3">
                                        <IoIosTimer />{" "}
                                        {runtime_change(detail.runtime)}
                                    </span>
                                    <span className="mr-3">
                                        <FaVoteYea /> {detail.vote_average} / 10
                                    </span>
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
                </Backdrop>
                <div className="row mt-3 ml-1">
                    <div className="col-12">
                        <div className="row">
                            <span className="font-weight-bold media--title">
                                Media
                            </span>
                            <span
                                className="font-weight-bold media--li mr-2"
                                onClick={() => setMedia("images")}
                            >
                                Images {images.backdrops.length}
                            </span>
                            <span
                                className="font-weight-bold media--li mr-2"
                                onClick={() => setMedia("posters")}
                            >
                                Posters {images.posters.length}
                            </span>
                            <span
                                className="font-weight-bold media--li"
                                onClick={() => setMedia("videos")}
                            >
                                Videos {videos.length}
                            </span>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContentDetail;
