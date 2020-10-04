import React from "react";
import {MainInfo} from "../../common/MainInfo";
import {Btn} from "../../common/Btn";
import s from "./RowTable.module.sass";
import moment from 'moment';


export class RowTable extends React.Component {
    render () {
        return (
            <div className={s["user-table__row"]}>
                <MainInfo user={this.props.user}/>
                <div className={s["user-table__reg-date"]}>{moment(this.props.user.registered.date).format('LL')}</div>
                <div>{`${this.props.user.location.country} ${this.props.user.location.state} ${this.props.user.location.city} ${this.props.user.location.street.name} ${this.props.user.location.street.number}`}</div>            
                <Btn btnView="assets/images/arrow-right.svg" link={`/user/${this.props.user.login.uuid}`} />
            </div>
        )
    }
}