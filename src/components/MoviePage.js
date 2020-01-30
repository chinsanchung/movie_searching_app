import React from "react";
import Header from "./Header";
import { ContainerHome, PosterDiv } from "../style/styledComponents";
import styled from "styled-components";
import RottenTomatoes from "../assets/RottenTomatoes";
import imdbLogo from "../assets/icons8-imdb-48.png";

const SectionPage = styled.div`
    display: flex;
    padding: 0 50px;
    box-sizing: border-box;
    line-height: 1.25;
    /* &::after {
        content: "";
        clear: both;
    } */
`;
const posterSize = {
    width: 350,
    height: 450
};
const PageRight = styled.div`
    /* float: right; */
    width: 700px;
    text-align: left;
    .page__title {
        margin-bottom: 0px;
        font-size: 30px;
        font-weight: 700;
    }
    .page__ul {
        margin: 30px 0;
    }
    /* page__ul -> detail */
    .detail {
        margin-top: 5px;
    }
    .ul--li {
        display: inline-block;
        padding-right: 5px;
        margin-right: 5px;
        box-sizing: border-box;
        border-right: 1px solid #e5e5e5;
        font-size: 12px;
    }
    .page--subtitle {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .page--description {
        color: #666666;
    }
    /* page__ul score */
    .score {
        position: absolute;
        left: 50px;
        bottom: -55px;
    }
    .score-li {
        margin-right: 15px;
    }
`;

function MoviePage(props) {
    const {
        Title,
        Year,
        Rated,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        Ratings,
        Metascore,
        imdbRating,
        imdbVotes
    } = props.data;

    return (
        <>
            <ContainerHome>
                <Header />
                <SectionPage>
                    <PosterDiv
                        url={Poster}
                        style={posterSize}
                        role="movie-poster"
                        aria-labelledby={Title}
                    />
                    <PageRight>
                        <div className="page__title">
                            {Title}&nbsp;
                            <span
                                style={{
                                    fontSize: 17,
                                    color: "rgba(0, 0, 0, .5)"
                                }}
                            >
                                ({Year})
                            </span>
                        </div>
                        <div className="page__ul detail">
                            <div className="ul--li">{Genre}</div>
                            <div className="ul--li">{Runtime}</div>
                            <div
                                className="ul--li"
                                style={{ borderRight: "none" }}
                            >
                                {Rated}
                            </div>
                        </div>
                        <div className="page__ul plot">
                            <p className="page--subtitle">Plot</p>
                            <p>{Plot}</p>
                        </div>
                        <div className="page__ul production">
                            <p className="page--subtitle">Production crew</p>
                            <div className="page--description">
                                Director:&nbsp;
                                <span style={{ color: "#000000" }}>
                                    {Director}
                                </span>
                            </div>

                            <div className="page--description">
                                Writer:&nbsp;
                                <span style={{ color: "#000000" }}>
                                    {Writer}
                                </span>
                            </div>
                        </div>
                        <div className="page__ul casting">
                            <p className="page--subtitle">Starring</p>
                            <span>{Actors}</span>
                        </div>
                        <ul>
                            <li>{Language}</li>
                            <li>{Country}</li>
                            <li>{Awards}</li>
                        </ul>
                        <div className="page__ul score">
                            <div className="ul--li score-li">
                                <RottenTomatoes />
                                {Ratings.length > 1 &&
                                Ratings[1].Value !== "N/A"
                                    ? Ratings[1].Value
                                    : "     N/A"}
                            </div>
                            <div className="ul--li score-li">
                                <img
                                    width="55"
                                    alt="Metacritic logo"
                                    src="http://bitly.kr/aWJIimdV"
                                />
                                &nbsp;
                                {Metascore !== "N/A" ? Metascore : "   N/A"}
                            </div>
                            <div className="ul--li score-li">
                                <img
                                    width="20"
                                    align="bottom"
                                    alt="imdb Logo"
                                    src={imdbLogo}
                                />
                                &nbsp;
                                {imdbRating !== "N/A" ? imdbRating : "   N/A"}
                            </div>
                            <div
                                className="ul--li"
                                style={{ borderRight: "none" }}
                            >
                                Votes:{" "}
                                {imdbVotes !== "N/A" ? imdbVotes : "   N/A"}
                            </div>
                        </div>
                    </PageRight>
                </SectionPage>
            </ContainerHome>
        </>
    );
}

export default MoviePage;
