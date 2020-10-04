import { inject, observer } from "mobx-react";
import React from "react";
import { Btn } from "../common/Btn";
import s from "./Header.module.sass";


@inject("usersStoreProp")
@observer
export class Header extends React.Component {
    render() {
        const _usersStore = this.props.usersStoreProp;
        return (
            <div className={s.header}>
                <div className="container">
                    <div className={s.header__inner}>
                        <Btn btnView="assets/images/topcoat_like.svg" handleClick={_usersStore.openModal} />
                        <h1 className={s["header__title"]}>Users List</h1>
                        <Btn btnView="assets/images/update.svg" handleClick={_usersStore.refresh} />
                    </div>
                </div>
            </div>
        )
    }
}