import { inject, observer } from "mobx-react";
import React from "react";
import { Btn } from "../common/Btn";
import { MainInfo } from "../common/MainInfo";
import s from "./UserPage.module.sass";
import moment from 'moment';


@inject("usersStoreProp")
@observer
export class UserPage extends React.Component {
    render() {
        const _usersStore = this.props.usersStoreProp;
        const _usersId = this.props.match.params.id;
        const _user = _usersStore.getUser(_usersId);
        return (
            <section className={s.profile}>
                <div className={s.profile__header}>
                    <div className="container">
                        <div className={s["profile__header-inner"]}>
                            <Btn btnView="/assets/images/arrow-left.svg" link="/" />
                            <h3 className={s["profile__header-title"]}>Profile</h3>
                        </div>
                    </div>
                </div>
                <div className={s.profile__content}>
                    <div className={s.profile__inner}>
                        <MainInfo user={_user} />
                        <div className={s["profile__inner-info"]}>
                            <div className={s.profile__login}>
                                <p className={s.title}>login:</p>
                                <p className={s.description}>{_user.login.username}</p>
                            </div>
                            <div className={s.profile__registered}>
                                <p className={s.title}>registered:</p>
                                <p className={s.description}>{moment(_user.registered.date).format('LL')} ({_user.registered.age} years)</p>
                            </div>
                            <div className={s.profile__dob}>
                                <p className={s.title}>date of birth:</p>
                                <p className={s.description}>{moment(_user.dob.date).format('LL')} ({_user.dob.age} years)</p>
                            </div>
                            <div className={s.profile__location}>
                                <p className={s.title}>location:</p>
                                <p className={s.subtitle}>country:</p>
                                <p className={s.description}>{_user.location.country}</p>
                                <p className={s.subtitle}>state:</p>
                                <p className={s.description}>{_user.location.state}</p>
                                <p className={s.subtitle}>city:</p>
                                <p className={s.description}>{_user.location.city}</p>
                                <p className={s.subtitle}>street:</p>
                                <p className={s.description}>{_user.location.street.name}, {_user.location.street.number}</p>
                                <p className={s.subtitle}>timezone:</p>
                                <p className={s.description}>{_user.location.timezone.description}: {_user.location.timezone.offset}</p>
                            </div>
                            <div className={s.profile__phone}>
                                <p className={s.title}>phone:</p>
                                <a className={s.description} href={`tel:${_user.phone.replace("-","").replace("(","").replace(")","")}`}>{_user.phone}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}