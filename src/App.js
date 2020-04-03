import React from "react";
import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import "./css/styles.css";
import ContentDetailContainer from "./containers/ContentDetailContainer";
import PersonDetailContainer from "./containers/PersonDetailContainer";

function App() {
    return (
        <>
            <Route path="/" exact component={MainPage} />
            <Route path="/person/:id" component={PersonDetailContainer} />
            <Route path="/content/:id" component={ContentDetailContainer} />
        </>
    );
}

export default App;
