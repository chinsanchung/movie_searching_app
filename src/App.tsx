import React from "react";
import "./style/reset.css";
import "./style/style.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import MovieListContainer from "./containers/MovieListContainer";
import MoviePageContainer from "./containers/MoviePageContainer";
import WatchList from "./layout/WatchList";

const App = () => {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/search/:keywords" component={MovieListContainer} />
            <Route path="/movie/:imdbID" component={MoviePageContainer} />
            <Route path="/watchlist" component={WatchList} />
        </>
    );
};

export default App;
