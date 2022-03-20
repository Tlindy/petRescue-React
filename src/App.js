import React from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <div className="App">
                    <Main />
                </div>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
