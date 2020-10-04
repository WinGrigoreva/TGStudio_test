import React from "react";
import { MainPage } from "../MainPage";
import { UserPage } from "../UserPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/user/:id" component={UserPage} />
                        <Route component={()=><h2>Not found</h2>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}