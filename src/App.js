import React from "react";
import MovieListContainer from "./containers/MovieListContainer";
import "./reset.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import MoviePage from "./containers/MoviePageContainer";

function App() {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/search/:keywords" component={MovieListContainer} />
            <Route path="/movie/:imdbID" component={MoviePage} />
        </>
    );
}

export default App;
