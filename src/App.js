import React from "react";
import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import "./css/styles.css";

function App() {
    return (
        <>
            <Route path="/" exact component={MainPage} />
        </>
    );
}

export default App;
