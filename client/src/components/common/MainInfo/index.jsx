import React from "react";
import s from "./MainIfo.module.sass";

export class MainInfo extends React.Component {
    render () {
        return (
            <div className={s["user-table__info"]}>
                <img src={this.props.user.picture.thumbnail} alt="user photo" className={s["user-table__info-photo"]}/>
                <div className={s["user-table__info-main"]}>
                    <p>{`${this.props.user.name.last} ${this.props.user.name.first}`}</p>
                    <a href={`mailto:${this.props.user.email}`}>{this.props.user.email}</a>
                </div>
            </div>
        )
    }
}