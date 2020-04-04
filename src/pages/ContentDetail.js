import React from "react";
import Header from "../components/Header";
import ListLayout from "../layout/ListLayout";
import { runtime_change } from "../lib/functions";
import styled from "styled-components";

const Backdrop = styled.div`
    background-image: url(${props => props.url});
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

function ContentDetail({ detail, images, credits, recommandations, videos }) {
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
                            className="img-thumbnail"
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
                            <p>
                                {`${detail.release_date} ${runtime_change(
                                    detail.runtime
                                )}`}
                            </p>
                        </div>
                        <div>
                            <h5 className="font-weight-bold">Overview</h5>
                            <p className="lead">{detail.overview}</p>
                        </div>
                        <div>
                            <h5 className="font-weight-bold">Main Cast</h5>
                            {/* TODO: LISTLAYOUT JSON별로 따로 만들기 */}
                            <ListLayout type="profile" list={credits} />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <h5 className="font-weight-bold">Images</h5>
                        {/* <ListLayout list={} /> */}
                    </div>
                </div>
            </Backdrop>
        </div>
    );
}

export default ContentDetail;
