import React from "react";
import { Header } from "../Header";
import { ContentTable } from "../table/ContentTable";
import s from "./App.module.sass"


export class App extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <Header />
                <ContentTable />
            </div>
        )
    }
}