import React from "react";
import {Btn} from "../../common/Btn"

export class HeaderTable extends React.Component {
    render () {
        return (
            <div>
                <span>User</span>
                <span>Reistration date</span>
                <span>Address</span>
                <Btn btnView="arrow"/>
            </div>
        )
    }
}