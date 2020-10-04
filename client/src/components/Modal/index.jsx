import React from "react";
import { Btn } from "../common/Btn";
import s from "./Modal.module.sass";

export class Modal extends React.Component {
    render() {
        return (
            <div className={s.modal} onClick={this.props.handleCloseModal}>
                <div className={s.modal__inner}>
                    <div className={s.modal__header}>
                        <h1>{this.props.title}</h1>
                        <Btn btnView="assets/images/close.svg" handleClick={this.props.handleCloseModal}/>
                    </div>
                    <div className={s.modal__body}>
                        {this.props.children}
                    </div> 
                </div>
            </div>
        )
    }
}