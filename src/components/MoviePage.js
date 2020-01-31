import React from "react";
import Header from "./Header";
import { ContainerHome, PosterDiv } from "../style/styledComponents";
import styled from "styled-components";
import RottenTomatoes from "../assets/RottenTomatoes";
import ImdbLogo from "../assets/ImdbLogo";

const SectionPage = styled.div`
    display: flex;
    padding: 10px 50px;
    box-sizing: border-box;
    background: #e2e2e2;
    line-height: 1.25;
`;
const posterSize = {
    width: 350,
    height: 450
};
const PageRight = styled.div`
    width: 690px;
    background: #d5d5d5;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-left: 5px;
    text-align: left;

    .page__title {
        margin-bottom: 0px;
        font-size: 30px;
        font-weight: 700;
    }
    .page__ul {
        margin: 30px 0;
        padding-bottom: 12px;
        box-sizing: border-box;
        border-bottom: 1px solid #cccccc;
    }
    /* page__ul -> detail */
    .detail {
        margin-top: 5px;
    }
    .ul--li {
        display: inline-block;
        padding: 2px 8px 2px 0;
        margin-right: 5px;
        box-sizing: border-box;
        border-right: 1px solid #cccccc;
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
    .score-li {
        margin-right: 10px;
        font-size: 17px;
    }
    .meta-score {
        display: inline-block;
        background-color: #66cc33;
        padding: 1px;
        box-sizing: border-box;
        text-align: center;
        vertical-align: 10%;
        color: #fff;
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
        Awards,
        Poster,
        Ratings,
        Metascore,
        imdbRating,
        imdbVotes,
        imdbID
    } = props.data;

    // Metascore, Rotten Tomatoes 링크 연결을 위해 타이틀 변경
    const metaTitle = Title.toLowerCase()
        .split(" ")
        .join("-");
    const rottenTitle = Title.toLowerCase()
        .split(" ")
        .join("_");

    return (
        <>
            <ContainerHome>
                <Header />
                <SectionPage>
                    <div>
                        <PosterDiv
                            url={Poster}
                            style={posterSize}
                            role="movie-poster"
                            aria-labelledby={Title}
                        />
                    </div>
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
                        <div className="page__ul">
                            <div>
                                <p className="page--subtitle">Awards</p>
                                <span>{Awards}</span>
                            </div>
                        </div>
                        <div className="page__ul score">
                            <div className="ul--li score-li">
                                {/* 참고: https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml */}
                                <a
                                    href={`https://www.rottentomatoes.com/m/${rottenTitle}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <RottenTomatoes />
                                    &nbsp;
                                    {Ratings.length > 1 &&
                                    Ratings[1].Value !== "N/A"
                                        ? Ratings[1].Value
                                        : "N/A"}
                                </a>
                            </div>
                            <div className="ul--li score-li">
                                <a
                                    href={`https://www.metacritic.com/movie/${metaTitle}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        width="50"
                                        height="15"
                                        alt="Metacritic logo"
                                        src="http://bitly.kr/aWJIimdV"
                                    />
                                    &nbsp;
                                    <div className="meta-score">
                                        {Metascore !== "N/A"
                                            ? Metascore
                                            : "N/A"}
                                    </div>
                                </a>
                            </div>
                            <div
                                className="ul--li score-li"
                                style={{ marginRight: 1, borderRight: "none" }}
                            >
                                <a
                                    href={`https://www.imdb.com/title/${imdbID}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ImdbLogo />
                                    &nbsp;
                                    {imdbRating !== "N/A" ? imdbRating : "N/A"}
                                </a>
                            </div>
                            <div
                                className="ul--li"
                                style={{ borderRight: "none" }}
                            >
                                ({imdbVotes !== "N/A" ? imdbVotes : "N/A"}
                                voted)
                            </div>
                        </div>
                    </PageRight>
                </SectionPage>
            </ContainerHome>
        </>
    );
}

export default MoviePage;