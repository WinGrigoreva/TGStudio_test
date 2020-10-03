// import "normalize";
import {App} from "./components/App";
import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "mobx-react";
import {UsersStore} from "./stores/usersStore";
import "./assets/styles/global.sass";

const _usersStore = new UsersStore();

ReactDOM.render(
    <Provider usersStoreProp={_usersStore}>
        <App />
    </Provider>,
    document.getElementById("app")
    );