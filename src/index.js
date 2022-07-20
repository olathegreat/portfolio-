import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import {ThemeProvider} from "./Context"




ReactDOM.render(
    <ThemeProvider>
         <App/>
    </ThemeProvider>
    , document.querySelector("#root")
);