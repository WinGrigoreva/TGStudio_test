import React from "react";

export class HeaderTable extends React.Component {
    render () {
        return (
            <div className={s["users-table__header"]}>
                <span>User</span>
                <span>Reistration date</span>
                <span>Address</span>
                <span>View more</span>
            </div>
        )
    }
}