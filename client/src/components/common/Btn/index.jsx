import React from "react";

export class Btn extends React.Component {
    render () {
        return (
            <div className="button">
                <a href={this.props.link} onClick={this.props.handleClick}><img src={this.props.btnView} alt="button"/></a>
            </div>
        )
    }
}